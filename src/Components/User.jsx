import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function User() {
    return (
        <div className='w-1/2 m-auto'>
            <h1 className='m-4 text-center text-4xl font-bold text-red-400'>User</h1>

            <div className='w-1/2 flex flex-col'>
                <Link to="/user/ayush" className='p-3 bg-red-300 text-2xl mb-4 hover:bg-red-400'>Ayush</Link>
                <Link to="/user/prashant" className='p-3 bg-red-300 text-2xl mb-4 hover:bg-red-400'>Prashant</Link>
                <Link to="/user/john" className='p-3 bg-red-300 text-2xl mb-4 hover:bg-red-400'>John</Link>
            </div>
            <hr />
            <Outlet />
        </div>
    )
}

export default User
