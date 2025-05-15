const fs = require('fs-extra');
const path = require('path');
const inquirer = require('inquirer');

async function addComponent(name, options) {
  // Load configuration from .pixelblockrc
  const configPath = path.join(process.cwd(), '.pixelblockrc');
  const config = await fs.pathExists(configPath) ? await fs.readJson(configPath) : {};
  const defaultOutputDir = config.outputDir || 'components/UI';
  const outputDir = options.dir || defaultOutputDir;

  let componentName = name ? name.toLowerCase() : null;
  const templateBaseDir = path.join(__dirname, '..', 'templates');
  const supportedComponents = await fs.readdir(templateBaseDir);

  if (!supportedComponents.length) {
    console.error('No component templates found in src/templates/');
    return;
  }

  // Prompt for component selection if no name is provided or invalid
  if (!componentName || !supportedComponents.includes(componentName)) {
    if (componentName) {
      console.warn(`Component "${componentName}" not found. Please select a component.`);
    }
    const { selectedComponent } = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedComponent',
        message: 'Select a component to generate:',
        choices: supportedComponents,
      },
    ]);
    componentName = selectedComponent.toLowerCase();
  }

  const templateDir = path.join(templateBaseDir, componentName);
  const capitalizedName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
  const componentDir = path.join(process.cwd(), outputDir, capitalizedName);
  const files = [
    { template: `${capitalizedName}.tsx`, destination: `${capitalizedName}.tsx` },
    { template: 'index.ts', destination: 'index.ts' },
    { template: 'styles.ts', destination: 'styles.ts' },
    { template: 'types.ts', destination: 'types.ts' },
    { template: 'README.md', destination: 'README.md' },
  ];

  try {
    // Validate template files
    const requiredFiles = files.map(f => f.template);
    const templateFiles = await fs.readdir(templateDir);
    const missingFiles = requiredFiles.filter(f => !templateFiles.includes(f));
    if (missingFiles.length) {
      throw new Error(`Missing required template files in ${templateDir}: ${missingFiles.join(', ')}`);
    }

    // Check if component directory already exists
    if (await fs.pathExists(componentDir)) {
      const { overwrite } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'overwrite',
          message: `Component ${capitalizedName} already exists at ${componentDir}. Overwrite?`,
          default: false,
        },
      ]);
      if (!overwrite) {
        console.log('Operation cancelled.');
        return;
      }
      await fs.remove(componentDir);
    }

    // Verify template directory
    if (!await fs.pathExists(templateDir)) {
      throw new Error(`Template directory not found: ${templateDir}`);
    }

    await fs.ensureDir(componentDir);

    for (const file of files) {
      const templatePath = path.join(templateDir, file.template);
      const destinationPath = path.join(componentDir, file.destination);

      if (!await fs.pathExists(templatePath)) {
        throw new Error(`Template file not found: ${templatePath}`);
      }

      const templateContent = await fs.readFile(templatePath, 'utf-8');
      await fs.writeFile(destinationPath, templateContent);
    }

    console.log(`${capitalizedName} component created at ${componentDir}`);
  } catch (error) {
    console.error('Error adding component:', error.message);
  }
}

module.exports = addComponent;