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
  const result = [];
  diffInArray.forEach((element) => {
    if (_.isArray(element.value) && _.isEqual((element.change), ' ')) {
      result.push(plain(element.value, `${prefix}${element.key}.`));
    } else if (_.isArray(element.value) && _.isEqual((element.change), 'yes')) {
      const [el1, el2] = element.value;
      result.push(`Property '${prefix}${element.key}' was updated. From ${getRightAppearanceOfValue(el1.value)} to ${getRightAppearanceOfValue(el2.value)}`);
    } else if (_.isEqual((element.change), '-')) {
      result.push(`Property '${prefix}${element.key}' was removed`);
    } else if (_.isEqual((element.change), '+')) {
      result.push(`Property '${prefix}${element.key}' was added with value: ${getRightAppearanceOfValue(element.value)}`);
    }
  });
  return result.join('\n');
};

export default plain;
