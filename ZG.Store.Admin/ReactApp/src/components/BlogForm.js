import React, {Component} from 'react';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import axios from 'axios';

async function submitToServer(url){
    return await axios.post("http://localhost:50105/api/blog", {
        blogId: 0,
        url: url,
    });
}

const submit = ({url=''}) => {
    console.log("submit from inside form");
    let error = {};
    let isError = false;

    if(url.trim() === ''){
        error.url = 'Required';
        isError = true;
    }

    if(url.length < 5){
        error.url = "Url too short";
        isError = true;
    }

    if(isError){
        throw new SubmissionError(error);
    }else{
        //submit form to server
        console.log("valid submission");

        submitToServer(url)
        .then(data => console.log(response)) 
        .catch(error => console.log(error));
    }
};

const renderField = ({type, label, input, meta:{ touched, error}}) => (
    <div className="">
        <label>{label}</label>
        <input {...input} type={type}/>
        {touched && error && <span className="">{error}</span>}
    </div>
);

const blogformFunc = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit(submit)}>
        <div>
            <label>Id: </label>
        </div>
        <div>
            <Field name="url" label="Url" component={renderField} type="text" />
        </div>
        <button type="submit">Update</button>
    </form>
);


const BlogForm = reduxForm({
    form: 'blogForm'
})(blogformFunc);

export default BlogForm;