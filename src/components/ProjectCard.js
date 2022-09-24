import React from 'react'
import { Image, Card } from './commons'

export const ProjectCard = ({ _id, title, created_at, students }) => {
  return (
    <Card to={`/project/${_id}`}>
      <Image
        size={50}
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
