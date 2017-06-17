import React from 'react';
import { Link } from 'react-router';

import { Table } from 'react-bootstrap';

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseInsideRowIndex: null,
            blogId: null
        }
    }

    componentDidMount() {
        let { blogId } = this.props.params;
        blogId = parseInt(blogId);
        this.setState({blogId});

        this.props.postActions.resetSelectedPost();
        this.props.blogActions.fetchBlogs();
        this.props.postActions.fetchPosts(blogId);
    }

    componentWillReceiveProps(nextProps){
        let { blogId } = this.props.params;
        let nextBogId = nextProps.params.blogId;

        if(blogId !== nextBogId){
            blogId = parseInt(nextBogId);
            this.setState({blogId});

            this.props.blogActions.fetchBlogs();
            this.props.postActions.fetchPosts(blogId);
        }

        console.log("componentWillReceiveProps");
    }

    mouseEnter = (i) => {
        this.setState({ mouseInsideRowIndex: i });
    }

    mouseLeave = () => {
        this.setState({ mouseInsideRowIndex: null });
    }

    onChange = (event) => {
        let selectedBlogId = event.target.value;
        this.setState({blogId: selectedBlogId});
        this.props.postActions.fetchPosts(selectedBlogId);

        this.props.router.push(`/blog/${selectedBlogId}/posts`);
    }

    renderRow(post, i) {
        return (
            <tr key={i} onMouseEnter={this.mouseEnter.bind(this, i)} onMouseLeave={this.mouseLeave.bind(this)}>
                <td style={{ width: '125px' }}>
                    {post.postId}
                    {this.state.mouseInsideRowIndex === i && <span>&nbsp;&nbsp;&nbsp;<Link to={`/blog/${this.state.blogId}/post/${post.postId}`}>Edit</Link></span>}
                </td>
                <td>{post.title}</td>
                <td>{post.status}</td>
                <td>{post.visibility}</td>
                <td>{post.allowComments ? 'Yes' : 'No'}</td>
                <td>{post.likes}</td>
            </tr>
        )
    }

    render() {
        return (
            <div>
                <div>
                    <Link to={`/blog/${this.state.blogId}/post/0`}>Create Post</Link>
                </div>
                <label>Select blog:&nbsp;</label>
                <select value={this.state.blogId} onChange={this.onChange.bind(this)}>
                    <option value="0">--- Select ---</option>
                    {this.props.blogs.blogs.map((b, i) => <option key={i} value={b.blogId}>{b.name}</option>)}                                                    }
                </select>

                <Table striped bordered condensed hover>
                    <tbody>
                        <tr>
                            <th>Id</th><th>Title</th><th>Status</th><th>Visibility</th><th>Allow Comments</th><th>Likes</th>
                        </tr>
                        {this.props.posts.posts.map(this.renderRow.bind(this))}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default PostList