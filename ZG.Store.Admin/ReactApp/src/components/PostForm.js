import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';

const renderInputField = ({ type, label, input, meta: { touched, error } }) => (
    <div className="">
        {type === "hidden" ? <label hidden>{label}</label> : <label>{label}</label>} 
        <input {...input} type={type} />
        {touched && error && <span className="">{error}</span>}
    </div>
)

let PostForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    console.log(JSON.stringify(props));
    return (
        <form onSubmit={handleSubmit}>
            <div>
                 <label>Id: {props.initialValues.postId}</label>
                 <Field name="postId" label="Post Id" component={renderInputField} type="hidden"/>
            </div>
            <div>
                 <label>Id: {props.initialValues.blogId}</label>
                <Field name="blogId" label="Blog Id" component={renderInputField} type="hidden" />
            </div>
            <div>
                <Field name="title" label="Title" component={renderInputField} type="text" />
            </div>
            <div>
                <Field name="content" label="Content" component={renderInputField} type="text" />
            </div>
            <div>
                <Field name="visibility" label="Visible" component={renderInputField} type="checkbox" />
            </div>
            <div>
                <Field name="allowComments" label="Allow Comments" component={renderInputField} type="checkbox" />
            </div>
            <div>
                <Field name="likes" label="Likes" component={renderInputField} type="text" />
            </div>
            <button type="submit" disabled={pristine || submitting}>Update</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>Undo Changes</button>
        </form>
    )
}

PostForm = reduxForm({
    form: 'postForm',
    enableReinitialize: true
})(PostForm);

PostForm = connect(
    state => ({
        initialValues: state.post.post
    })
)(PostForm)

export default PostForm;

