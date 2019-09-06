import * as  React from 'react'
import styled from 'styled-components'
import {FieldLabel} from "../FieldLabel"
import {P} from "../../Text"
import {spacing} from "../../../theme/helpers"
import {atlasR300} from "../../../theme/colors"
import {Input} from "../primatives/Input"

export type ValidatorFn = (val: string) => string | null;

const validateStringIsNotEmpty = (val: string) => !val ? 'This field is required' : null

const validate = (value: string, validators: ValidatorFn[]) => validators.reduce(
    (acc: string[], validator) => {
        const error = validator(value)
        if (error !== null) {
            console.warn(error)
            acc.push(error)
            return acc
        }
        return acc
    }, [])

export interface Props {
    label: string,
    onChange: (val: string) => void,
    required?: boolean
    placeholder?: string,
    validators?: ValidatorFn[],
    onValidate: (isValid: boolean) => void,
    value: string
}

export const TextField: React.FunctionComponent<Props> = (props) => {
    const validators = props.validators ? [...props.validators] : []
    props.required && validators.unshift(validateStringIsNotEmpty)

    const [validations, setValidations] = React.useState<string[]>([])
    const [hasTouched, setHasTouched] = React.useState<boolean>(false)

    const handleValidate = (val: string) => {
        const validations = validate(val, validators)
        setValidations(validations)
        props.onValidate(validations.length === 0)
    }

    const handleChange = (val: string) => {
        props.onChange(val)
        setHasTouched(true)
        hasTouched && handleValidate(val)
    }

    return (
        <TextFieldWrapper>
            <FieldLabel label={props.label}/>
            <Input
                value={props.value}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={() => handleValidate(props.value)}
            />

            {validations.map(validation => (
                <Error size={1/ 2} color={atlasR300}>{validation}</Error>
            ))}
        </TextFieldWrapper>
    )
}

const Error = styled(P)`
    margin-top: -${spacing(.5)}
`

const TextFieldWrapper = styled.div`
   margin-bottom: 10px;
`
