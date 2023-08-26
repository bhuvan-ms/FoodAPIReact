import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchBar from './components/SearchBar'
import './App.css'


function App() {
  return (
    <>    
      <h1 className="text-3xl font-bold underline">Food Details API</h1>  
      <br/>
      <p>Built with <a className='text-green-400' href='https://www.themealdb.com/'>TheMealDb API </a> by <a className='text-green-400' href='https://github.com/bhuvan-ms'>Bhuvan MS</a></p>
      <br/>
      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      <SearchBar/>     
    </>
  )
}

export default App
