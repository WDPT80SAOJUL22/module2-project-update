import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled(Link)`
  display: flex;
  text-decoration: none;
  color: black;
  justify-content: space-around;
  width: 500px;
  border: 1px solid black;
  margin: 5px;
`

const Image = styled.img`
  width: 50px;
`

export const ProjectCard = ({ _id, title, created_at, students }) => {
  return (
    <Card to={`/project/${_id}`}>
      <Image
        src='https://www.pngfind.com/pngs/m/594-5947661_png-file-svg-project-icon-free-transparent-png.png'
        alt='Project Image'
      />
      <div>
        <p>Title: {title}</p>
        <p>Created at: {created_at}</p>
        <p>Students: {students.join(', ')}</p>
      </div>
    </Card>
  )
}
