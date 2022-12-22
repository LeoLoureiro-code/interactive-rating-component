const ThankyouMessage = (props) =>{
    return(
        <div>
            <img src="../src/images/illustration-thank-you.svg" alt="thank you"/>
            <div>
                <span>You select {props.pickrating} of 5</span>
            </div>
            <h1>Thank you!</h1>
            <p>
                We appreciate you taking the time to give a rating.
                If you ever need more support, don't hesitate to get in touch!
            </p>
        </div>
    )
}

export default ThankyouMessage