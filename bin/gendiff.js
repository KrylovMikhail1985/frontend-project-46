#!/usr/bin/env node

import getFullPath from '../src/getFullPath.js';
import compareTwoFiles from '../src/compareTwoFiles.js';
import parsers from '../src/parsers.js';

export default (path1, path2) => {
  const fullPath1 = getFullPath(path1);
  const obj1 = parsers(fullPath1);
  const fullPath2 = getFullPath(path2);
  const obj2 = parsers(fullPath2);
  return compareTwoFiles(obj1, obj2);
};
