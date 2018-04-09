import React from 'react';
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form/immutable';
import { Grid, Checkbox, Form, Input, Radio, Select, TextArea, Search, Label } from 'semantic-ui-react';
import Button from '../../components/Button';

let body = document.querySelector("body");

const inputClick = () => {
  body.classList.add("input-focused-home");
}

body.addEventListener('click',function (e) {
  if (!e.target.classList.contains('main-input')){
    body.classList.remove("input-focused-home");
  }
})

const validations = (values) => {
  const errors = {};

  if (!values.promo) {
    errors.promo = "Please fill in your promo code before moving on :)";
  }

  return errors;
}

const InputBox = (props) => {
  props.input.value = props.val;
  const { type, input, placeholder, autoComplete, name, checked, className, label, meta: { touched, error } } = props;
  return (
    <Form.Field>
      <label className="label">{label}</label>
      <input onClick={inputClick} className="main-input" {...input} type={type} autoComplete={autoComplete} placeholder={placeholder} checked={checked} name={name} value={input.value} />
      {
        touched && ((error && <span className="error">{error}</span>))
      }
    </Form.Field>
  );
}

let Demo = (props) => {


  const { onSubmit, handleSubmit } = props;

  return (
    <Form onSubmit={handleSubmit(onSubmit)} id="Main-Form">
      <Field component={InputBox} type="text" autoComplete='text' label="Your Code Here" name="promo" placeholder="Type Code Here" />
      <Button text="Start Now!" />
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
