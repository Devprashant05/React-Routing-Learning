import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetail() {
    const { name } = useParams();
    const navigate = useNavigate();
    const backHandler = () => {
        navigate(-1)
    }
    return (
        <div className='w-1/2 m-auto '>
            <h1 className='m-4 text-center text-4xl font-bold text-red-400'>User Details</h1>
            <h1 className='text-3xl mt-5'>Hyy!! {name}</h1>
            <button onClick={backHandler} className='px-3 py-1 bg-red-300 rounded-md mt-5'>Go back</button>
        </div>
    )
}

export default UserDetail
