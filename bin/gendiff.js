#!/usr/bin/env node

import getFullPath from '../src/getFullPath.js';
import compareTwoFiles from '../src/compareTwoFiles.js';
import stylish from '../src/stylish.js';
import parsers from '../src/parsers.js';

export default (path1, path2, format) => {
  const fullPath1 = getFullPath(path1);
  const obj1 = parsers(fullPath1);
  const fullPath2 = getFullPath(path2);
  const obj2 = parsers(fullPath2);
  const difference = compareTwoFiles(obj1, obj2);
  let result;
  switch (format) {
    case ('stylish'):
      result = stylish(difference);
      break;
    default:
      result = stylish(difference);
  }
  return result;
};
