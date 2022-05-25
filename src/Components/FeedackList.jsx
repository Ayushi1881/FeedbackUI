import React from 'react'
import PropTypes from './FeedBackItem'
import FeedBackItem from './FeedBackItem'
function FeedackList({feedback}) {
    if(!feedback || feedback.length === 0){
    return <p>No feedback yet</p>
}

  return <div className=''> {
      feedback.map((item) =>
      <div>
          <FeedBackItem key={item.id} item={item}/>
      </div>
      )
  } </div>

}

FeedackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,

        })
    )
}

export default FeedackList