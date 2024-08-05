import React from 'react';
import { useState, useEffect } from 'react';
import FirstEl from './comp/FirstEl'
import Todobox from './comp/Todobox';
function App() {
  const [showfirst, setshowfirst]=useState(true);
  useEffect(()=>{
    const timer=setTimeout(()=>{
      setshowfirst(false)}, 2000);
      return()=>clearTimeout(timer);},[]);
  return (
    <div className="h-screen w-screen bg-purple flex justify-center items-center ">
      
      {showfirst?(<FirstEl></FirstEl>):
      
       <><Todobox> </Todobox></> 
       
      }
      
      
    </div>
  );
}

export default App;
