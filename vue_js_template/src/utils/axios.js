
import axios from 'axios'

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/todos"
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.post['Content-Type'] = 'application/json'

export default axios