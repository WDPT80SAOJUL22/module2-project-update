import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #98092b;
  display: flex;
  align-items: center;
  height: 50px;
`;

const Logo = styled.h1`
  background-color: #9fb982;
  width: 100px;
  height: 30px;
  margin: 0 20px 0 0;
`;

// extendendo um componente e aplicado estilo

const Anchor = styled(Link)`
  text-decoration: none;
  color: #df931b;
`;

export const NavBar = () => {
  return (
    <Nav>
      <Logo>Logo</Logo>
      <Anchor to='/'>Home</Anchor>
    </Nav>
  );
};
