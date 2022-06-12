import PropTypes from 'prop-types'

function Button({children, version, type, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-outline btn-sm m-1 btn-${version}`}>
        {children}
    </button>

  )
}
Button.defaultProps = {
    version:'success',
    type: 'button',
    isDisabled: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}
export default Button