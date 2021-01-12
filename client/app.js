import React from 'react'

import {Navbar, Homepage} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Routes />
    </div>
  )
}

export default App
