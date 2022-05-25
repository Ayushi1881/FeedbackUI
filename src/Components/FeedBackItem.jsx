import { PropTypes } from 'prop-types'
import Card from "./shared/Card"
function FeedBackItem({item}) {

  return (
    <Card >
        <div className='rounded-full bg-red-600 relative right-4 bottom-2 inline py-2 px-3.5 pb-0 h-10'>{item.rating}</div>
        <div className="p-7 text-black block">{item.text}</div>
        <button className=' block text-black rounded-full bg-blue-500 h-10 px-3'>Click</button>
    </Card>
  )
}
FeedBackItem.PropTypes ={
  item: PropTypes.object.isRequired,
}
export default FeedBackItem