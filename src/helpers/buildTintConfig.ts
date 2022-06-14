import Values from 'values.js';

export const buildTintConfig = (tints: Values[]) =>
  tints.reduce((acc, curr, i) => {
    let idx = i * 100;

    if (i === 0) {
      idx = 50;
    }

    if (i === 10) {
      idx = 900;
    }

    acc[idx] = curr.hexString();

    return acc;
  }, {});
