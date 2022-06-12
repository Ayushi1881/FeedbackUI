import React from 'react'
import {FaQuestion} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='link link-hover flex flex-row-reverse p-2'>
        <Link to="/about">
           <FaQuestion size={30} color="Lime"/>
        </Link>
    </div>
  )
}

export default AboutIconLink