import React from 'react'
import '../MenuBurguer/menuburguer.css';

import { useState } from 'react';

export default function MenuBurguer() {

    const [active, setMode] = useState(false);
    const ToggleMode = () =>{
        setMode(!active)
    }

  return (

    <div className='test'>
                <nav className={active ? 'menu menuOpen' : "menu menuClose"}>
                    <a target="_blank" className='ajuste' href="#">Tutorial</a>
                    <a target="_blank" className='ajuste' href="#">Noticias</a>
                    <a target="_blank" className='ajuste' href="#">Contato</a>
                </nav>
                <div className={active ? 'icon iconActive' : 'icon'} onClick={ToggleMode}>
                    <div className="hamburguer hamburguerIcon"></div>
                </div>
            </div>

  )
}
