import * as React from 'react'
import {TextField, Props} from "../../../../components/forms/TextField"
import * as EmailValidator from 'email-validator';

const isEmailValid = (val: string) => !EmailValidator.validate(val) ? 'Please provide a valid email address' : null

export const EmailField: React.FC<Props> = (props) =>
    <TextField
        label={'Email'}
        onChange={props.onChange}
        onValidate={props.onValidate}
        value={props.value}
        {...props}
        validators={[isEmailValid]}
    />
