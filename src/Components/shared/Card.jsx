import PropTypes from 'prop-types'
function Card({ children, reverse}) {
  return (
    <div className={`bg-white text-black m-5 rounded-md flex ${reverse && "text-white bg-black m-5 rounded-md flex"}`}>{children}</div>
  )
}

Card.defaultProps={
    reverse: false,
}

Card.propTypes={
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}
export default Card