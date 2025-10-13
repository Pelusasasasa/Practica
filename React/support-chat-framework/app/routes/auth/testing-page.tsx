import React from 'react'
import { Link } from 'react-router'

const TestingPage = () => {
    return (
        <>
            <div>Testing Page</div>
            <Link to='/auth/login' className='text-blue-500 underline'>Go Back</Link>
        </>
    )
}

export default TestingPage