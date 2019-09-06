import * as React from 'react'
import {Reset} from 'styled-reset'
import { createGlobalStyle } from 'styled-components'


const ViewPortScaling = createGlobalStyle`
  /* sets relative size  */
  html {
    font-size: 16px;
    > * {
        box-sizing: border-box;
    }
  }
`

export const ThemeBootstrap: React.FC = () => (
    <React.Fragment>
        <Reset />
        <ViewPortScaling/>
    </React.Fragment>
)