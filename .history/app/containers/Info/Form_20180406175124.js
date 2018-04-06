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

    if (!values.firstName) {
        errors.firstName = "First name is required";
    }

    if (!values.lastName) {
        errors.lastName = "Last name is required";
    }
    
    if (!values.options) {
        errors.options = "Select an option";
    }
    
    if (!values.hlcid) {
        errors.hlcid = "This field is required. You can find it on your Healthy Living Credit Checklist";
    }

    return errors;
}



const InputBox = (props) => {
    props.input.value = props.val;
    const { type, input, placeholder, autoComplete, name, checked, className, label, meta: { touched, error } } = props;
    return (
        <Form.Field>
            <label className="label">{label}</label>
            <input className="main-input" {...input} type={type} autoComplete={autoComplete} placeholder={placeholder} checked={checked} name={name} value={input.value}  />
            {
                touched && ((error && <span className="error">{error}</span>))
            }
        </Form.Field>

    );
}

const DropdownField = (props) => {
    const { label, type, placeholder, readOnly, meta: { touched, error } } = props;

    return (
        <Form.Field>
            <label className="label">{label}</label>
            <Field name="options" component="select">
                <option className="select">Select</option>
                <option value="employee">Employee</option>
                <option value="spouse">Spouse</option>
            </Field>
        </Form.Field>
    );
}


let Demo = (props) => {


    const { onSubmit, handleSubmit } = props;

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>

            <Field component={InputBox} type="email" autoComplete='email' label="Your Email" name="email"  placeholder="Email"/>

            <Field component={InputBox} type="text" autoComplete='firstName' label="First Name" name="firstName" placeholder="First Name"/>

            <Field component={InputBox} type="text" autoComplete='lastName' label="Last Name" name="lastName" placeholder="last Name"/>
            
            
            <Field component={DropdownField} autoComplete='options' label="Employee/Spouse" name="options" />

            <Field component={InputBox} type="text" autoComplete='hlcid' label="HLCID" name="hlcid" placeholder="HLCID"/>
            if()
            <span className="warning">You can find it on your Healthy Living Credit Checklist</span>
            
      
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