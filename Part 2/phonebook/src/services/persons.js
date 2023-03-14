import axios from 'axios'

const baseUrl = 'http://localhost:3000/persons'

const getAll = () => {
    const response = axios.get(baseUrl)
    return response.then(response => (response.data))
}

const create = (obj) => {
    const response = axios.post(baseUrl, obj)
    return response.then(response => response.data)
}

const update = (id, obj) => {
    const request = axios.put(`${baseUrl}/${id}`, obj)
    return request.then(response => response.data)
}

const deleteOne = (id) => {
    axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create , deleteOne, update}