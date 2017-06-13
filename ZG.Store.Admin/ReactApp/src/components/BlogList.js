import React from 'react';
import {Link} from 'react-router';

import Grid from 'react-bootstrap';
import Row from 'react-bootstrap';
import Col from 'react-bootstrap';

class BlogList extends React.Component{
    renderRow(blog, i){
        return (
            <Link to={'/blog/' + blog.id}>
            
            </Link>
        )
    }

    render(){
        return (
            <Grid>
            {this.props.blogs.map(this.renderRow.bind(this))}
            </Grid>
        )
    }
}

export default BlogList