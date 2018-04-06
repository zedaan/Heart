import React from 'react';
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form/immutable';
import { Grid, Button, Checkbox, Form, Input, Radio, Select, TextArea, Search, Label } from 'semantic-ui-react';

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
        <Form className="demo-form" >
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Form.Group widths='equal'>

                            <Field component={InputBox} type="text" autoComplete='patientmrn' label="Patient MRN" name="patientmrn" val={demoInfo && demoInfo.demographics && demoInfo.demographics.patient && demoInfo.demographics.patient[0].mrn ? `${demoInfo.demographics.patient[0].mrn}` : ''} />
                        </Form.Group>
                    </Grid.Column>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={InputBox} type="text" autoComplete='firstname' label="First name" name="firstname" val={demoInfo && demoInfo.demographics && demoInfo.demographics.patient && demoInfo.demographics.patient[0].firstName ? demoInfo.demographics.patient[0].firstName : ''} />
                        </Form.Group>
                    </Grid.Column >
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={InputBox} label="Middle name" autoComplete="middlename" name="middlename" val={demoInfo && demoInfo.demographics && demoInfo.demographics.patient && demoInfo.demographics.patient[0].middleInitial ? demoInfo.demographics.patient[0].middleInitial : ''} />
                        </Form.Group>
                    </Grid.Column>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={InputBox} label="Last name" autoComplete="lastname" name="lastname" val={demoInfo && demoInfo.demographics && demoInfo.demographics.patient && demoInfo.demographics.patient[0].lastName ? demoInfo.demographics.patient[0].lastName : ''} />
                        </Form.Group>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Form.Group widths='equal'>

                            <Field component={InputBox} label="Prefix" autoComplete="prefix" name="prefix" val={demoInfo && demoInfo.demographics && demoInfo.demographics.patient && demoInfo.demographics.patient[0].prefix ? demoInfo.demographics.patient[0].prefix : ''} />

                        </Form.Group>
                    </Grid.Column>


                    <Grid.Column>
                        <Form.Group widths='equal'>

                            <Field component={InputBox} label="Suffix" autoComplete="suffix" name="suffix" value={demoInfo && demoInfo.demographics && demoInfo.demographics.patient && demoInfo.demographics.patient[0].suffix ? demoInfo.demographics.patient[0].suffix : ''} />
                        </Form.Group>

                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={5}>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={DatePickerField} date={demoInfo && demoInfo.demographics && demoInfo.demographics.patient && demoInfo.demographics.patient[0].patientSince ? moment(demoInfo.demographics.patient[0].patientSince, 'MM/DD/YYYY') : props.date} label="Patient since" name="patient_since" />

                        </Form.Group>
                    </Grid.Column>


                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={DatePickerField} date={demoInfo && demoInfo.demographics && demoInfo.demographics.patient && demoInfo.demographics.patient[0].dateOfBirth ? moment(demoInfo.demographics.patient[0].dateOfBirth, 'MM/DD/YYYY') : props.date} label="Date of birth" name="dob" />

                        </Form.Group>

                    </Grid.Column>

                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={InputBox} autoComplete="age" label="Age" name="age" val={patientData && patientData.patientDataInfo && patientData.patientDataInfo.patientData && patientData.patientDataInfo.patientData.age ? patientData.patientDataInfo.patientData.age : ''} />

                        </Form.Group>

                    </Grid.Column>

                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={DropdownField} options={options} label="Gender" name="gender" val={demoInfo && demoInfo.demographics && demoInfo.demographics.patient && demoInfo.demographics.patient[0].gender ? demoInfo.demographics.patient[0].gender : ''} />

                        </Form.Group>

                    </Grid.Column>

                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={InputBox} autoComplete="SSN" label="SSN" val={demoInfo && demoInfo.demographics && demoInfo.demographics.patient && demoInfo.demographics.patient[0].ssn ? demoInfo.demographics.patient[0].ssn : ''} type="text" name="ssn" pattern="\d{3}-?\d{2}-?\d{4}" maxlength="10" />

                        </Form.Group>

                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={5}>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={DropdownField} options={status} label="Marital Status" name="marital_status" />

                        </Form.Group>
                    </Grid.Column>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={InputBox} autoComplete="primary_phone" label="Primary Phone" type="text" name="primary_phone" val={demoInfo && demoInfo.demographics && demoInfo.demographics.patient && demoInfo.demographics.patient[0].primaryPhone ? demoInfo.demographics.patient[0].primaryPhone : ''} />

                        </Form.Group>
                    </Grid.Column>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={InputBox} autoComplete="secondary_phone" type="number" label="Secondary Phone" name="secondary_phone" val={demoInfo && demoInfo.demographics && demoInfo.demographics.patient && demoInfo.demographics.patient[0].secondaryPhone ? demoInfo.demographics.patient[0].secondaryPhone : ''} />

                        </Form.Group>
                    </Grid.Column>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={InputBox} autoComplete="email" label="Email" name="email" type="email" val={demoInfo && demoInfo.demographics && demoInfo.demographics.patient && demoInfo.demographics.patient[0].email ? demoInfo.demographics.patient[0].email : ''} />

                        </Form.Group>
                    </Grid.Column>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={DropdownField} options={reasons} placeholder="Email reason" label="Email reason" name="email_reason" />

                        </Form.Group>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={5}>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={DropdownField} options={smoking_status} placeholder="Smoking Status" label="Smoking Status" name="smoking_status" />

                        </Form.Group>
                    </Grid.Column>

                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={InputBox} autoComplete="health_issues" type="checkbox" checked={demoInfo && demoInfo.demographics && demoInfo.demographics.patient && demoInfo.demographics.patient[0].health_issues === "1" ? true : false} placeholder="No Known Health Issues" label="No Known Health Issues" name="health_issues" />

                        </Form.Group>
                    </Grid.Column>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={InputBox} autoComplete="medication" type="checkbox" checked={demoInfo && demoInfo.demographics && demoInfo.demographics.patient && demoInfo.demographics.patient[0].inactive === "1" ? true : false} placeholder="Not On Medication" label="Not On Medication" name="medication" />

                        </Form.Group>
                    </Grid.Column>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={InputBox} autoComplete="allergies" type="checkbox" checked={demoInfo && demoInfo.demographics && demoInfo.demographics.patient && demoInfo.demographics.patient[0].has_allergies === "1" ? true : false} placeholder="No Known Allergies" label="No Known Allergies" name="allergies" />

                        </Form.Group>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={5}>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={language} placeholder="Langauge" label="Language" name="langauge" />

                        </Form.Group>
                    </Grid.Column>

                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={SearchField} autoComplete="race_one" placeholder="Race one" label="Race One" name="race_one" />
                        </Form.Group>
                    </Grid.Column>

                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={DropdownField} options={raceOne} label="Rollup Race One" name="race" readOnly />

                        </Form.Group>
                    </Grid.Column>

                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={SearchField} autoComplete="race_two" placeholder="Race Two" label="Race Two" name="race_two" />
                        </Form.Group>
                    </Grid.Column>

                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={DropdownField} options={raceOne} label="Rollup Race Two" name="race" />

                        </Form.Group>
                    </Grid.Column>

                </Grid.Row>

                <Grid.Row columns={4}>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={DropdownField} options={ethnicity} placeholder="Ethnicity" label="Ethnicity One" name="ethnicity" />

                        </Form.Group>
                    </Grid.Column>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={DropdownField} options={ethnicity} placeholder="Ethnicity" label="Ethnicity Two" name="ethnicity" />

                        </Form.Group>
                    </Grid.Column>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={TextAreaField} autoComplete="address_1" rows="2" val={demoInfo && demoInfo.demographics && demoInfo.demographics.patient && demoInfo.demographics.patient[0].addressLine1 ? demoInfo.demographics.patient[0].addressLine1 : ''} label="Home Address 1" name="address_1" />

                        </Form.Group>

                    </Grid.Column>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={TextAreaField} autoComplete="address_2" rows="2" val={demoInfo && demoInfo.demographics && demoInfo.demographics.patient && demoInfo.demographics.patient[0].addressLine2 ? demoInfo.demographics.patient[0].addressLine2 : ''} label="Home Address 2" name="address_2" />

                        </Form.Group>

                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={4}>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={InputBox} autoComplete="city" label="City" name="city" val={demoInfo && demoInfo.demographics && demoInfo.demographics.patient && demoInfo.demographics.patient[0].city ? demoInfo.demographics.patient[0].city : ''} />

                        </Form.Group>

                    </Grid.Column>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={states} autoComplete="states" placeholder="State" label="State" name="state" />

                        </Form.Group>

                    </Grid.Column>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={InputBox} autoComplete="zip" label="Zip" name="zip" val={demoInfo && demoInfo.demographics && demoInfo.demographics.patient && demoInfo.demographics.patient[0].zip ? demoInfo.demographics.patient[0].zip : ''} />

                        </Form.Group>

                    </Grid.Column>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field component={DropdownField} options={options} placeholder="Provider" label="Provider" name="provider" />

                        </Form.Group>

                    </Grid.Column>


                </Grid.Row>

            </Grid>
        </Form>

    );
}

Demo = reduxForm({
    form: 'Demoform',
    validate: validations,

})(Demo);

Demo = connect(
    state => ({
        date: moment() // pull initial values from account reducer

    })
)(Demo)

export default Demo;