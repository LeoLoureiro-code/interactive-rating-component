import './Form.css'



const Form = (props) => {
    return (
        <div>
            <form>
                <div className='radio-div'>
                    <div className='input-div'>
                        <input type='radio'
                            value='1'
                            name='rating'
                            id='1'
                            className='radio-button'
                            onChange={props.handleChange}
                        />
                        <label htmlFor='1'>1</label>
                    </div>
                    <div className='input-div'>

                        <input
                            type='radio'
                            value='2'
                            name='rating'
                            id='2'
                            className='radio-button'
                            onChange={props.handleChange}
                        />

                        <label htmlFor='2'>2</label>

                    </div>
                    <div className='input-div'>
                        <input
                            type='radio'
                            value='3'
                            name='rating'
                            id='3'
                            className='radio-button'
                            onChange={props.handleChange}
                        />
                        <label htmlFor='3'>3</label>
                    </div>
                    <div className='input-div'>
                        <input
                            type='radio'
                            value='4'
                            name='rating'
                            id='4'
                            className='radio-button'
                            onChange={props.handleChange}
                        />
                        <label htmlFor='4'>4</label>
                    </div>
                    <div className='input-div'>
                        <input
                            type='radio'
                            value='5'
                            name='rating'
                            id='5'
                            className='radio-button'
                            onChange={props.handleChange}
                        />
                        <label htmlFor='5'>5</label>
                    </div>
                </div>
                <div className='submit-div'>
                    <input
                        type='submit'
                        value='SUBMIT'
                        className='submit-btn'
                        onClick={props.showThankYouMessage}
                    />
                </div>
            </form>
        </div>
    )
}

export default Form