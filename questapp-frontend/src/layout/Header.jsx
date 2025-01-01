import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Header() {
    return (
        <div className='w-full flex justify-between px-8 py-5 text-lg text-gray-500 hover:text-gray-900 font-medium 
        bg-white'>
            <div>

            </div>
            <Link>
                Log in
            </Link>
        </div>
    )
}

export default Header