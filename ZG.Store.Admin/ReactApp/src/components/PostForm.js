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

// http://redux-form.com/6.8.0/docs/GettingStarted.md/
let PostForm = props => {
    console.log(JSON.stringify(postStatus));

    const { handleSubmit, pristine, touched, error, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="postId" label="Post Id" component={renderInputField} type="hidden" />
            </div>
            <div>
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
                    <Field name="visibility" component="select">  {/* component={select} does not work */}
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
                    <Field name="status" component="select"> {/* component={select} does not work */}
                        {postStatus.map(s => <option key={s.name} value={s.value}>{s.name}</option>)}
                    </Field>
                </div>
            </div>
            <button type="submit" disabled={pristine || submitting}>Create/Update</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>Undo Changes</button>
        </form>
    )
}

PostForm = reduxForm({
    form: 'postForm',
    enableReinitialize: true //When set to true, the form will reinitialize every time the initialValues prop changes. Defaults to false.
})(PostForm);

PostForm = connect(
    state => ({
        initialValues: state.post.post //http://redux-form.com/6.8.0/examples/initializeFromState/
    })
)(PostForm)

export default PostForm;

