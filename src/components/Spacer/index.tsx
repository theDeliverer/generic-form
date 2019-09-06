import styled from "styled-components"
import {spacing} from "../../theme/helpers"

export const Spacer = styled.div<{size: number}>`
    width: 100%;
    margin-bottom: ${props => spacing(props.size)};
`
