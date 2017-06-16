import React from 'react';
import PostForm from './PostForm';

class PostDetails extends React.Component {
    componentDidMount(){
        const {postId} = this.props.params;
        this.props.postActions.fetchPost(postId);
    }
    submit = ({ blogId, title = '', content = '', visibility = 1, allowComments = 1, likes = 0 }) => {
        console.log("submit from inside form");
        let error = {};
        let isError = false;

        if (title.trim() === '') {
            error.title = 'Required';
            isError = true;
        }

        if (isError) {
            throw new SubmissionError(error);
        } else {
            //submit form to server
            console.log("valid submission");

            const {postId} =  this.props.params;
            this.props.postActions.updatePost(postId, blogId, title, content, visibility, allowComments, likes);
        }
    };
   

    render() {
        return (
            <PostForm onSubmit={this.submit}/>
        )
    }
}

export default PostDetails