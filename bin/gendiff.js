#!/usr/bin/env node

import getFullPath from '../src/getFullPath.js';
import compareTwoFiles from '../src/compareTwoFiles.js';
import formatter from '../formatters/index.js';
import parsers from '../src/parsers.js';

export default (path1, path2, format) => {
  const fullPath1 = getFullPath(path1);
  const obj1 = parsers(fullPath1);
  const fullPath2 = getFullPath(path2);
  const obj2 = parsers(fullPath2);
  const difference = compareTwoFiles(obj1, obj2);
  const formatFunction = formatter(format);
  return formatFunction(difference);
};
