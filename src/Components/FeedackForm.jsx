import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedackForm({handleAdd}) {
  
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState([])

  const handleTextChange = (e) => {
    
    if(text === '') {
      console.log('str')
      setBtnDisabled(true)
      setMessage(null);
    } else if(text !== '' && text.trim().length <= 10 ){
      console.log('mid')
      setMessage('Text Message should be atleast 10 character');
      setBtnDisabled(true)
    } else{
      console.log('str585')
      setMessage(null);
      setBtnDisabled(false)
    }
    setText(e.target.value)
 }
 const handleSubmit =(e) =>{
   e.preventDefault()
   if(text.trim().length >10){
     const newFeedback = {
       text,
       rating,
     }
     handleAdd(newFeedback)
     setText('')
   }
 }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2 className='font-bold ml-24 text-center p-2 text-lime-500 animate-pulse text-2xl'>
          How would you rate your service with us?
        </h2>
        <RatingSelect select={(rating) => setRating(rating)}/>
      <div className='border-2 border-lime-600 rounded-md w-72 flex mx-20 m-4 p-2'>
          <input 
          onChange={handleTextChange}
          />
          <Button type='submit' isDisabled={btnDisabled} >Send</Button>
      </div>
      {message && <div className='m-2 text-red-900'>{message}</div>}
      </form>
  </Card>)
}

export default FeedackForm