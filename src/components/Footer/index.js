import React from 'react'

import '../Footer/footer.css'

export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <div className='footerContainer'>
        
        <p>© ITADORI AMV'S - {year} </p>

    </div>
  )
}
