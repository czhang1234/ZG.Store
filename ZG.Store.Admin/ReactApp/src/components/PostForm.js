import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
const {DOM: {input, select}} = React;
import { connect } from 'react-redux';

const renderInputField = ({ type, label, input, meta: { touched, error } }) => (
    <div className="">
        {type === "hidden" ? <label hidden>{label}:</label> : <label>{label}:</label>}
        <input {...input} type={type} />
        {touched && error && <span className="">{error}</span>}
    </div>
)

const postStatus = [{name: "Draft", value: 1}, {name: "PendingReview", value: 2}, {name: "Published", value: 3}];
const postVisibility = [{name: "Public", value: 1}, {name: "PasswordProtected", value: 2}, {name: "Private", value: 3}];

let PostForm = props => {
    console.log(JSON.stringify(postStatus));

    const { handleSubmit, pristine, touched, error, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Id: {props.params.postId}</label>
                <Field name="postId" label="Post Id" component={renderInputField} type="hidden" />
            </div>
            <div>
                <label>Blog Id: {props.params.blogId}</label>
                <Field name="blogId" label="Blog Id" component={renderInputField} type="hidden" />
            </div>
            <div>
                <Field name="title" label="Title" component={renderInputField} type="text" />
            </div>
            <div>
                <Field name="content" label="Content" component={renderInputField} type="text" />
            </div>
            <div>
                <div className="">
                    <label htmlFor="visibility">Visibility:</label>
                    <Field name="visibility" component="select">
                        {postVisibility.map(v => <option key={v.name} value={v.value}>{v.name}</option>)}
                    </Field>
                </div>
            </div>
            <div>
                <Field name="allowComments" label="Allow Comments" component={renderInputField} type="checkbox" />
            </div>
            <div>
                <Field name="likes" label="Likes" component={renderInputField} type="text" />
            </div>
            <div>
                <div className="">
                    <label>Status:</label>
                    <Field name="status" component="select">
                        {postStatus.map(s => <option key={s.name} value={s.value}>{s.name}</option>)}
                    </Field>
                </div>
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

