import React from 'react';
import { styled } from 'styletron-react';
import Link from '../reusables/link';
import { rhythm } from '../utils/typography';
import { MOBILE, LARGER_THAN_MOBILE } from '../constants/layout';

const NavigationWrapper = styled('div', {
  textAlign: 'center',
  overflow: 'auto',
});

const NavList = styled('ul', {
  display: 'inline-block',
  verticalAlign: 'top',
  margin: `0 0 ${rhythm(1.5)}`,
  padding: `${rhythm(0.25)} ${rhythm(1.25)}`,
  backgroundColor: 'black',
  [LARGER_THAN_MOBILE]: {
    width: 'auto',
    borderRadius: `0 0 ${rhythm(0.5)} ${rhythm(0.5)}`,
  },
  [MOBILE]: {
    width: '100%',
    overflow: 'auto',
  },
});

const NavItem = styled('li', {
  display: 'block',
  float: 'left',
  listStyle: 'none',
  textAlign: 'center',
  textTransform: 'uppercase',
  color: 'white',
});

const NavLink = styled(
  ({ className, to, children }) =>
    <Link className={className} to={to}>{children}</Link>,
  {
    ':hover': {
      backgroundColor: '#555',
    },
    textDecoration: 'none',
    display: 'block',
    color: 'white',
    borderRadius: '4px',
    [LARGER_THAN_MOBILE]: {
      marginBottom: 0,
      padding: '0 10px',
    },
    [MOBILE]: {
      padding: '6px 20px',
      width: '100%',
      overflow: 'auto',
    },
  },
);

export default () => (
  <NavigationWrapper>
    <NavList>
      <NavItem><NavLink to="about">TEST</NavLink></NavItem>
      <NavItem><NavLink to="about">TEST</NavLink></NavItem>
    </NavList>
  </NavigationWrapper>
);

// .navigation-wrapper {
//   text-align: center;
//   @include clearfix;
//   ul {
//     display: inline-block;
//     width: 100%;
//     vertical-align: top;
//     margin: 0 0 50px;
//     padding: 4px 20px;
//     background-color: $black;
//     @include media($medium) {
//       width: auto;
//       @include rounded(0 0 10px 10px);
//     }
//     @include clearfix;
//   }
//   li {
//     display: block;
//     float: left;
//     list-style: none;
//     text-align: center;
//     @include font-size(24,no);
//     text-transform: uppercase;
//     color: $white;
//     @include media($medium) {
//       @include font-size(14,no);
//     }
//     a:hover {
//       @include box-shadow($shadow: inset 0 0 1px $white);
//     }
//   }
//   a {
//     display: block;
//     margin-bottom: 10px;
//     padding: 12px 20px;
//     @include media($medium) {
//       margin-bottom: 0;
//       padding: 6px 10px;
//     }
//     color: $white;
//     @include rounded(4px);
//     &:hover {
//       background-color: lighten($black, 10);
//     }
//   }
// }
