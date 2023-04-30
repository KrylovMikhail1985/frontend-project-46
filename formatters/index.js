#!/usr/bin/env node

import _ from 'lodash';
import stylish from './stylish.js';
import plain from './plain.js';

export default (name) => {
  if (_.isEqual(name, 'plain')) {
    return plain;
  }
  return stylish;
};
