import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Listed from './Components/ListedCard/Listed'
import Homebanner from './Components/HomeBanner/Homebanner'


const App = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Homebanner/>
      <Listed/>
      


      
    </React.Fragment>
  )
}

export default App