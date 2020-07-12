import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-ba5f7.firebaseio.com/'
})