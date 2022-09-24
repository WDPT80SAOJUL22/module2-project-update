import React, { useEffect, useState } from 'react'
import { Project } from '../components/Project'
import { useNavigate, useParams } from 'react-router-dom'
import { AddComment } from '../components/AddComment'
import axios from 'axios'

export const ProjectDetail = () => {
  const [project, setProject] = useState({})
  const [comments, setComments] = useState([])
  const [addComment, setAddComment] = useState(true)
  const { id } = useParams()

  const navigate = useNavigate()

  const handleAddComment = () => {
    setAddComment(!addComment)
  }

  const getProject = async () => {
    try {
      const { data } = await axios.get(
        `https://ironrest.herokuapp.com/WDPT80-projects/${id}`
      )
      setProject(data)
    } catch (error) {
      navigate('/')
    }
  }

  const getComments = async () => {
    try {
      const { data } = await axios.get(
        'https://ironrest.herokuapp.com/WDPT80-comments'
      )
      const filteredData = data.filter((comment) => comment.project_id === id)
      setComments(filteredData)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(id)

  useEffect(() => {
    getProject()
    getComments()
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
        <div>
          <p>{comment.created_at}</p>
          <p>{comment.description}</p>
        </div>
      ))}
    </>
  )
}
