import _ from 'lodash';

const compare = (obj1, obj2) => {
  const keys = Object.keys({ ...obj1, ...obj2 });
  const sortedKeys = _.sortBy(keys);
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const result = sortedKeys.map((key) => {
    if (!keys1.includes(key)) {
      return { key, status: 'added', value: obj2[key] };
    }
    if (!keys2.includes(key)) {
      return { key, status: 'removed', value: obj1[key] };
    }
    if (_.isEqual(obj1[key], obj2[key])) {
      return { key, status: 'same', value: obj1[key] };
    }
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return { key, status: 'node', children: compare(obj1[key], obj2[key]) };
    }
    return {
      key, status: 'updated', value1: obj1[key], value2: obj2[key],
    };
  });
  return result;
};
export default compare;
