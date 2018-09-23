import { GET_POSTS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_POSTS:
            return _.mapKeys(action.payload.data, 'id') // { id: post }
        default:
            return state;
    }
}