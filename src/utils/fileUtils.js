const fs = require('fs-extra');

module.exports = {
  async copyTemplate(templatePath, destinationPath) {
    await fs.copy(templatePath, destinationPath, { overwrite: true });
  },
  async ensureDir(dirPath) {
    await fs.ensureDir(dirPath);
  },
};