import React from 'react';
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form/immutable';
import { Grid, Button, Checkbox, Form, Input, Radio, Select, TextArea, Search, Label } from 'semantic-ui-react';


const validations = (values) => {
    const errors = {};



    if (!values.email) {
        errors.email = "Email is required";
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
    const { type, input, placeholder, autoComplete, name, checked, label, meta: { touched, error } } = props;
    return (
        <Form.Field>
            <label>{label}</label>
            <input {...input} type={type} autoComplete={autoComplete} placeholder={placeholder} checked={checked} name={name} value={input.value} />
        </Form.Field>

    );
}


let Demo = (props) => {


    const { onSubmit, handleSubmit, demoInfo, patientData } = props;

    return (
        <Form>
            <Form.Field>
                <label className="label">Your Email</label>
                <input className="main-input" size='large' placeholder='Last Name' />
            </Form.Field>
            <Form.Field>
                <label className="label">First Name</label>
                <input className="main-input" size='large' placeholder='Last Name' />
            </Form.Field>
            <Form.Field>
                <label className="label">Last Name</label>
                <input className="main-input" size='large' placeholder='Last Name' />
            </Form.Field>
            <Form.Select fluid label='Employee/Spouse' options={options} placeholder='Select' />
            <Form.Field>
                <label className="label">HLCID</label>
                <input className="main-input" size='large' placeholder='Last Name' />
            </Form.Field>
        </Form>

    );
}

Demo = reduxForm({
    form: 'Form',
    validate: validations,

})(Demo);

Demo = connect(
    state => ({
        

    })
)(Demo)

export default Demo;