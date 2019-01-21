import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import emailValidator from 'email-validator';
import ErrorField from './ErrorField';

class SignUpForm extends Component {
    static propTypes = {
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <>
                <h2>Register in Form</h2>
                <form onSubmit={handleSubmit}>
                        <Field  name="email" component={ErrorField} />
                        <Field  name="password" component={ErrorField} type="password" />
                        <Field  name="confirmPassword" component={ErrorField} type="password" />
                        <input type="submit" />
                </form>
            </>
        );
    }
}

const validate = ({ email, password }) => {
    console.log('email:', email);
    console.log('password:', password);
    const errors = {};

    if(!email) errors.email = 'email is requred';
    else if (!emailValidator.validate(email)) errors.email = 'invalid email';

    if(!password) errors.password = 'password is requred';
    else if(password.length < 6) errors.password = 'password is too short';

    return errors;
}

export default reduxForm({
    form: 'signUp',
    validate
})(SignUpForm);