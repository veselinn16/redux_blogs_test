import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPost, deletePost } from '../actions/index';

class PostShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params; // provided to us by React-router
        this.props.getPost(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { post } = this.props;
        
        if(!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to='/' className="btn btn-primary">Back To Index</Link>
                <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
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

export default connect(mapStateToProps, { getPost, deletePost })(PostShow);