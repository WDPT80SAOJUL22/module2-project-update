import axios from 'axios'

const baseURL = 'https://ironrest.herokuapp.com'

export const getProject = async (id) => {
  try {
    const { data } = await axios.get(`${baseURL}/WDPT80-projects/${id}`)
    return data
  } catch (error) {
    throw error
  }
}

export const getComments = async (id) => {
  try {
    const { data } = await axios.get(`${baseURL}/WDPT80-comments`)
    const filteredData = data.filter((comment) => comment.project_id === id)
    return filteredData
  } catch (error) {
    throw error
  }
}

export const createComment = async (newComment) => {
  try {
    await axios.post(`${baseURL}/WDPT80-comments`, newComment)
    return
  } catch (error) {
    throw error
  }
}
