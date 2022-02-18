import React from 'react'
import { AppProvider } from './context'
// components
import Main from './main'
// import CartContainer from './CartContainer'
// items

function App() {

  return <>
    <AppProvider>
      <Main />
    </AppProvider>
  </>
}

export default App
