#!/usr/bin/env node

import yaml from 'js-yaml';
import readFile from './workingWithFiles.js';

export default (path) => {
  let result = {};
  const fileText = readFile(path);
  const extension = path.split('.').at(-1);
  switch (extension) {
    case ('json'):
      result = JSON.parse(fileText);
      break;
    default:
      result = yaml.load(fileText);
  }
  return result;
};
