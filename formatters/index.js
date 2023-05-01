#!/usr/bin/env node

import _ from 'lodash';
import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

export default (name) => {
  if (_.isEqual(name, 'plain')) {
    return plain;
  }
  if (_.isEqual(name, 'json')) {
    return json;
  }
  return stylish;
};
