import React from 'react'
import News from './components/CountryNews/News'
import AppleNews from './components/AppleNews/AppleNews'

function App() {
  return (
    <div>
      <h4 className='text-3xl ms-5 mt-5'>The Country News</h4>
      <News/>
      <AppleNews/>
   </div>
  )
}

export default App