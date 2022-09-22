import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const ProjectForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [students, setStudents] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newProject = {
      title,
      description,
      students: students.split(','),
      created_at: new Date().toLocaleDateString('pt-BR'),
    }

    console.log(newProject)
    try {
      const { data } = await axios.post(
        'https://ironrest.herokuapp.com/WDPT80-projects',
        newProject
      )
      const id = data.ops[0]._id
      navigate(`/project/${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Students</label>
        <input
          type='text'
          value={students}
          onChange={(e) => setStudents(e.target.value)}
        />
      </div>
      <button> Criar </button>
    </form>
  )
}
