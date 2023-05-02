import _ from 'lodash';

import hasNested from '../src/hasNested.js';

const getRightAppearanceOfValue = (value) => {
  if (_.isEqual(value, null) || _.isEqual(value, false) || _.isEqual(value, true)
  || _.isNumber(value)) {
    return value;
  }
  if (hasNested(value)) {
    return '[complex value]';
  }
  return `'${value}'`;
};

const plain = (diffInArray, prefix = '') => {
  const text = diffInArray.map((element) => {
    switch (element.status) {
      case 'added':
        return `Property '${prefix}${element.key}' was added with value: ${getRightAppearanceOfValue(element.value)}`;
      case 'removed':
        return `Property '${prefix}${element.key}' was removed`;
      case 'updated': {
        const f = `Property '${prefix}${element.key}' was updated. From ${getRightAppearanceOfValue(element.value1)} `;
        const s = `to ${getRightAppearanceOfValue(element.value2)}`;
        return `${f}${s}`;
      }
      case 'node':
        return plain(element.children, `${prefix}${element.key}.`);
      default:
        return null;
    }
  });
  const result = text.filter((str) => !_.isNull(str));
  return result.join('\n');
};

export default plain;
