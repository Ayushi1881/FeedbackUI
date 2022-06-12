import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import Card from "./shared/Card"
import FeedbackContext from '../context/FeedbackContext'
function FeedBackItem({item}) {
  const { deleteFeedback } = useContext(FeedbackContext)
  return (
    <Card>
        <div className='rounded-full bg-lime-400 relative right-4 bottom-2 inline py-2 px-3.5 pb-0 h-10'>{item.rating}</div>
        <div className="p-7">{item.text}</div>
        <button className=" h-2 p-2 relative top-2 left-4" onClick={()=> deleteFeedback(item.id)}>
          <FaTimes color='lime'/>
        </button>
    </Card>
  )
}

FeedBackItem.propTypes ={
  item: PropTypes.object.isRequired,
}
export default FeedBackItem