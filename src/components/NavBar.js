import React from 'react'
import { Nav, Logo, Anchor } from './commons'

export const NavBar = () => {
  return (
    <Nav>
      <Logo>Logo do Projeto</Logo>
      <Anchor to='/'>Home</Anchor>
    </Nav>
  )
}
