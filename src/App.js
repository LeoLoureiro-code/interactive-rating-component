import { useState } from 'react'
import Card from './components/Card'
import './App.css';


const App = () => {
  const [inputvalue, setInputvalue] = useState('')
  
  const handleChange = (e) =>{
    e.preventDefault()
    setInputvalue(e.target.value)
    console.log(inputvalue)
  }

  return (
    <div className="App">
      <Card inputvalue = {inputvalue} handleChange = {handleChange}>
      </Card>
    </div>
  );
}

export default App;
