import React from 'react'
import { Collum, Data, Image, Info } from './commons'

export const Project = ({
  title,
  description,
  created_at,
  students,
  handleAddComment,
}) => {
  return (
    <Collum border>
      <div>
        <Image
          src='https://www.pngfind.com/pngs/m/594-5947661_png-file-svg-project-icon-free-transparent-png.png'
          alt='Project Image'
        />
      </div>
      <Data>
        <Info>
          <p>Title: {title}</p>
          <p>Description: {description}</p>
          <p>Create At: {created_at}</p>
          <p>Students: {students}</p>
        </Info>
        <Collum>
          <button onClick={handleAddComment}>Add Comment</button>
          <button>Edit</button>
          <button>Delete</button>
        </Collum>
      </Data>
    </Collum>
  )
}
