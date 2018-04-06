import React from 'react';
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form/immutable';
import { Grid, Button, Checkbox, Form, Input, Radio, Select, TextArea, Search, Label } from 'semantic-ui-react';


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
    const { type, input, placeholder, autoComplete, name, checked, className, label, meta: { touched, error } } = props;
    return (
        <Form.Field>
            <label className="label">{label}</label>
            <input className="main-input" {...input} type={type} autoComplete={autoComplete} placeholder={placeholder} checked={checked} name={name} value={input.value} />
            {
                touched && ((error && <span className="error">{error}</span>))
            }
        </Form.Field>

    );
}




let Signup = (props) => {


    const { onSubmit, handleSubmit } = props;

    return (
        <Form onSubmit={handleSubmit(onSubmit)} id="info-form">

            <Field component={InputBox} type="email" autoComplete='email' label="Email" name="email" placeholder="Email" />

            <Field component={InputBox} type="password" autoComplete='password' label="Password" name="password" placeholder="Password" />
            
            <Grid.Row columns={1}>
                <Grid.Column>
                    <SignupForm onSubmit={this.onSubmit} />
                </Grid.Column>
            </Grid.Row>
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