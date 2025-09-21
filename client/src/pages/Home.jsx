import React from 'react'
import Navbar from '../components/Navbar'
import card from "../assets/card.svg"
import card1img from "../assets/card1img.svg"
import card2img from "../assets/card2img.svg"
import card3img from "../assets/card3img.svg"
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6f5f6] via-[#eae7ed] to-[#E9EAFF] relative overflow-hidden">
      {/* Navigation Bar */}
     <Navbar />
      {/* Main Content */}
      <main className="relative z-10 px-6 py-8 ">
        <div className="max-w-4xl mx-auto text-center">
          {/* Feature Tag */}
          <div className="inline-flex items-center space-x-2 bg-purple-100 border-2 border-purple-400 text-purple-600 px-4 py-1 rounded-full mb-8">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium">AI-Powered Content Creation</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Create Content
            <br />
            <span className="text-purple-600">10X Faster</span>
          </h1>

          {/* Description */}
          <p className="text-[18px] text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Turn your visions into convertible SEO-friendly content with our AI-powered platform. 
            From blogs to social media posts - Design Faster & Publish Smarter.
          </p>
        </div>
      </main>
     
      {/* Floating Decorative Icons */}
      <div className="absolute top-40 left-80 w-12 h-12 bg-pink-50 animate-bounce  bg-opacity-80 rounded-full flex items-center justify-center shadow-lg">
        <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      </div>

      <div className="absolute top-40 right-70 w-12 h-12 bg-pink-50 animate-bounce bg-opacity-80 rounded-full flex items-center justify-center shadow-lg">
        <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
        </svg>
      </div>

      <div className="absolute bottom-100 left-50 w-12 h-12 bg-pink-50 animate-bounce bg-opacity-80 rounded-full flex items-center justify-center shadow-lg">
        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>

      <div className="absolute bottom-76 right-70 w-12 h-12 bg-pink-50 animate-bounce   bg-opacity-80 trans rounded-full flex items-center justify-center shadow-lg">
        <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      </div>
      <h1 className='text-3xl mb-5 text-gray-500 text-center font-bold'>Automate Your Social Media</h1>
      <div className='max-w-6xl mx-auto py-10 '>    
          <div className='flex items-center gap-10  justify-evenly'>
            <div className='hover:scale-105 transition-all duration-300 ease-in-out rounded-b-2xl border-1 border-t-0 border-gray-300 overflow-hidden flex flex-col '>
             <div className='relative'>
              <img src={card} alt="card" />
              <img className='absolute right-4 top-4 z-999' src={card1img} alt="" />
              <h1 className=' absolute bottom-5 left-[10%] text-2xl font-bold '>Instagram Post : Reel and photo...</h1>
              <BiLogoInstagram className='absolute bg-white text-pink-600 text-4xl top-5 left-9 rounded-2xl' />
             </div>
             <div className='px-2 py-5'>
               <p className='text-gray-700 font-medium  text-xl p-3 '>Make your Social media post stand Out with AI.</p>
             </div>
            </div>
            <div className='hover:scale-105 transition-all duration-300 ease-in-out rounded-b-2xl border-1 border-t-0 border-gray-300 overflow-hidden flex flex-col '>
             <div className='relative'>
              <img src={card} alt="card" />
              <img className='absolute right-4 top-4 z-999' src={card2img} alt="" />
              <h1 className=' absolute bottom-5 left-[10%] text-2xl font-bold '>Instagram Post : Reel and photo...</h1>
              <BiLogoTwitter className='absolute bg-white text-pink-600 text-4xl top-5 left-9 rounded-2xl' />
             </div>
             <div className='px-2 py-5'>
               <p className='text-gray-700 font-medium  text-xl p-3 '>Make your Social media post stand Out with AI.</p>
             </div>
            </div>
            <div className='hover:scale-105 transition-all duration-300 ease-in-out rounded-b-2xl border-1 border-t-0 border-gray-300 overflow-hidden flex flex-col '>
             <div className='relative'>
              <img src={card} alt="card" />
              <img className='absolute right-4 top-4 opacity-70' src={card3img} alt="" />
              <h1 className=' absolute bottom-5 left-[10%] text-2xl font-bold '>Instagram Post : Reel and photo...</h1>
              <BiLogoLinkedinSquare className='absolute  bg-white text-pink-600 text-4xl top-5 left-9 rounded-2xl' />
             </div>
             <div className='px-2 py-5'>
               <p className='text-gray-700 font-medium  text-xl p-3 '>Make your Social media post stand Out with AI.</p>
             </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home