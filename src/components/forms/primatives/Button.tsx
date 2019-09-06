import * as React from 'react'
import styled from 'styled-components'
import {controlElementBaseStyle} from "../../styles"
import {atlasN20, atlasN50, atlasN90, brandRed} from "../../../theme/colors";
import {lighten} from 'polished'

interface Props {
    label: string,
    enabled?: boolean,
    onClick?: () => void
}

const baseRed = lighten(0.1, brandRed)
const focusRed = lighten(0.2, brandRed)
const primaryStyle = `
    background: ${baseRed};
    color: white;
    border: 1px solid ${baseRed};
    
    &:focus {
        background: ${focusRed}
        border: 1px solid ${focusRed};
        color: white;
        box-shadow: unset !important;
  }
  &:hover {
        background: ${brandRed};
        border: 1px solid ${brandRed};
  }
`

const disabledStyle = `
  border: 1px solid ${atlasN20};
  background: ${atlasN20};
  color: ${atlasN50};
  &:hover {
    cursor: not-allowed !important;
    border: 1px solid ${atlasN90};
    background: ${atlasN20};
    color: ${atlasN50};
  }
  &:focus {
    border: 1px solid ${atlasN90};
    background: ${atlasN20};
    color: ${atlasN50};
    box-shadow: unset !important;
  }
`

const ButtonElement = styled.button<Props>`
    ${controlElementBaseStyle}
    &:hover {
        cursor: pointer;
    }
    ${primaryStyle}
    ${props => !props.enabled && disabledStyle}
`

export const Button: React.FC<Props> = (props) => {
    const handleClick = () => {
        props.onClick && props.enabled && props.onClick()
    }

    return (
        <ButtonElement {...props} onClick={handleClick}>
            {props.label}
        </ButtonElement>
    )
}