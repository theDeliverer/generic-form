import * as React from 'react'
import styled from 'styled-components'
import {modularScale} from 'polished'
import {atlasN30} from "../../../../theme/colors";

export const RegistrationForm: React.FC = () => {
    return (
        <Surface>
            hi
        </Surface>
    )
}

const Surface = styled.div`
    border: 1px solid ${atlasN30};
    border-radius: 3px;
    padding:${modularScale(0.5)}
`