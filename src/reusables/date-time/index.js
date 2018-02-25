import React from 'react';
import styled from 'styled-components';
import { Italic } from '../typography';
import { GREY } from '../../constants/color';

const Date = styled.time`
  display: block;
  color: ${GREY};
  line-height: 1.8em;
  margin-bottom: 1.3334em;
  font-weight: 200;
`;

export default ({ children }) => (
  <Date><Italic>{children}</Italic></Date>
);
