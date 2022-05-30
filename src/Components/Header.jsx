import logo from './image/logo.png';
import PropTypes from 'prop-types'

function Header({text}) {
  return (
    <header className='bg-stone-900 text-center py-2'>
      <div  className='text-2xl text-fuchsia-400 font-serif'>
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