import React from 'react'

function Navbar() {
  return (
    <header className='bg-white '>
         <nav className="relative z-10 px-6 py-4 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className=" space-x-2">
             <h1 className="text-2xl font-bold hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out  text-gray-700">SmartSocial</h1>
          </div>
          {/* Right side actions */}
          <div className="flex items-center space-x-6">
           <button className='text-gray-600 hover:text-gray-800 hover:scale-110'>Login</button>
           <button
              className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:scale-100 hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar