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
    }
} 

function mapDispatchToProps(dispatch){
    //can call bindActionCreators with multiple actioncreators. Refer to your bookmark: https://stackoverflow.com/questions/44403700/how-to-wrap-multi-actioncreators-into-one-props
    //return bindActionCreators(blogActionCreators, dispatch); 
    return {
        blogActions: bindActionCreators(blogActionCreators, dispatch),
        postActions: bindActionCreators(postActionCreators, dispatch),
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;