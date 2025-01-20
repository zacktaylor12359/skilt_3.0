import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/TipCard'
import ChallengeCard from './components/ChallengeCard'
import './App.css'

function App() {

  return (
    <>
      
      <ChallengeCard incrementCount={function (value: number, nodeId: string): void {
          throw new Error('Function not implemented.')
        } } nodeId={''}/>
    </>
  )
}

export default App
