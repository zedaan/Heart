import React from 'react';
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form/immutable';
import { Grid, Form, Input,Select,Label } from 'semantic-ui-react';
import Button from "components/Button";

let body = document.querySelector("body");

const inputClick = () => {
    body.classList.add("input-focused-home");
    document.getElementById('table-middle-row').className = "alpha";
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
            <input onClick={onClick} className="main-input" {...input} type={type} autoComplete={autoComplete} placeholder={placeholder} checked={checked} name={name} value={input.value} />
            {
                touched && ((error && <span className="error">{error}</span>))
            }
        </Form.Field>

    );
}




let Signup = (props) => {


    const { onSubmit, handleSubmit } = props;

    return (
        <Form onSubmit={handleSubmit(onSubmit)} id="signup-form">

            <Field onClick={inputClick} component={InputBox} type="email" autoComplete='email' label="Email" name="email" placeholder="Email" />

            <Field onClick={inputClick} component={InputBox} type="password" autoComplete='password' label="Password" name="password" placeholder="Password" />
            <Button text="SIGN UP NOW!" />
            <span className="register">By registering you agree to receive emails, calls and text messages from Hello Heart.Term of Use & Privacy Policy</span>

        </Form>

    );
}

Signup = reduxForm({
    form: 'SignupForm',
    validate: validations,

})(Signup);

Signup = connect(
    state => ({


    })
)(Signup)

export default Signup;