import _ from 'lodash';

import hasNested from './hasNested.js';

const valueByKey = (array, key) => {
  let result = NaN;
  array.forEach(([key2, value]) => {
    if (_.isEqual(key, key2)) {
      result = value;
    }
  });
  return result;
};

const compare = (obj1, obj2, nested = 0) => {
  const array1 = Object.entries(obj1).sort();
  const array2 = Object.entries(obj2).sort();
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const arrayOfKeys = _.union(keys1, keys2).sort();
  const result = [];
  arrayOfKeys.forEach((key) => {
    const value1 = valueByKey(array1, key);
    const value2 = valueByKey(array2, key);
    if (hasNested(value1) && hasNested(value2)) {
      result.push({
        nested, change: ' ', key, value: compare(value1, value2, nested + 1),
      });
    } else if (_.isEqual(value1, value2)) {
      result.push({
        nested, change: ' ', key, value: value1,
      });
    } else if (!_.isNaN(value1) && !_.isNaN(value2)) {
      result.push({
        nested, change: '-', key, value: value1,
      });
      result.push({
        nested, change: '+', key, value: value2,
      });
    } else if (!_.isNaN(value1)) {
      result.push({
        nested, change: '-', key, value: value1,
      });
    } else {
      result.push({
        nested, change: '+', key, value: value2,
      });
    }
  });
  return result;
};
export default compare;
