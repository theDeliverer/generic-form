import styled from "styled-components"
import {inputBaseStyle} from "../../styles";

export const Input = styled.input`
    ${inputBaseStyle}
    outline: medium none !important;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`
