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
        <Form.Field>
            <label className="label">{label}</label>
            <input className="main-input" {...input} type={type} autoComplete={autoComplete} placeholder={placeholder} checked={checked} name={name} value={input.value}  />
        </Form.Field>

    );
}

const DropdownField = (props) => {
    const { label, type, placeholder, readOnly, meta: { touched, error } } = props;

    return (
        <Form.Field>
            <label className="label">{label}</label>
            <Field name="options" component="select">
                <option >Select</option>
                <option value="employee">Employee</option>
                <option value="spouse">Spouse</option>
            </Field>
        </Form.Field>
        <Form.Select label={label} options={props.options} placeholder={props.placeholder} />
    );
}


let Demo = (props) => {


    const { onSubmit } = props;

    return (
        <Form onSubmit={props.onSubmit}>
            <Field component={InputBox} type="email" autoComplete='email' label="Your Email" name="email"  placeholder="Email"/>

            <Field component={InputBox} type="text" autoComplete='firstName' label="First Name" name="firstName" placeholder="First Name"/>

            <Field component={InputBox} type="text" autoComplete='lastName' label="Last Name" name="lastName" placeholder="last Name"/>
            
            <Label>Employee/Spouse</Label>
            <Field name="options" component="select">
                <option >Select</option>
                <option value="employee">Employee</option>
                <option value="spouse">Spouse</option>
            </Field>
            {/* <Field component="select" options={options} autoComplete='options' label="Employee/Spouse" name="options" placeholder="Select"/> */}

            <Field component={InputBox} type="text" autoComplete='hlcid' label="HLCID" name="hlcid" placeholder="HLCID"/>
            
      
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