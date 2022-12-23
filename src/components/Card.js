import './Card.css'
import Form from './Form'
import ThankyouMessage from './ThankyouMessage';

const Card = (props) => {

    if (props.pickrating === true) {
        return (
            <div className='card'>
                <ThankyouMessage 
                inputvalue={props.inputvalue}
                />
            </div>
        )
    }
    return (
        <div className='card'>
            <div className='star'></div>
            <div>
                <div>
                    <h1>How did we do?</h1>
                    <p>Please let us know how we did with your support request.
                        All feedback is appreciated to help us improve our offering!
                    </p>
                </div>
                <Form
                    pickrating={props.pickrating}
                    handleChange={props.handleChange}
                    showThankYouMessage={props.showThankYouMessage}
                    showRate = {props.showRate}
                />
            </div>
        </div>
    )

    // return (
    //     {props.pickrating === true ? (
    //         
    //     ) :(
    //         <div className='card'>
    //         <div className='star'></div>
    //         <div>
    //             <div>
    //                 <h1>How did we do?</h1>
    //                 <p>Please let us know how we did with your support request.
    //                     All feedback is appreciated to help us improve our offering!
    //                 </p>
    //             </div>
    //             <Form
    //                 pickrating={props.pickrating}
    //                 inputvalue={props.inputvalue}
    //                 handleChange={props.handleChange}
    //                 showThankYouMessage={props.showThankYouMessage}
    //             />
    //         </div>
    //     </div>
    //     )
    // )
}

export default Card