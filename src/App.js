import { useState } from 'react'
import Card from './components/Card'

import './App.css';


const App = () => {

  const [pickrating, setPickrating] = useState('false')
  const [inputvalue, setInputvalue] = useState('')
  
  const handleChange = (e) =>{
    setInputvalue(e.target.value)
    
  }

  const showThankYouMessage = (e) =>{
    e.preventDefault()
    if(inputvalue !== ''){
      setPickrating(true)
    }
  }

  return (
    <div className="App">
        <Card 
        pickrating = {pickrating}
        inputvalue = {inputvalue} 
        handleChange = {handleChange} 
        showThankYouMessage = {showThankYouMessage}
        >
        </Card>
      )
    </div>
  )
}

export default App;
