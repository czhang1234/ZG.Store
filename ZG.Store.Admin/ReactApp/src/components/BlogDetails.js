import React from 'react';

import BlogForm from '../components/BlogForm';

class BlogDetails extends React.Component {
    componentDidMount(){
        const { blogId } = this.props.params;
        this.props.fetchBlog(blogId);
    }

    submit = ({ url = '' }) => {
        console.log("submit from inside form");
        let error = {};
        let isError = false;

        if (url.trim() === '') {
            error.url = 'Required';
            isError = true;
        }

        if (url.length < 5) {
            error.url = "Url too short";
            isError = true;
        }

        if (isError) {
            throw new SubmissionError(error);
        } else {
            //submit form to server
            console.log("valid submission");

            const {blogId} =  this.props.params;
            this.props.updateBlog(blogId, url);
        }
    };

    render() {
        return (
            <BlogForm onSubmit={this.submit}/>
        )
    }
}

export default BlogDetails;