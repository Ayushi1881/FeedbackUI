import PropTypes from 'prop-types'

function Header({text}) {
  return (
    <header className='bg-stone-900 py-2 navbar'>
      <div  className='font-bold text-fuchsia-400 font-serif btn btn-ghost normal-case text-xl'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
}
Header.propTypes = {
  text: PropTypes.string,
}

export default Header;