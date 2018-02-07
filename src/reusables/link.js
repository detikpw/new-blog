import React from 'react';
import Link from 'gatsby-link';

export default ({ to, children, className }) =>
  <Link className={className} to={to}>{children}</Link>;
