import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/index';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return (
            <div>Posts Index</div>
        )
    }
}

export default connect(null, { getPosts })(PostsIndex); // {getPosts: getPosts}