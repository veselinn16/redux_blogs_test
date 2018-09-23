import axios from 'axios';

export const GET_POSTS = 'GET_POSTS'

const rootUrl = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=redux032'

export function getPosts() {
    const request = axios.get(`${rootUrl}/posts${API_KEY}`);

    return {
        type: GET_POSTS,
        payload: request
    }
}