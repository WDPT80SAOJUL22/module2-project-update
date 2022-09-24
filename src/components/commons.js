import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  background-color: #98092b;
  display: flex;
  align-items: center;
  height: 50px;
  margin-bottom: 10px;
`

export const Logo = styled.h1`
  background-color: #9fb982;
  width: 100px;
  height: 30px;
  margin: 0 20px 0 0;
`

export const Data = styled.div`
  display: flex;
`

export const Info = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Card = styled(Link)`
  display: flex;
  text-decoration: none;
  color: black;
  justify-content: space-around;
  width: 500px;
  border: 1px solid black;
  margin: 5px;
`

// Extendendo um componente e aplicado estilo

export const Button = styled(Link)`
  text-decoration: none;
  padding: 5px;
  margin: 5px;
  border: 1px solid black;
  color: white;
  border-radius: 10%;
  background-color: blue;
`

export const Anchor = styled(Link)`
  text-decoration: none;
  color: #df931b;
`

// Change Atributes using props

export const Image = styled.img`
  width: ${({ size }) => (size ? `${size}px` : '200px')};
`

export const Collum = styled.div`
  border: ${(props) => props.border && '1px solid black'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
