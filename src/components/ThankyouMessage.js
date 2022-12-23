import Image from '../images/illustration-thank-you.svg'
import './ThankyouMessage.css'
const ThankyouMessage = (props) =>{
    return(
        <div className='thankyou-div'>
            <img className='thankyou-image' src={Image} alt="thank you"/>
            <div className='thankyou-background'>
                <span>You select {props.inputvalue} of 5</span>
            </div>
            <h1 className='thankyou-title'>Thank you!</h1>
            <p className='thankyou-par'>
                We appreciate you taking the time to give a rating.
                If you ever need more support, don't hesitate to get in touch!
            </p>
        </div>
    )
}

export default ThankyouMessage