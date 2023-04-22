#!/usr/bin/env node

import { Command } from 'commander';
import getFullPath from './src/getFullPath.js';
import compareTwoFiles from './src/compareTwoFiles.js';
import parsers from './src/parsers.js';
// const { version } = require('./package.json');
// const getFullPath = require('./src/getFullPath.js');

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('version')
  .option('-f, --format <type>', 'output format')
  .argument('<path1>', 'path for file1')
  .argument('<path2>', 'path for file2')
  .action((path1, path2) => {
    const fullPath1 = getFullPath(path1);
    const obj1 = parsers(fullPath1);
    const fullPath2 = getFullPath(path2);
    const obj2 = parsers(fullPath2);
    const result = compareTwoFiles(obj1, obj2);
    console.log(result);
  });

program.parse();
