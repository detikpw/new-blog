import React from 'react';
import styled from 'styled-components';
import { Italic } from '../typography';

const Date = styled.time`
  display: block;
  color: 'black';
  line-height: 1.8em;
  margin-bottom: 1.3334em;
  font-weight: 1000;
`;

export default ({ children }) => (
  <Date><Italic>{children}</Italic></Date>
);
