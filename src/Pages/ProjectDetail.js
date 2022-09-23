import React, { useEffect, useState } from 'react'
import { Project } from '../components/Project'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const ProjectDetail = () => {
  const [project, setProject] = useState({})
  const { id } = useParams()

  const getProject = async () => {
    try {
      const { data } = await axios.get(
        `https://ironrest.herokuapp.com/WDPT80-projects/${id}`
      )
      setProject(data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(id)

  useEffect(() => {
    getProject()
  }, [])

  return <Project {...project} />
}
