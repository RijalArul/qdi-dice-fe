import axios from 'axios'

const API_URL = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 30000
})

export default API_URL
