#!/usr/bin/env node

import getFullPath from '../src/getFullPath.js';
import readFile from '../src/workingWithFiles.js';
import compareJSON from '../src/compareTwoFiles.js';

test('compareTwoFiles', () => {
  const path1 = './__fixtures__/file1.json';
  const path2 = './__fixtures__/file2.json';

  const fullPath1 = getFullPath(path1);
  const file1Text = readFile(fullPath1);
  const obj1 = JSON.parse(file1Text);

  const fullPath2 = getFullPath(path2);
  const file2Text = readFile(fullPath2);
  const obj2 = JSON.parse(file2Text);

  const rightResult = readFile('./__fixtures__/file1CompareFile2');

  const currentResult = compareJSON(obj1, obj2);
  expect(currentResult).toEqual(rightResult);
});
