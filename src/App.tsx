import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant='success' />
      <Button variant='danger' />
      <Button variant='info' />
      <Button variant='success' />
      <GlobalStyle />

    </ThemeProvider>
  )
}
