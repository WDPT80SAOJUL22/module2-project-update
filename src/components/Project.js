import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 200px;
`

const Data = styled.div`
  display: flex;
`
const Collum = styled.div`
  border: ${(props) => props.border && '1px solid black'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Info = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

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
