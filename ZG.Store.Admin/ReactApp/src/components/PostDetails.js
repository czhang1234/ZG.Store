import React from 'react';
import { SubmissionError } from 'redux-form';

import PostForm from './PostForm';

class PostDetails extends React.Component {
    componentDidMount(){
        let {postId} = this.props.params;
        postId = parseInt(postId);

        if(postId > 0){
            this.props.postActions.fetchPost(postId);
        }
    }

    componentWillReceiveProps(nextProps){
        if((!nextProps.selectedPost.creatingPost && nextProps.selectedPost.createdPost) ||
           (!nextProps.selectedPost.updatingPost && nextProps.selectedPost.updatedPost)){
                this.props.router.push(`/blog/${this.props.params.blogId}/posts`);
        }
    }

    submit = ({ blogId = this.props.params.blogId, title = '', content = '', visibility = 1, allowComments = '', likes = 0, status = 1}) => {
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

        if (isError) {
            throw new SubmissionError(error);
        } else {
            //submit form to server
            console.log("valid submission");

            let {postId} =  this.props.params;
            postId = parseInt(postId);

            if(postId > 0){
                this.props.postActions.updatePost(postId, blogId, title, content, visibility, allowComments === "" ? false : true, likes, status);
            }else{
                this.props.postActions.createPost(blogId, title, content, visibility, (allowComments === 'undefined' || allowComments === "") ? false : true, likes, status);
            }
        }
    };
   

    render() {
        return (
            <PostForm onSubmit={this.submit} params={this.props.params}/> //pass params to PostForm's props 
        )
    }
}

export default PostDetails