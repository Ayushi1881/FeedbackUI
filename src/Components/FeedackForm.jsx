import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedackForm() {
  const {text, setText} = useState('')
  const {btnDisabled, setBtnDisabled} = useState(true)
  const {message, setMessage} = useState('Hello')

  const handleTextChange = (e) => {
    if(text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if(text!=='' && text.trim().length <=10 ){
      setMessage('Text Message should be atleast 10 character')
      setBtnDisabled(true)
    } else{
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
 }
  return <Card>
      <form className='font-bold ml-24 text-center'>
        <h2>
          How would you rate your service with us?
        </h2>
      <div className='m-2 border-2 border-indigo-700 p-2 rounded-md'>
          <input 
          onChange={handleTextChange}
          type="text" 
          placeholder='Write a review'
          value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>Send</Button>
      </div>
      {message && <div className='text-red-900 '>{message}</div>}
      </form>
  </Card>
}

export default FeedackForm