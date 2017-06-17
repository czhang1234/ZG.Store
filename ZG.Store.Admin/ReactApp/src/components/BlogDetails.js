import React from 'react';
import { SubmissionError } from 'redux-form';

import BlogForm from '../components/BlogForm';

class BlogDetails extends React.Component {
    componentDidMount(){
        const { blogId } = this.props.params;
        this.props.blogActions.fetchBlog(blogId);
    }

    submit = ({ name = '', url = '' }) => {
        console.log("submit from inside form");
        let error = {};
        let isError = false;

        if (name.trim() === '') {
            error.url = 'Required';
            isError = true;
        }

        if (url.trim() === '') {
            error.url = 'Required';
            isError = true;
        }

        if (isError) {
            throw new SubmissionError(error);
        } else {
            //submit form to server
            console.log("valid submission");

            const {blogId} =  this.props.params;
            this.props.blogActions.updateBlog(blogId, name, url);
        }
    };

    render() {
        return (
            <BlogForm onSubmit={this.submit}/>
        )
    }
}

export default BlogDetails;