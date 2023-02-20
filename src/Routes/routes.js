import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home';
import Error from '../Pages/Error';

export default function RoutesApp() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path='/itadori-amvs' element={<Home/>} />
                <Route path='*' element={ <Error/> }></Route>
            </Routes>
        </BrowserRouter>
  )
}
