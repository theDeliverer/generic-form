import styled from "styled-components"
import {scale} from "../../theme/helpers"
import {atlasDN30} from "../../theme/colors"

const fontFamily = `
    font-family: 'Open Sans';
    color: ${atlasDN30};
    margin-bottom: ${scale(0.25)};
   
`

export const H1 = styled.h1`
    ${fontFamily}
    font-size: ${scale(2)};
    font-weight: lighter;
`

export const Span = styled.span`
    ${fontFamily}
    font-size: ${scale(0.5)};
`
