import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { PRIMARY_BLACK } from '../constants/color';

export default styled(({ to, children, className }) =>
  <Link className={className} to={to}>{children}</Link>)`
    text-decoration: none;
    color: ${PRIMARY_BLACK};
    font-weight: 700;
  `;
