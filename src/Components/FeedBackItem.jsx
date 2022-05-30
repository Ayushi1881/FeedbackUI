import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card"
function FeedBackItem({item, handleDelete}) {
  
  return (
    <Card >
        <div className='rounded-full bg-fuchsia-400 relative right-4 bottom-2 inline py-2 px-3.5 pb-0 h-10'>{item.rating}</div>
        <div className="p-7 text-black block">{item.text}</div>
        <button className="close h-2 p-2" onClick={()=>handleDelete(item.id)}>
          <FaTimes color='purple'/>
        </button>
        {/* <button className='text-black rounded-full bg-blue-500 h-10 px-3 block'>Click</button> */}
    </Card>
  )
}
FeedBackItem.propTypes ={
  item: PropTypes.object.isRequired,
}
export default FeedBackItem