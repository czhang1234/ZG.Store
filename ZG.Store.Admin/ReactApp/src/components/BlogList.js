import React from 'react';
import { Link } from 'react-router';

import { Table } from 'react-bootstrap';

class BlogList extends React.Component {
    renderRow(blog, i) {
        return (
            <tr>
                <td>
                    <Link to={'/blog/' + blog.blogId}>
                        {blog.blogId}
                    </Link>
                </td>
                <td>
                    <Link to={'/blog/' + blog.blogId}>
                        {blog.url}
                    </Link>
                </td>
            </tr>
        )
    }

    render() {
        return (
            <Table striped bordered condensed hover>
                <tr>
                    <th>Id</th>
                    <th>Url</th>
                </tr>
                <tbody>
                    {this.props.blogs.map(this.renderRow.bind(this))}
                </tbody>
            </Table>
        )
    }
}

export default BlogList