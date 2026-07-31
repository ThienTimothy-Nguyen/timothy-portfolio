"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { MdKey } from 'react-icons/md';
import { PiKeyhole } from 'react-icons/pi'

function AnimationBoard() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [isShowed, setIsShowed] = useState(false); 
  const router = useRouter(); 

  const handleMouseMove = (e:React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ 
      x: e.clientX - rect.left, 
      y: e.clientY - rect.top, 
    });
  }

  return (
    <div 
      className='gradient--dark-blue h-64 md:h-104 shadow-xl overflow-hidden flex flex-col justify-center items-center text-white text-xl md:text-xl font-bold gap-6 rounded-xl md:w-[50%] text-center p-4 relative cursor-none'
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseEnter={() => setIsShowed(true)}
      onMouseLeave={() => setIsShowed(false)}
    >
      <h2 className='float-around-1 max-w-xl'>&quot;Coming together is a beginning. Keeping together is progress. Working together is success.&quot;</h2>
      <div className='flex flex-col justify-center items-center gap-2 cursor-none'>
        <button 
          className='flex justify-center items-center border-2 border-white p-2 rounded-2xl shadow-xl hover:scale-90 hover:opacity-90 transition-transform duration-500 ease-in-out w-14'
          onClick={() => router.push("/contact")}
        >
          <PiKeyhole className='transition-transform duration-500 ease-in-out' size={34} />
        </button>
        <h3 className='text-[18px] font-medium'>Let&apos;s connect !</h3>
      </div>

      {isShowed && <MdKey 
        className='absolute top-0 left-0 pointer-events-none transition-none duration-700 ease-out' size={48}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-100%, -50%)`, 
        }} />}
    </div>
  )
}

export default AnimationBoard