import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectList } from '../components/ProjectList';
import styled from 'styled-components';

const Button = styled(Link)`
  text-decoration: none;
  padding: 5px;
  margin: 5px;
  border: 1px solid black;
  color: white;
  border-radius: 10%;
  background-color: blue;
`;

export const Home = () => {
  return (
    <div>
      <Button to='/new-project'>Criar Projeto</Button>
      <ProjectList />
    </div>
  );
};
