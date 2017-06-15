import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';

class BlogForm extends Component {
    submit = ({ url = '' }) => {
        console.log("submit from inside form");
        let error = {};
        let isError = false;

        if (url.trim() === '') {
            error.url = 'Required';
            isError = true;
        }

        if (url.length < 5) {
            error.url = "Url too short";
            isError = true;
        }

        if (isError) {
            throw new SubmissionError(error);
        } else {
            //submit form to server
            console.log("valid submission");

            const {blogId} =  this.props.params;
            this.props.updateBlog(blogId, url);
        }
    };

    renderField = ({ type, label, input, meta: { touched, error } }) => (
        <div className="">
            <label>{label}</label>
            <input {...input} type={type} />
            {touched && error && <span className="">{error}</span>}
        </div>
    );

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.submit)}>
                <div>
                    <label>Id: </label>
                </div>
                <div>
                    <Field name="url" label="Url" component={this.renderField} type="text" />
                </div>
                <button type="submit">Update</button>
            </form>
        )
    }
}

BlogForm = reduxForm({
    form: 'blogForm'
})(BlogForm);

export default BlogForm;