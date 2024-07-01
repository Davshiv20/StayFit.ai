import React, { useState, useEffect } from 'react';
import Landing from './Pages/Landing';
function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Clean up to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Define the inline style for the dynamic background
  // const backgroundStyle = {
  //   background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, #1cfb, #000000)`,
  // };

  return (
   // <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
   <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"> 
  <Landing />
  </div>
  );
}

export default App;
