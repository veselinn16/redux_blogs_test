import _ from 'lodash';
import { GET_POSTS, GET_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload); // remove the post from the state
        case GET_POST:
            // const post = action.payload.data;
            // const newState = {...state }; // get all existing posts
            // newState[post.id] = post;
            // return newState;
            return { ...state, [action.payload.data.id]: action.payload.data }; // add new post; square braces create a new KEY, not an array!
        case GET_POSTS:
            return _.mapKeys(action.payload.data, 'id') // { id: post }
        default:
            return state;
    }
}