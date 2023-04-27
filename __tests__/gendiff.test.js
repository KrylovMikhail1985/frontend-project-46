#!/usr/bin/env node

import fs from 'fs';
import gendiff from '../bin/gendiff.js';

const rightResult = fs.readFileSync('./__fixtures__/file1CompareFile2', 'utf8');
const rightResult2 = fs.readFileSync('./__fixtures__/file11CompareFile22', 'utf8');

test('compareTwoFiles_JSON', () => {
  const path1 = './__fixtures__/file1.json';
  const path2 = './__fixtures__/file2.json';

  const currentResult = gendiff(path1, path2);
  expect(currentResult).toEqual(rightResult);
});

test('compareTwoFiles_JSON_nested', () => {
  const path5 = './__fixtures__/file11.json';
  const path6 = './__fixtures__/file22.json';

  const currentResult = gendiff(path5, path6);
  expect(currentResult).toEqual(rightResult2);
});

test('compareTwoFiles_YAML', () => {
  const path3 = './__fixtures__/file3.yaml';
  const path4 = './__fixtures__/file4.yml';

  const currentResult = gendiff(path3, path4);
  expect(currentResult).toEqual(rightResult);
});
