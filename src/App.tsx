import * as React from 'react'
import {ThemeBootstrap} from "./theme/ThemeBootstrap"
import {RegistrationPage} from "./pages/registration"

const App: React.FC = () => {
    return (
        <React.Fragment>
            <ThemeBootstrap/>
            <RegistrationPage/>
        </React.Fragment>
    )
}

export default App
