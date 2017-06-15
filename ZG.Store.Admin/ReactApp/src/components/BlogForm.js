import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {connect} from 'react-redux';

const renderField = ({ type, label, input, meta: { touched, error } }) => (
        <div className="">
            <label>{label}</label>
            <input {...input} type={type} />
            {touched && error && <span className="">{error}</span>}
        </div>
    );

let BlogForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Id: </label>
            </div>
            <div>
                <Field name="url" label="Url" component={renderField} type="text" />
            </div>
            <button type="submit" disabled={pristine || submitting}>Update</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>Undo Changes</button>
        </form>
    )
}

BlogForm = reduxForm({
    form: 'blogForm',
    enableReinitialize: true
})(BlogForm);

BlogForm = connect(
    state => ({
        initialValues: state.blog.blog
    })
)(BlogForm)

export default BlogForm;