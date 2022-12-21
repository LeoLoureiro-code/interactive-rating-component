import { useState } from 'react'
import Card from './components/Card'
import './App.css';


const App = () => {
  const [inputvalue, setInputvalue] = useState('')
  
  const handleChange = (e) =>{
    setInputvalue(e.target.value)
    
  }

  const showThankYouMessage = (e) =>{
    e.preventDefault()
    console.log(inputvalue)
  }

  return (
    <div className="App">
      <Card inputvalue = {inputvalue} handleChange = {handleChange} showThankYouMessage = {showThankYouMessage}>
      </Card>
    </div>
  );
}

export default App;
