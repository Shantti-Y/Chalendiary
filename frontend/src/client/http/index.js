import axios from 'axios'

const client = axios.create({
  baseURL: process.env.apiUrl,
  timeout: 4000,
  headers: {
    'Content-Type': 'application/json',
    'uid': 'MppZxQqO5Pl96IjyHs5Q1sl9nR7Z'
  }
});
export default client