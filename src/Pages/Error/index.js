import React from 'react'
import '../Error/error.css'

import Gojo from '../../Error/Error-Gojo.gif'

import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='containerError'>

        <img src={Gojo} alt="" />

        <h1> Page not found </h1>
        <Link to={'/itadori-amvs'}><button> Home </button></Link>

    </div>
  )
}
