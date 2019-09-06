import * as React from 'react'
import {Label} from "../../Text"
import styled from 'styled-components'
import {spacing} from "../../../theme/helpers"

interface Props {
    label: string
}

export const FieldLabel: React.FC<Props> = (props) => (
    <Wrapper>
        <Label weight={'bold'}>{props.label}</Label>
    </Wrapper>
)

const Wrapper = styled.div`
    margin-bottom: ${spacing(0.5)};   
`
