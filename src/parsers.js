#!/usr/bin/env node

import fs from 'fs';
import yaml from 'js-yaml';

export default (path) => {
  const fileText = fs.readFileSync(path, 'utf8');
  const extension = path.split('.').at(-1);
  switch (extension) {
    case ('json'):
      return JSON.parse(fileText);
    default:
      return yaml.load(fileText);
  }
};
