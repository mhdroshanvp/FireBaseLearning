import { useState } from 'react'
import {firebase} from './Firebase/config'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <button onClick={()=>{
      firebase.firestore().get().then((data)=>{

      })
    }}>Click me</button>
    </>
  )
}

export default App
