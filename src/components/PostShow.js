import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions/index';

class PostShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params.id; // provided to us by React-router
        this.props.getPost(id);
    }

    render() {
        return (
            <div>
                Post Show
            </div>
        )
    }
}

function mapStateToProps({ posts } , ownProps) { // state.posts
    return { post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { getPost })(PostShow);