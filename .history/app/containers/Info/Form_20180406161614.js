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
    const { type, input, placeholder, autoComplete, name, checked, className, label, meta: { touched, error } } = props;
    return (
        <Form.Group>
            <label className="label">{label}</label>
            <input {...input} type={type} autoComplete={autoComplete} placeholder={placeholder} checked={checked} name={name} value={input.value} className={className} />
        </Form.Group>

    );
}

const DropdownField = (props) => {
    const { label, type, placeholder, readOnly, meta: { touched, error } } = props;

    return (
        <Form.Field>
            <label>{label}</label>
            <Form.Select fluid options={props.options} placeholder={props.placeholder} readOnly={readOnly} />
        </Form.Field>
    );
}

const options = [
    { key: 'employee', text: 'Employee', value: 'employee' },
    { key: 'spouse', text: 'Spouse', value: 'spouse' },
]

let Demo = (props) => {


    const { onSubmit } = props;

    return (
        <Form onSubmit={props.onSubmit}>
            <Form.Field component={InputBox} type="text" autoComplete='firstName' label="First Name" name="firstname" className="main-input" />
            <Form.Field component={InputBox} type="text" autoComplete='firstName' label="First Name" name="firstname" className="main-input" />

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