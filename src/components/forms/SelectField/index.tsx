import * as  React from 'react'
import styled from 'styled-components'
import {Label} from "../../Text"
import {Spacer} from "../../Spacer"
import {Select} from "../primatives/Select"

interface Props {
    label: string,
    placeholder?: string,
    options: string[],
}

export const SelectField: React.FunctionComponent<Props> = (props) => {
    return (
        <Wrapper>
            <Label>{props.label}</Label>
            <Spacer size={1 / 2}/>
            <Select options={props.options}/>
            <Spacer size={2}></Spacer>
        </Wrapper>
    )
}

const Wrapper = styled.div`

 `

// Typically, I would provide a standard wrapper around Fields,
// which would include id, label, value etc.
// As this field was `Optional`, I thought I would just do the presentational part