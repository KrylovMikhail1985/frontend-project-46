#!/usr/bin/env node

const { Command } = require('commander');

const { version } = require('./package.json');

const program = new Command();
program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version(version);

program.parse();
