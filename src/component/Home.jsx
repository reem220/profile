
import React, { useEffect, useState } from 'react'

function Home() {
    const word=['Reem Salah','Designer','Developer','Freelancer']
    const[wordd,setWordd]=useState(0)
    const[indexword,setIndexword]=useState(0)
    useEffect(()=>{
      const intervalid=setInterval(()=>{
        setWordd((prvIndex)=>(prvIndex +1 )% word.length)
      },3000);
  
  return()=> clearInterval(intervalid);
    },[word.length])
  useEffect(()=>{
    setIndexword(word[wordd]);
  },[wordd,word])

  return (
    <div className=' app flex items-center justify-around p-5 bg-gray-400 ' >
<div className='h-96 text-left flex  w-96 flex-col justify-center p-5 text-gray-800'  >
<h1 className='text-7xl font-bold uppercase my-5   bg-clip-text 
text-transparent bg-gradient-to-r from-gray-600 to-gray-800
'>I'm <span className="word
 bg-clip-text 
text-transparent bg-gradient-to-r from-gray-500 to-gray-800
        " >{indexword}</span>
</h1>
  <p className='capitalize  font-medium'>Designer, Developer, Freelancer</p>
</div>
<div className='img my-10  bg-origin-border p-4 border-8 border-dashed border-gray-800'>
</div>

</div>

  )
}

export default Home