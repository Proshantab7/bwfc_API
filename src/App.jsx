import React, { Fragment } from 'react'
import Banner from './components/Banner'
import Sponsor from './components/Sponsor'
import Feature from './components/Feature'
import Payment from './components/Payment'
import Client from './components/Client'

const App = () => {
  return (
    <Fragment>
      <Banner/>
      <Sponsor/>
      <Feature/>
      <Payment/>
      <Client/>
    </Fragment>
  )
}

export default App