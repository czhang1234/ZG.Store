import React from 'react';

class BlogDetails extends React.Component {
    handleSubmit(e){
        e.preventDetault();

        const { blogId } = this.props.params;
        const url = this.refs.url.value;
        
        console.log("submitting blog: " + blogId);
        this.props.updateBlog(parseInt(blogId), url);
    }

    render() {
        const { blogId } = this.props.params;
        const i = this.props.blogs.findIndex(b => b.blogId === parseInt(blogId));
        const blog = this.props.blogs[i];

        return (
            <form ref="blogForm" onSubmit={this.handleSubmit.bind(this)} >
                <div>
                    <label>Id: {blogId}</label>
                </div>
                <div>
                    <label htmlFor="url">Url: </label>
                    <input type="text" defaultValue={blog.url} ref="url" id="url" name="url" placeholder="Blog Url"/>
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
        )
    }
}

export default BlogDetails;