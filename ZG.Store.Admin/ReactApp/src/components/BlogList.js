import React from 'react';
import { Link } from 'react-router';

import { Table } from 'react-bootstrap';

class BlogList extends React.Component {
    componentDidMount(){
        this.props.fetchBlogs();
    }

    handleRowClick(blogId) {
        this.props.router.push('/blog/' + blogId);
    }

    renderRow(blog, i) {
        return (
            <tr key={i} onClick={this.handleRowClick.bind(this, blog.blogId)}>
                <td>{blog.blogId}</td>
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
                    {this.props.blogs.map(this.renderRow.bind(this))}
                </tbody>
            </Table>
        )
    }
}

export default BlogList