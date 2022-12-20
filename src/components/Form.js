import './Form.css'

const Form = () =>{
    return (
        <div>
            <form>
                <div className = 'radio-div'>
                    <input type = 'radio' value = '1' name='rating' id='1' className='radio-button'/>
                    <label for='1'>1</label>
                    <input type = 'radio' value = '2' name='rating' id='2' className='radio-button'/>
                    <label for='2'>2</label>
                    <input type = 'radio' value = '3' name='rating' id='3' className='radio-button'/>
                    <label for='3'>3</label>
                    <input type = 'radio' value = '4' name='rating' id='4' className='radio-button'/>
                    <label for='4'>4</label>
                    <input type = 'radio' value = '5' name='rating' id='5' className='radio-button'/>
                    <label for='5'>5</label>
                </div>
                <div className = 'submit-div'>
                        <input type= 'submit' value = 'SUBMIT' className='submit-btn'/>
                    </div>
            </form>
        </div>
    )
}

export default Form