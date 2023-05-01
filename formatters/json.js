import _ from 'lodash';

import hasNested from '../src/hasNested.js';

const json = (diffInArray) => {
  const result = {};
  diffInArray.forEach((element) => {
    if (_.isArray(element.value) && _.isEqual(element.change, (' '))) {
      const name = (`  ${element.key}`);
      result[name] = json(element.value);
    } else if (_.isEqual(element.change, ('yes'))) {
      const [el1, el2] = element.value;
      const name1 = (`- ${el1.key}`);
      const name2 = (`+ ${el1.key}`);
      result[name1] = el1.value;
      result[name2] = el2.value;
    } else if (hasNested(element.value)) {
      const name = (`${element.change} ${element.key}`);
      result[name] = element.value;
    } else {
      const name = (`${element.change} ${element.key}`);
      result[name] = element.value;
    }
  });
  return result;
};

export default json;
