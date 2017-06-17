import React from 'react';
import { SubmissionError } from 'redux-form';

import PostForm from './PostForm';

class PostDetails extends React.Component {
    componentDidMount(){
        const {postId} = this.props.params;
        this.props.postActions.fetchPost(postId);
    }
    submit = ({ blogId, title = '', content = '', visibility = '', allowComments, likes = '', status = ''}) => {
        console.log("submit from inside form");
        let error = {};
        let isError = false;

        if (title.trim() === '') {
            error.title = 'Required';
            isError = true;
        }

        if (content.trim() === '') {
            error.content = 'Required';
            isError = true;
        }

        if (likes.toString().trim() === '') {
            error.likes = 'Required';
            isError = true;
        }

        if (isError) {
            throw new SubmissionError(error);
        } else {
            //submit form to server
            console.log("valid submission");

            let {postId} =  this.props.params;
            postId = parseInt(postId);
            this.props.postActions.updatePost(postId, blogId, title, content, visibility, allowComments === "" ? false : true, likes, status);
        }
    };
   

    render() {
        return (
            <PostForm onSubmit={this.submit} params={this.props.params}/>
        )
    }
}

export default PostDetails