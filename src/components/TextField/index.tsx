import * as  React from 'react';
import styled from 'styled-components';

interface Props {
    label: string,
    placeholder?: string,
    validator: (fn: Function) => string[]
}

export const TextField: React.FunctionComponent<Props> = () => {
    return (
        <TextFieldWrapper>
            <label>Hi</label>
            <InputWrapper>
                <input />
            </InputWrapper>
        </TextFieldWrapper>
    )
};


const TextFieldWrapper = styled.div`

    
`

const InputWrapper = styled.div`
        
`