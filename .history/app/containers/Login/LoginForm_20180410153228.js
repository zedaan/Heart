import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form/immutable';
import { Grid, Form, Input, Select, Label } from 'semantic-ui-react';
import Button from "components/Button";

let body = document.querySelector("body");

const inputClick = () => {
    body.classList.add("input-focused-home");
}

body.addEventListener('click', function (e) {
    if (!e.target.classList.contains('main-input')) {
        body.classList.remove("input-focused-home");
    }
})

const validations = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = "Please fill in your email before moving on :)";
    } else if (values.email.indexOf("@") === -1) {
        errors.email = "Please enter valid email";
    } else {
        if (values.email.indexOf(".") === -1) {
            errors.email = "Please enter valid email";
        }
    }

    if (!values.password) {
        errors.password = "Password is required";
    }


    return errors;
}



const InputBox = (props) => {
    props.input.value = props.val;
    const { type, input, placeholder, autoComplete, name, checked, className, onClick, label, meta: { touched, error } } = props;
    return (
        <Form.Field>
            <label className="label">{label}</label>
            <input className="main-input" onClick={onClick} {...input} type={type} autoComplete={autoComplete} placeholder={placeholder} checked={checked} name={name} value={input.value} />
            {
                touched && ((error && <span className="error">{error}</span>))
            }
        </Form.Field>

    );
}




let Login = (props) => {


    const { onSubmit, handleSubmit } = props;

    return (
        <Form onSubmit={handleSubmit(onSubmit)} id="login-form">

            <Field onClick={inputClick} component={InputBox} type="email" autoComplete='email' label="Email" name="email" placeholder="Email" />

            <Field onClick={inputClick} component={InputBox} type="password" autoComplete='password' label="Password" name="password" placeholder="Password" />
            <Button text="LOGIN IN" />
            <span className="register clr-primary"> <Link to="/">Need help?</Link></span>

        </Form>

    );
}

Login = reduxForm({
    form: 'LoginForm',
    validate: validations,

})(Login);

Login = connect(
    state => ({


    })
)(Login)

export default Login;