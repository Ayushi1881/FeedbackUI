import { useContext } from 'react'
import FeedBackItem from './FeedBackItem'
import FeedbackContext from '../context/FeedbackContext'
function FeedackList() {
    const{feedback} = useContext(FeedbackContext)
    if(!feedback || feedback.length === 0){
    return <p>No feedback yet</p>
}

  return <div> {
      feedback.map((item) =>
      (<div>
          <FeedBackItem key={item.id}
           item={item}
           />
      </div>)
      )
  } </div>

}


export default FeedackList