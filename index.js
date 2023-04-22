#!/usr/bin/env node

import { Command } from 'commander';
import gendiff from './bin/gendiff.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('version')
  .option('-f, --format <type>', 'output format')
  .argument('<path1>', 'path for file1')
  .argument('<path2>', 'path for file2')
  .action((path1, path2) => {
    const result = gendiff(path1, path2);
    console.log(result);
  });

program.parse();
