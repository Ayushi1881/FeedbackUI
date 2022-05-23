import { useState} from 'react'
function FeedBackItem() {
    const [rating, setRating] = useState(7)
    const [text, setText] = useState('This is a example of a feedback item')

    const handleClick = () =>{
        setRating((prev)=>{

        })
    }
  return (
    <div className='bg-white m-5 rounded-md flex'>
        <div className='rounded-full bg-red-600 relative right-4 bottom-2 inline py-2 px-3 pb-0 h-10'>{rating}</div>
        <div className="p-7 text-black">
            This is an Example of Feedback Item.
        </div>
    </div>
  )
}

export default FeedBackItem