import React, { useEffect, useState } from 'react'
import { Project } from '../components/Project'
import { useNavigate, useParams } from 'react-router-dom'
import { AddComment } from '../components/AddComment'
import { getProject, getComments } from '../utils/projectApi'

export const ProjectDetail = () => {
  const [project, setProject] = useState({})
  const [comments, setComments] = useState([])
  const [addComment, setAddComment] = useState(true)
  const { id } = useParams()

  const navigate = useNavigate()

  const handleAddComment = () => {
    setAddComment(!addComment)
  }

  useEffect(() => {
    getProject(id)
      .then((result) => setProject(result))
      .catch(() => navigate('/'))

    getComments(id).then((result) => setComments(result))
  }, [])

  return (
    <>
      <Project {...project} handleAddComment={handleAddComment} />
      {addComment && (
        <AddComment
          id={id}
          handleAddComment={handleAddComment}
          getComments={getComments}
        />
      )}
      {comments.map((comment) => (
        <div key={comment._id}>
          <p>{comment.created_at}</p>
          <p>{comment.description}</p>
        </div>
      ))}
    </>
  )
}
