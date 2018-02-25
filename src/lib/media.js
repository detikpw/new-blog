import { css } from 'styled-components';

const minimumWidth = {
  largerThanTablet: 768,
  largerThanPhone: 376,
};

export default Object.keys(minimumWidth).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${minimumWidth[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
