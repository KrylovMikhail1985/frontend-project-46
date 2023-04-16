#!/usr/bin/env node

import { Command } from 'commander';
import getFullPath from './src/getFullPath.js';
import readFile from './src/workingWithFiles.js';
import compareJSON from './src/compareTwoFiles.js';
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
    const file1Text = readFile(fullPath1);
    const obj1 = JSON.parse(file1Text);
    const fullPath2 = getFullPath(path2);
    const file2Text = readFile(fullPath2);
    const obj2 = JSON.parse(file2Text);
    const result = compareJSON(obj1, obj2);
    console.log(result);
  });

program.parse();
