import React from 'react'
import { ProjectList } from '../components/ProjectList'
import { Button } from '../components/commons'

export const Home = () => {
  return (
    <div>
      <Button to='/new-project'>Criar Projeto</Button>
      <ProjectList />
    </div>
  )
}
