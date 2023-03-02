import axios from 'axios'

const baseUrl = 'http://localhost:3000/persons'

const getAll = () => {
    const response = axios.get(baseUrl)
    return response.then(response => (response.data))
}

const create = (obj) => {
    const response = axios.post(baseUrl, obj)
    return response
}
export default { getAll, create }