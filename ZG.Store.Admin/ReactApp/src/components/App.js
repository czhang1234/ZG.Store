import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as blogActionCreators from '../actions/blogActionCreators';
import * as postActionCreators from '../actions/postActionCreators';

import Main from './Main';

function mapStateToProps(state){
    return {
        blogs: state.blogs,
        selectedBlog: state.blog,
        posts: state.posts,
        selectedPost: state.post,
    }
} 

function mapDispatchToProps(dispatch){
    //can call bindActionCreators with multiple actioncreators. Refer to your bookmark: https://stackoverflow.com/questions/44403700/how-to-wrap-multi-actioncreators-into-one-props
    //return bindActionCreators(blogActionCreators, dispatch); 
    //so in child components, the actions can be accessed like e.g. this.props.blogActions.fetchBlogs();
    return {
        blogActions: bindActionCreators(blogActionCreators, dispatch),
        postActions: bindActionCreators(postActionCreators, dispatch),
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);
//now the Main component's this.props has blogs, selectedBlog, posts, selectedPost, blogActions and postActions

export default App;