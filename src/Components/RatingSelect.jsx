import {useState} from 'react'
function RatingSelect({select}) {
  const [selected, setSelected] = useState()

  const handleChange = (e)=>{
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }

  return <ul className='flex m-2'>
    <li className='p-3 px-5'>
      <input type="radio"
      id='num1'
      name='rating'
      value='1'
      onChange={handleChange}
      checked={selected===1}
      className='radio radio-secondary'
      />
      <label htmlFor="num1" className='p-2 relative right-6 bottom-1.5 text-xs'>1</label>
    </li>
    <li className='p-3 px-5'>
      <input type="radio"
      id='num2'
      name='rating'
      value='2'
      onChange={handleChange}
      checked={selected===2}
      
      className='radio radio-secondary'
      />
      <label htmlFor="num2"  className='p-2 relative right-6 bottom-1.5 text-xs'>2</label>
    </li>
    <li className='p-3 px-5'>
      <input type="radio"
      id='num3'
      name='rating'
      value='3'
      onChange={handleChange}
      checked={selected===3}
      className='radio radio-secondary'
      />
      <label htmlFor="num3" className='p-2 relative right-6 bottom-1.5 text-xs'>3</label>
    </li>
    <li className='p-3  px-5'>
      <input type="radio"
      id='num4'
      name='rating'
      value='4'
      onChange={handleChange}
      checked={selected===4}
      className='radio radio-secondary'
      />
      <label htmlFor="num4" className='p-2 relative right-6 bottom-1.5 text-xs'>4</label>
    </li>
    <li className='p-3 px-5'>
      <input type="radio"
      id='num5'
      name='rating'
      value='5'
      onChange={handleChange}
      checked={selected===5}
      className='radio radio-secondary'
      />
      <label htmlFor="num5" className='p-2 relative right-6 bottom-1.5 text-xs'>5</label>
    </li>
    <li className='p-3 px-5'>
      <input type="radio"
      id='num6'
      name='rating'
      value='6'
      onChange={handleChange}
      checked={selected===6}
      className='radio radio-secondary'
      />
      <label htmlFor="num6" className='p-2 relative right-6 bottom-1.5 text-xs'>6</label>
    </li>
    <li className='p-3 px-5'>
      <input type="radio"
      id='num7'
      name='rating'
      value='7'
      onChange={handleChange}
      checked={selected===7}
      className='radio radio-secondary'
      />
      <label htmlFor="num7" className='p-2 relative right-6 bottom-1.5 text-xs'>7</label>
    </li>
    <li className='p-3 px-5'>
      <input type="radio"
      id='num8'
      name='rating'
      value='8'
      onChange={handleChange}
      checked={selected===8}
      className='radio radio-secondary'
      />
      <label htmlFor="num8" className='p-2 relative right-6 bottom-1.5 text-xs'>8</label>
    </li>
    <li className='p-3 px-5'>
      <input type="radio"
      id='num9'
      name='rating'
      value='9'
      onChange={handleChange}
      checked={selected===9}
      className='radio radio-secondary'
      />
      <label htmlFor="num9" className='p-2 relative right-6 bottom-1.5 text-xs'>9</label>
    </li>
    <li className='p-3 px-5'>
      <input type="radio"
      id='num10'
      name='rating'
      value='10'
      onChange={handleChange}
      checked={selected===10}
      className='radio radio-secondary animate-bounce'
      />
      <label htmlFor="num10" className='p-2 relative right-6 bottom-2 text-xs'>10</label>
    </li>
  </ul>
}

export default RatingSelect