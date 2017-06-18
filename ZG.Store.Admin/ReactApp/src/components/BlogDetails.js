import React from 'react';
import { SubmissionError } from 'redux-form';

import BlogForm from '../components/BlogForm';

class BlogDetails extends React.Component {
    componentDidMount() {
        let { blogId } = this.props.params;
        blogId = parseInt(blogId);

        if (blogId > 0) {
            this.props.blogActions.fetchBlog(blogId);
        }
    }

    componentWillReceiveProps(nextProps){
        if((!nextProps.selectedBlog.creatingBlog && nextProps.selectedBlog.createdBlog) ||
           (!nextProps.selectedBlog.updatingBlog && nextProps.selectedBlog.updatedBlog)){
            this.props.router.push('/'); //programmatically change route. Once the blog is created or updated, go back to bloglist page
        }
    }

    submit = ({ name = '', url = '' }) => {
        //form validation
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

            const { blogId } = this.props.params;
            if (blogId > 0) {
                this.props.blogActions.updateBlog(blogId, name, url);
            } else {
                this.props.blogActions.createBlog(name, url);
            }
        }
    };

    render() {
        return (
            <BlogForm onSubmit={this.submit} />
        )
    }
}

export default BlogDetails;