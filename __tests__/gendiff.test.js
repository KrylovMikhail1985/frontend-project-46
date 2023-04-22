#!/usr/bin/env node

import fs from 'fs';
import gendiff from '../bin/gendiff.js';

const rightResult = fs.readFileSync('./__fixtures__/file1CompareFile2', 'utf8');

test('compareTwoFiles', () => {
  const path1 = './__fixtures__/file1.json';
  const path2 = './__fixtures__/file2.json';

  const currentResult = gendiff(path1, path2);
  expect(currentResult).toEqual(rightResult);
});

test('compareTwoFiles_YAML', () => {
  const path1 = './__fixtures__/file3.yaml';
  const path2 = './__fixtures__/file4.yml';

  const currentResult = gendiff(path1, path2);
  expect(currentResult).toEqual(rightResult);
});
