import React from 'react'
import '../Header/header.css'

import Logo from '../../Assets/Imagens/itadori_amvs_pfp.jpg'

export default function Header() {
  return (
    <div className='video-itadori'>

        <div className='itadoall'>
            <img className='itadori-logo' src={Logo} alt="" />

            <div className="itadori-message">

                <h1 className='channelName'> <strong> ITADORI AMV'S </strong> </h1>
                <h3 className='h3message'> We bring another way to enjoy animations! </h3>

            </div>

            <div className="itadori-analustic">

                <h2 className='itadoriAnalystic'><strong>analytics</strong> 📊</h2>
                <h1 className='dados' > <strong> 📺 76k+ subscribers <br /> 👀 19M+ views </strong> </h1>

            </div>

        </div>

    </div>
  )
}
