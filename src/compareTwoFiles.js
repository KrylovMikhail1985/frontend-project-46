import _ from 'lodash';

const arrayHasSuchPair = (array, pair) => {
  let result = false;
  array.forEach((thisPair) => {
    if (_.isEqual(thisPair, pair)) {
      result = true;
    }
  });
  return result;
};

const valueByKey = (array, key) => {
  let result = NaN;
  array.forEach(([key2, value]) => {
    if (_.isEqual(key, key2)) {
      result = value;
    }
  });
  return result;
};

const compareJSON = (obj1, obj2) => {
  const array1 = Object.entries(obj1);
  const array2 = Object.entries(obj2);
  array1.sort();
  array2.sort();
  const result = ['{'];
  array1.forEach((pair) => {
    const [key, value] = pair;
    const valueOtherArray = valueByKey(array2, key);
    if (arrayHasSuchPair(array2, pair)) {
      result.push(`    ${key}: ${value}`);
    } else if (valueOtherArray) {
      result.push(`  - ${key}: ${value}`);
      result.push(`  + ${key}: ${valueOtherArray}`);
    } else {
      result.push(`  - ${key}: ${value}`);
    }
  });
  array2.forEach((pair) => {
    const [key, value] = pair;
    const valueOtherArray = valueByKey(array1, key);
    if (!valueOtherArray) {
      result.push(`  + ${key}: ${value}`);
    }
  });
  result.push('}');
  return result.join('\n');
};
export default compareJSON;
