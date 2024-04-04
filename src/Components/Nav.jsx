import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav className='w-full bg-blue-200 px-10 py-4 flex items-center gap-5 justify-start'>
            <NavLink to='/' className={(e) => {
                return [e.isActive ? 'text-red-500' : '',
                e.isActive ? 'font-semibold' : '',].join(' ')
            }}>Home</NavLink>

            <NavLink to='/about' style={(e) => {
                return {
                    color: e.isActive ? '#ef4444' : 'black',
                    fontWeight: e.isActive ? 'bold' : '',
                };
            }}>About</NavLink>
            
            <NavLink to='/user'>
                {(e) => {
                    return <span className={[
                        e.isActive ? 'text-red-500' : '',
                        e.isActive ? 'font-semibold' : '',
                    ].join(' ')}>User</span>
                }}
            </NavLink>
        </nav >
    )
}

export default Nav
