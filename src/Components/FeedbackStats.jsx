import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
    //calculate rating avg
    let average =feedback.reduce((acc,cur) =>{
        return acc + cur.rating
    },0)/feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='text-lime-500 m-5 text-lg grid grid-cols-2 font-bold'>
        <h4 className=''>{feedback.length} Reviews</h4>
        <h4 className=''>Average rating: {isNaN(average) ? 0 : average} </h4>
    </div>
  )
}


export default FeedbackStats