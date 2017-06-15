import React from 'react';
import { Link } from 'react-router';

import { Table } from 'react-bootstrap';

class BlogList extends React.Component {
    constructor(){
        super();
        this.state = {
            mouseInsideRowIndex: null
        }
    }

    componentDidMount(){
        this.props.blogActions.fetchBlogs();
    }   

    mouseEnter = (i) => {
        this.setState({mouseInsideRowIndex: i});
    }

    mouseLeave = () => {
        this.setState({mouseInsideRowIndex: null});
    }

    renderRow(blog, i) {
        return (
            <tr key={i} onMouseEnter={this.mouseEnter.bind(this, i)} onMouseLeave={this.mouseLeave.bind(this)}>
                <td style={{width: '125px'}}>
                    {blog.blogId}
                    {this.state.mouseInsideRowIndex === i && <span>&nbsp;&nbsp;&nbsp;<Link to={`/blog/${blog.blogId}`}>Edit</Link>&nbsp;&nbsp;&nbsp;<Link to={`/blog/${blog.blogId}/posts`}>Posts</Link></span>}
                </td>
                <td>{blog.url}</td>
            </tr>
        )
    }

    render() {
        return (
            <Table striped bordered condensed hover>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Url</th>
                    </tr>
                    {this.props.blogs.blogs.map(this.renderRow.bind(this))}
                </tbody>
            </Table>
        )
    }
}

export default BlogList