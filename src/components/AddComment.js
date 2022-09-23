import axios from 'axios'
import React, { useState } from 'react'

export const AddComment = ({ id, handleAddComment, getComments }) => {
  const [description, setDescription] = useState()

  const createComment = async () => {
    const newComment = {
      description,
      created_at: new Date().toLocaleDateString('pt-BR'),
      project_id: id,
    }
    try {
      await axios.post(
        'https://ironrest.herokuapp.com/WDPT80-comments',
        newComment
      )
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
      <button onClick={createComment}>Send</button>
    </div>
  )
}
