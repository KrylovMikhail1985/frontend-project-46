#!/usr/bin/env node

import getFullPath from '../src/getFullPath.js';
import readFile from '../src/workingWithFiles.js';
import compareTwoFiles from '../src/compareTwoFiles.js';
import parsers from '../src/parsers.js';

test('compareTwoFiles_JSON', () => {
  const path1 = './__fixtures__/file1.json';
  const path2 = './__fixtures__/file2.json';

  const fullPath1 = getFullPath(path1);
  const obj1 = parsers(fullPath1);

  const fullPath2 = getFullPath(path2);
  const obj2 = parsers(fullPath2);

  const rightResult = readFile('./__fixtures__/file1CompareFile2');

  const currentResult = compareTwoFiles(obj1, obj2);
  expect(currentResult).toEqual(rightResult);
});

test('compareTwoFiles_YAML', () => {
  const path1 = './__fixtures__/file3.yaml';
  const path2 = './__fixtures__/file4.yml';

  const fullPath1 = getFullPath(path1);
  const obj1 = parsers(fullPath1);

  const fullPath2 = getFullPath(path2);
  const obj2 = parsers(fullPath2);

  const rightResult = readFile('./__fixtures__/file1CompareFile2');

  const currentResult = compareTwoFiles(obj1, obj2);
  expect(currentResult).toEqual(rightResult);
});
