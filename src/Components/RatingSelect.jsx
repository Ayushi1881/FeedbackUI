import {useState, useContext, useEffect} from 'react'
import FeedbackContext from '../context/FeedbackContext'
function RatingSelect({select}) {
  const [selected, setSelected] = useState()

  const { feedbackEdit} = useContext(FeedbackContext)

  useEffect(() => {
    setSelected(feedbackEdit.item.rating)
  },[feedbackEdit])

  const handleChange = (e)=>{
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }

  return <ul className='flex m-2 flex-wrap'>
    <li className='p-3 px-5'>
      <input type="radio"
      id='num1'
      name='rating'
      value='1'
      onChange={handleChange}
      checked={selected===1}
      className='radio border-black border-4 p-4 bg-lime-200'
      />
      <label htmlFor="num1" className='p-2 relative right-8 bottom-3.5 text-xs font-bold'>1</label>
    </li>
    <li className='p-3 px-5'>
      <input type="radio"
      id='num2'
      name='rating'
      value='2'
      onChange={handleChange}
      checked={selected===2}
      
      className='radio border-black border-4 bg-lime-200 p-4'
      />
      <label htmlFor="num2"  className='p-2 relative right-8 bottom-3.5 text-xs font-bold'>2</label>
    </li>
    <li className='p-3 px-5'>
      <input type="radio"
      id='num3'
      name='rating'
      value='3'
      onChange={handleChange}
      checked={selected===3}
      className='radio border-black border-4 bg-lime-200 p-4'
      />
      <label htmlFor="num3" className='p-2 relative right-8 bottom-3.5 text-xs font-bold'>3</label>
    </li>
    <li className='p-3  px-5'>
      <input type="radio"
      id='num4'
      name='rating'
      value='4'
      onChange={handleChange}
      checked={selected===4}
      className='radio border-black border-4 bg-lime-200 p-4' />
      <label htmlFor="num4" className='p-2 relative right-8 bottom-3.5 text-xs font-bold'>4</label>
    </li>
    <li className='p-3 px-5'>
      <input type="radio"
      id='num5'
      name='rating'
      value='5'
      onChange={handleChange}
      checked={selected===5}
      className='radio border-black border-4 bg-lime-200 p-4'
      />
      <label htmlFor="num5" className='p-2 relative right-8 bottom-3.5 text-xs font-bold'>5</label>
    </li>
    <li className='p-3 px-5'>
      <input type="radio"
      id='num6'
      name='rating'
      value='6'
      onChange={handleChange}
      checked={selected===6}
      className='radio border-black border-4 bg-lime-200 p-4'
      />
      <label htmlFor="num6" className='p-2 relative right-8 bottom-3.5 text-xs font-bold'>6</label>
    </li>
    <li className='p-3 px-5'>
      <input type="radio"
      id='num7'
      name='rating'
      value='7'
      onChange={handleChange}
      checked={selected===7}
      className='radio border-black border-4 bg-lime-200 p-4'
      />
      <label htmlFor="num7" className='p-2 relative right-8 bottom-3.5 text-xs font-bold'>7</label>
    </li>
    <li className='p-3 px-5'>
      <input type="radio"
      id='num8'
      name='rating'
      value='8'
      onChange={handleChange}
      checked={selected===8}
      className='radio border-black border-4 bg-lime-200 p-4'
      />
      <label htmlFor="num8" className='p-2 relative right-8 bottom-3.5 text-xs font-bold'>8</label>
    </li>
    <li className='p-3 px-5'>
      <input type="radio"
      id='num9'
      name='rating'
      value='9'
      onChange={handleChange}
      checked={selected===9}
      className='radio border-black border-4 p-4 bg-lime-200 text-2xl'
      />
      <label htmlFor="num9" className='p-2 relative right-8 bottom-3.5 text-xs font-bold'>9</label>
    </li>
    <li className='p-3 px-5'>
      <input type="radio"
      id='num10'
      name='rating'
      value='10'
      onChange={handleChange}
      checked={selected===10}
      className='radio border-black border-4 bg-lime-200 p-4 animate-bounce'
      />
      <label htmlFor="num10" className='p-2 relative right-8 bottom-4 text-xs font-bold'>10</label>
    </li>
  </ul>
}

export default RatingSelect