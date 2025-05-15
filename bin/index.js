#!/usr/bin/env node

const { program } = require('commander');
const addComponent = require('../src/commands/add');

program
  .version('1.0.5')
  .description('pixelblock-rn-cli: A CLI tool for generating organized React Native components with TypeScript');

program
  .command('add [name]')
  .description('Add a new component (e.g., button, textinput) or select interactively')
  .option('-d, --dir <path>', 'Output directory')
  .action(addComponent);

program.parse(process.argv);