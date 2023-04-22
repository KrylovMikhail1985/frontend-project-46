#!/usr/bin/env node

import fs from 'fs';
import yaml from 'js-yaml';

export default (path) => {
  let result = {};
  const fileText = fs.readFileSync(path, 'utf8');
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
