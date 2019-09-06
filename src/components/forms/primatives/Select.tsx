import * as React from 'react'
import styled from 'styled-components'
import {atlasN50, atlasN400} from '../../../theme/colors'
import {inputBaseStyle} from '../../styles'

interface Props {
    options: string[]
}

export const Select: React.FC<Props> = (props) => (
    <SelectWrapper>
        <HTMLSelectElement name="slct" id="slct">
            <option selected disabled>Choose an option</option>
            {props.options.map((option, index) => (
                <option value={index}>{option}</option>
            ))}
        </HTMLSelectElement>
    </SelectWrapper>
)

const SelectWrapper = styled.div`
    position: relative;
    transition: all 0.4s;
    &:after {
      content: "";
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 6px solid ${atlasN50};
      position: absolute;
      right: 0.7rem;
      top: calc(50% - 2px);
      pointer-events: none;
    }
    
    &:hover {
        &:after {
            border-top: 6px solid ${atlasN400};
        }
    }
`

export const HTMLSelectElement = styled.select`
    /* Reset Select */
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    background-image: none;

    /* Remove IE arrow */
    &::-ms-expand {
      display: none;
    }
    
    display: flex;
    ${inputBaseStyle}
    cursor: pointer;
`