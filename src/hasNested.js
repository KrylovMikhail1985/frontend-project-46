import _ from 'lodash';

export default (value) => {
  let result = true;
  if (_.isInteger(value) || _.isString(value) || _.isBoolean(value) || _.isTypedArray(value)
  || _.isUndefined(value) || _.isNaN(value) || _.isNull(value)) {
    result = false;
  }
  return result;
};
