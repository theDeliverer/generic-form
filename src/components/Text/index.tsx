import styled from "styled-components"
import {scale, spacing} from "../../theme/helpers"
import {atlasDN30} from "../../theme/colors"

type FontWeight = 'light' | 'normal' | 'bold'

interface FontProps {
    weight?: FontWeight,
    color?: string,
    size?: number
}

export const fontFamily = `
    font-family: 'Open Sans';
    color: ${atlasDN30};
    margin-bottom: ${scale(1)};

`
export const fontSize = (size: number) => `
    font-size: ${scale(size)} !important;
    line-height: ${scale(size)};
`

const setWeight = (props: Partial<FontProps>) => `
    ${props.weight || props.weight === 'normal' ? 'font-weight: normal !important;' : ''}
    ${props.weight === 'light' ? 'font-weight: light !important; ' : ''}
    ${props.weight === 'bold' ? 'font-weight: 600 !important;' : ''}
`

// usually, this would be string that looksup a brand colours so that user can't set arbitrary colours
const setColor = (props: Partial<FontProps>) => `
    ${props.color ? `color: ${props.color} !important;` : ''}
`

const setSize = (props: Partial<FontProps>) => `
    ${props.size ? `font-size: ${scale(props.size)} !important;` : ''}
`

const font = (props: FontProps) => `
    ${fontFamily}
    ${setColor(props)}
    ${setWeight(props)}
    ${setSize(props)}
`

export const H1 = styled.h1<FontProps>`
    ${font}
    ${fontSize(3)}
    font-weight: lighter;
`

export const Span = styled.span<FontProps>`
    ${font}
    ${props => font(props)}
    ${fontSize(1)}
`

export const P = styled.p<FontProps>`
    ${font}
    ${fontSize(1)}  
    line-height: ${spacing(1)}
`

export const Label = styled.label<FontProps>`
    ${font}
    ${fontSize(1)}
`