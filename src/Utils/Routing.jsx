import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import User from '../Components/User'
import UserDetail from '../Components/UserDetail'

function Routing() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            {/* To open in same component */}
            <Route path='/user' element={<User />}>
                <Route path='/user/:name' element={<UserDetail />} />
            </Route>
        </Routes>
    )
}

export default Routing

// To open in separate components
{/* < Route path = '/user' element = {< User />} />
< Route path = '/user/:name' element = {< UserDetail />} /> */}
