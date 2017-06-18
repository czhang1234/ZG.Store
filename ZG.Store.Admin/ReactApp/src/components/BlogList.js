import React from 'react';
import { Link } from 'react-router';

import { Table } from 'react-bootstrap';

class BlogList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseInsideRowIndex: null
        }
    }

    componentDidMount() {
        this.props.blogActions.resetSelectedBlog();
        this.props.blogActions.fetchBlogs();
    }

    mouseEnter = (i) => {
        this.setState({ mouseInsideRowIndex: i }); //once called this.setState, react will re-render the UI (only the part that need to change)
    }

    mouseLeave = () => {
        this.setState({ mouseInsideRowIndex: null });
    }

    renderRow(blog, i) {
        return (
            <tr key={i} onMouseEnter={this.mouseEnter.bind(this, i)} onMouseLeave={this.mouseLeave.bind(this)}>
                <td style={{ width: '125px' }}>
                    {blog.blogId}
                    {this.state.mouseInsideRowIndex === i && <span>&nbsp;&nbsp;&nbsp;<Link to={`/blog/${blog.blogId}`}>Edit</Link>&nbsp;&nbsp;&nbsp;<Link to={`/blog/${blog.blogId}/posts`}>Posts</Link></span>}
                </td>
                <td>{blog.name}</td>
                <td>{blog.url}</td>
            </tr>
        )
    }

    render() {
        return (
            <div>
                <Link to="/blog/0">Create Blog</Link>
                <Table striped bordered condensed hover>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Url</th>
                        </tr>
                        {this.props.blogs.blogs.map(this.renderRow.bind(this))} {/* composition pattern */}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default BlogList