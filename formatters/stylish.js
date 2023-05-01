import _ from 'lodash';

import hasNested from '../src/hasNested.js';

const showInner = (nested, key, value, change = ' ') => {
  const array = Object.entries(value).sort();
  const result = [];
  result.push(`  ${(' ').repeat(nested * 4)}${change} ${key}: {`);
  array.forEach((element) => {
    const [keyIn, valueIn] = element;
    if (hasNested(valueIn)) {
      result.push(showInner(nested + 1, keyIn, valueIn));
      //    } else if (_.isNaN(valueIn)) {
      //      result.push(`  ${(' ').repeat((nested +1)  * 4)}  ${keyIn}:`);
    } else {
      result.push(`  ${(' ').repeat((nested + 1) * 4)}  ${keyIn}: ${valueIn}`);
    }
  });
  result.push(`${(' ').repeat((nested + 1) * 4)}}`);
  return result.join('\n');
};

const compareInner = (nested, key, value, change = ' ') => {
  const result = [];
  if (!_.isEqual(change, ('yes'))) {
    result.push(`  ${(' ').repeat(nested * 4)}${change} ${key}: {`);
  }
  value.forEach((element) => {
    if (_.isArray(element.value)) {
      result.push(compareInner(element.nested, element.key, element.value, element.change));
      //    } else if (_.isEqual(element.change, ('yes'))) {
      //      result.push(compareInner(element.nested, element.key, element.value));
    } else if (hasNested(element.value)) {
      result.push(showInner(element.nested, element.key, element.value, element.change));
      //    } else if (_.isEqual(element.value, '')) {
      //      result.push(`  ${(' ').repeat(element.nested * 4)}${element.change} ${element.key}:`);
    } else {
      result.push(`  ${(' ').repeat(element.nested * 4)}${element.change} ${element.key}: ${element.value}`);
    }
  });
  if (!_.isEqual(change, ('yes'))) {
    result.push(`${(' ').repeat((nested + 1) * 4)}}`);
  }
  return result.join('\n');
};

const stylish = (diffInArray) => {
  const result = ['{'];
  diffInArray.forEach((element) => {
    if (_.isArray(element.value) && _.isEqual(element.change, (' '))) {
      result.push(compareInner(element.nested, element.key, element.value, element.change));
    } else if (_.isEqual(element.change, ('yes'))) {
      const [el1, el2] = element.value;
      result.push(`  ${(' ').repeat(el1.nested * 4)}${el1.change} ${el1.key}: ${el1.value}`);
      result.push(`  ${(' ').repeat(el2.nested * 4)}${el2.change} ${el2.key}: ${el2.value}`);
    } else if (hasNested(element.value)) {
      result.push(showInner(element.nested, element.key, element.value, element.change));
      //    } else if (_.isEqual(element.value, '')) {
      //      result.push(`  ${(' ').repeat(element.nested * 4)}${element.change} ${element.key}`);
    } else {
      result.push(`  ${(' ').repeat(element.nested * 4)}${element.change} ${element.key}: ${element.value}`);
    }
  });
  result.push('}');
  return result.join('\n');
};

export default stylish;
