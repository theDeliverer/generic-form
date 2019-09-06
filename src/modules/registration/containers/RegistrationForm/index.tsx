import * as React from 'react'
import styled from 'styled-components'
import {spacing} from "../../../../theme/helpers"
import {atlasN30} from "../../../../theme/colors"
import {TextField} from "../../../../components/forms/TextField"
import {EmailField} from "../../components/EmailField/EmailField"
import {SelectField} from "../../../../components/forms/SelectField"
import {Button} from "../../../../components/forms/primatives/Button"

interface Props {
    onSubmit: () => void
}

export const RegistrationForm: React.FC<Props> = (props) => {
    const [name, setName] = React.useState('')
    const [isNameValid, setIsNameValid] = React.useState(false)

    const [email, setEmail] = React.useState('')
    const [isEmailValid, setIsEmailValid] = React.useState(false)

    const isFormValid = isEmailValid && isNameValid

    return (
            <Surface>
                <TextField
                    required
                    label={'Name'}
                    onChange={setName}
                    value={name}
                    onValidate={setIsNameValid}
                />
                <EmailField
                    label={'Email'}
                    onChange={setEmail}
                    onValidate={setIsEmailValid}
                    value={email}
                />

                {/* unmanaged component, React will complain... */}
                <SelectField
                    label={'What kind of user are you?'}
                    options={[
                        "Admin",
                        "Developer",
                        "User",
                    ]}
                />

                <ButtonContainer>
                    <SubmitButton onClick={props.onSubmit} enabled={isFormValid} label={"Register"}/>
                </ButtonContainer>

            </Surface>
    )
}


const SubmitButton = styled(Button)`
    @media (max-width: 1000px) {
        width: 100%;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Surface = styled.div`
    border: 1px solid ${atlasN30};
    border-radius: 3px;
    padding:${spacing(1)};
`
