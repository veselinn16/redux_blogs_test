import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';
export const CREATE_POSTS = 'CREATE_POSTS';

const rootUrl = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=redux032'

export function getPosts() {
    const request = axios.get(`${rootUrl}/posts${API_KEY}`);

    return {
        type: GET_POSTS,
        payload: request
    }
}

export function createPost(values) {
    const request = axios.post(`${rootUrl}/posts${API_KEY}`, values);

    return {
        type: CREATE_POSTS,
        payload: request
    }
}