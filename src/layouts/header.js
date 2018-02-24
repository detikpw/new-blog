import React from 'react';
import styled from 'styled-components';
import Link from '../reusables/link';
import { GREY } from '../constants/color';

const HeaderWrapper = styled.header`
  border-bottom: 1px solid ${GREY};
  text-align: center;
  margin-bottom: 3em;
  height: 5em;
  position: relative;
  justify-content: space-between;
  display: flex;
`;

const Header = styled.div`
  margin: 0 auto;
  position: relative;
  width: 100%;
  align-self: center;
`;

const SiteTitle = styled.span`
  float: left;
`;

const SiteLink = Link.extend`
  display: inline-block;
`;

const NavigationWrapper = styled.span`
  right: 0;
  bottom: 0;
  position: absolute;
`;

const NavLink = SiteLink.extend`
  padding-left: 10px;
  font-weight: 300;
`;

export default () => (
  <HeaderWrapper>
    <Header>
      <SiteTitle><SiteLink><h1>DUMMY_SITE_TITLE</h1></SiteLink></SiteTitle>
      <NavigationWrapper>
        <NavLink>DUMMY</NavLink>
        <NavLink>DUMMY</NavLink>
      </NavigationWrapper>
    </Header>
  </HeaderWrapper>
);
