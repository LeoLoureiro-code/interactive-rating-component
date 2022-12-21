import './Card.css'
import Circlestar from './Circlestar'
import Text from './Text'
import Form from './Form'

const Card = (props) =>{

    return(
        <div className= 'card'>
        <Circlestar/>
        <Text/>
        <Form inputvalue = {props.inputvalue} handleChange = {props.handleChange}/>
        </div>
    )
}

export default Card