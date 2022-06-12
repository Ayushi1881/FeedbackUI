import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'


function FeedackForm() {
  
  const [text, setText] = useState('Hi')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)
  
  useEffect(() => {
  if(feedbackEdit.edit === true ){
    setBtnDisabled(false)
    setText(feedbackEdit.item.text)
    setRating(feedbackEdit.item.rating)
  }
}, [feedbackEdit])


  const handleTextChange = (e) => {
    
    if(text === '') {
      setBtnDisabled(true)
      setMessage(null);
    } else if(text !== '' && text.trim().length <= 10 ){
      setMessage('Text Message should be atleast 10 character');
      setBtnDisabled(true)
    } else{
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
     if(feedbackEdit.edit === true){
      updateFeedback(feedbackEdit.item.id, newFeedback)
     }
     else {
      addFeedback(newFeedback)
     }
     addFeedback(newFeedback)
     setText('')
   }
 }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2 className='font-bold text-center text-lime-500 animate-pulse text-2xl'>
          How would you rate your service with us?
        </h2>
        <RatingSelect select={(rating) => setRating(rating)}/>
      <div className='border-2 border-lime-600 rounded-md w-72 flex mx-20 m-4 p-2'>
          <input 
          onChange={handleTextChange}
          />
          <Button type='submit' isDisabled={btnDisabled} >Send</Button>
      </div>
      {message && <div className='m-5 text-red-500'>{message}</div>}
      </form>
  </Card>)
}

export default FeedackForm