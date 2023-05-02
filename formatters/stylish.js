import hasNested from '../src/hasNested.js';

const showElValue = (element, nested) => {
  if (hasNested(element)) {
    const keys = Object.keys(element);
    const mid = keys.map((key) => `  ${('    ').repeat(nested)}  ${key}: ${showElValue(element[key], nested + 1)}`);
    const prefix = '{';
    const postfix = `${('    ').repeat(nested)}}`;
    const inner = mid.join('\n');
    return `${prefix}\n${inner}\n${postfix}`;
  }
  return element;
};

const stylish = (comparison, nested = 0) => {
  const inner = comparison.map((element) => {
    switch (element.status) {
      case 'added':
        return `  ${('    ').repeat(nested)}+ ${element.key}: ${showElValue(element.value, nested + 1)}`;
      case 'removed':
        return `  ${('    ').repeat(nested)}- ${element.key}: ${showElValue(element.value, nested + 1)}`;
      case 'same':
        return `  ${('    ').repeat(nested)}  ${element.key}: ${showElValue(element.value, nested + 1)}`;
      case 'updated': {
        const first = `  ${('    ').repeat(nested)}- ${element.key}: ${showElValue(element.value1, nested + 1)}`;
        const second = `  ${('    ').repeat(nested)}+ ${element.key}: ${showElValue(element.value2, nested + 1)}`;
        return `${first}\n${second}`;
      }
      default: {
        const prefix = [`  ${('    ').repeat(nested)}  ${element.key}: {`];
        const postfix = [`${('    ').repeat(nested + 1)}}`];
        const mid = stylish(element.children, nested + 1);
        return `${prefix}\n${mid}\n${postfix}`;
      }
    }
  });
  return inner.join('\n');
};

const result = (comparison) => {
  const mid = stylish(comparison);
  return `{\n${mid}\n}`;
};
export default result;
