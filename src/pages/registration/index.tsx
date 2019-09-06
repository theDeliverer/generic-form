import * as React from 'react'
import styled from 'styled-components'
import {H1, P} from "../../components/Text"
import {RegistrationForm} from "../../modules/registration/containers/RegistrationForm"
import {atlasN600} from "../../theme/colors"
import {scale, spacing} from "../../theme/helpers"
import {ErrorMessage} from "../../components/ErrorMessage"

const getMockErrorMessage = () => Math.random() < 0.5 ? "Your email is already taken" : "We couldn’t process your request, please try again"

export const RegistrationPage = () => {
    const [submitted, onSubmit] = React.useState(false)

    return (
        <Page>
            <Content>
                {submitted && <ErrorMessage message={getMockErrorMessage()}/>}
                <Header>
                    <H1>Register</H1>
                    <P weight={"bold"}>Please add your information to register in our platform.</P>
                </Header>
                <RegistrationForm onSubmit={() => onSubmit(true)}/>
                <LegalText weight={'bold'}>Please review our <a href="https://lenses.io/legals/policy/">Privacy
                    Policy</a> before registering.</LegalText>

            </Content>
        </Page>
    )
}

const LegalText = styled(P)`
    padding: ${spacing(2)};
    font-size: ${scale(0.75)};   
    text-align: center;
    color: ${atlasN600};
`

const Page = styled.main`
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 120px;
`

const Content = styled.div`
    width: ${100 / 3}%;
    @media (max-width: 1200px) {
        width: 50%%;
    
    }
    @media (max-width: 1000px) {
        width: 61.8%;
    
    }
    @media (max-width: 500px) {
        width: 80%;
    
    }
`

const Header = styled.header`
    padding: ${spacing(1)};
`