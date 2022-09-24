import React, { useState } from 'react'
import { createComment } from '../utils/projectApi'

export const AddComment = ({ id, handleAddComment, getComments }) => {
  const [description, setDescription] = useState()

  const handleClick = async () => {
    const newComment = {
      description,
      created_at: new Date().toLocaleDateString('pt-BR'),
      project_id: id,
    }
    try {
      await createComment(newComment)
      handleAddComment()
      getComments()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleClick}>Send</button>
    </div>
  )
}
