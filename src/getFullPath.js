import _ from 'lodash';
import path from 'path';

export default (currentPath) => {
  if (_.startsWith(currentPath, '.') || _.startsWith(currentPath, '/')) {
    return currentPath;
  }
  return path.resolve('files', currentPath);
};
//  module.exports = getFullPath;
