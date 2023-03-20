import axios from 'axios'

const baseUrl = '/api/persons'

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
    const response = axios.delete(`${baseUrl}/${id}`)
    return response.then(response => response.data)
}

export default { getAll, create , deleteOne, update}