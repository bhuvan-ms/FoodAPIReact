import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchBar from './components/SearchBar'
import './App.css'


function App() {
  return (
    <>    
      <h1 className="text-3xl font-bold underline">Food Details API</h1>  
      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      <SearchBar/>     
    </>
  )
}

export default App
