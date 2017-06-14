import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as blogActionCreators from '../actions/blogActionCreators';

import Main from './Main';

function mapStateToProps(state){
    return {
        blogs: state.blogs,
        selectedBlog: state.blog,
    }
} 

function mapDispatchToProps(dispatch){
    return bindActionCreators(blogActionCreators, dispatch); //can call bindActionCreators with multiple actioncreators. Refer to your bookmark: https://stackoverflow.com/questions/44403700/how-to-wrap-multi-actioncreators-into-one-props
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;