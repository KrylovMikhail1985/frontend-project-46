import _ from 'lodash';

export default (value) => {
  if (_.isInteger(value) || _.isString(value) || _.isBoolean(value) || _.isTypedArray(value)
  || _.isUndefined(value) || _.isNaN(value) || _.isNull(value)) {
    return false;
  }
  return true;
};
