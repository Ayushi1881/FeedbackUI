import React from 'react'
import PropTypes from 'prop-types'
import FeedBackItem from './FeedBackItem'
function FeedackList({feedback, handleDelete}) {
    if(!feedback || feedback.length === 0){
    return <p>No feedback yet</p>
}

  return <div className=''> {
      feedback.map((item) =>
      <div>
          <FeedBackItem
           key={item.id}
           item={item}
           handleDelete={handleDelete}
           />
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