import React from 'react';

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
            <form ref="blogForm" onSubmit={this.handleSubmit.bind(this)} >          
                <div>
                    <label>Id: {blog.blogId}</label>
                </div>
                <div>
                    <label htmlFor="url">Url: </label>
                    <input type="text" defaultValue={blog.url} ref={(input) => this.urlInput = input} id="url" name="url" placeholder="Blog Url"/>
                </div>
                <div>                
                    <input type="submit"/>
                </div>
            </form>
        )
    }
}

export default BlogDetails;