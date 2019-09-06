import * as React from 'react'
import styled from 'styled-components'
import {Span} from "../Text"
import {atlasR500, atlasR75} from "../../theme/colors"
import {spacing} from "../../theme/helpers"

interface Props {
    message: string,
}

export const ErrorMessage: React.FC<Props> = (props) => (
    <Wrapper>
        <Message>
            {props.message}
        </Message>
    </Wrapper>
)

const Message = styled(Span)`
    color: ${atlasR500};
`

const Wrapper = styled.div`
    background: ${atlasR75};
    border: 1px solid ${atlasR500};
    border-radius: 3px;
    padding: ${spacing(1)};
    margin-bottom: ${spacing(1)};
    opacity: 0.7;
`