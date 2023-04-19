// const fs = require('fs');
import fs from 'fs';

const readFile = (path) => fs.readFileSync(path, 'utf8');

//  const readFile = (path) => {
//    try {
//      const data = fs.readFileSync(path, 'utf8');
//      return data;
//    } catch (err) {
//      console.error(err);
//    }
//    return NaN;
//  };
export default readFile;
