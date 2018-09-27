import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPost } from '../actions/index';

class PostShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params; // provided to us by React-router
        this.props.getPost(id);
    }

    render() {
        const { post } = this.props;
        
        if(!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to='/' className="btn btn-primary">Back To Index</Link>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )            
    }
}

function mapStateToProps({ posts } , ownProps) { // state.posts
    return { post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { getPost })(PostShow);