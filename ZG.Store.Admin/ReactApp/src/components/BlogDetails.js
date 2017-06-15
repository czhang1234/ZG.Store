import React from 'react';

import BlogForm from '../components/BlogForm';

class BlogDetails extends React.Component {
    componentDidMount(){
        const { blogId } = this.props.params;
        this.props.fetchBlog(blogId);
    }

    handleSubmit(e){
        e.preventDetault();

        const { blogId } = this.props.params;
        const url = this.urlInput.value;
        
        console.log("submitting blog: " + blogId);
        this.props.updateBlog(parseInt(blogId), url);
    }

    render() {
        const blog = this.props.selectedBlog.blog;

        return (
            <BlogForm {...this.props}/>
        )
    }
}

export default BlogDetails;