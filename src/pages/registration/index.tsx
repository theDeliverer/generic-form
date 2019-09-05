import * as React from 'react'
import styled from 'styled-components'
import {H1, Span} from "../../components/Text"
import {RegistrationForm} from "../../modules/registration/containers/RegistrationForm";

export const RegistrationPage = () => (
    <Page>
        <Content>
            <Header>
                <H1>Register</H1>
                <Span>Test</Span>
            </Header>
            <RegistrationForm/>
        </Content>
    </Page>
)

const Page = styled.main`
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 120px;
`

const Content = styled.div`
    width: ${100 / 3}%;
`

const Header = styled.header`
    
`