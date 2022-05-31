import React from 'react'
import Card from './shared/Card'

function FeedackForm() {
  return <Card>
      <form className='font-bold p-5 pl-20 flex-none'>How would you rate your service with us?</form>
      <div className=''>
          <input className=' border-2 h-28 flex-none block' type="text" placeholder='Write a review'/>
      </div>
  </Card>
}

export default FeedackForm