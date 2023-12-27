import React from 'react'

function Aboutme() {
  return (
<div className=' reem flex flex-col flex-wrap justify-center bg-gradient-to-r from-gray-400 from-10% via-gray-200 via-30% to-gray-600 to-90% '>
<div className='rounded-full flex flex-col justify-center text-center p-20 m-5  border border-gray-800 h-90px w-20px
bg-gradient-to-r from-gray-500 from-10% via-sky-200 via-30% to-gray-800 to-90%
'>
<h1 className='text-center font-bold text-5xl p-5   bg-clip-text 
text-transparent bg-gradient-to-r from-gray-300 to-gray-900 '>Do not stop until you are proud of yourself.</h1>
<p className='text-center text-xl  bg-clip-text 
text-transparent bg-gradient-to-r from-gray-800 to-white'>
I specialized in web development as a full stack developer , 
and I work on desiging and developing web applications in an integrated manner.
I have extensive experience in programming and design , 
which allows me to build high-quality and user-friendly applications.
</p>
</div>
<div className=" flex justify-center flex-col p-8 " data-wow-delay="0.9s">
    <div className="mb-4 ">
        <label htmlFor="webDesign" className="block text-gray-900 text-sm font-bold mb-2">Web Design <small className="text-xs">95%</small></label>
        <div className="progress">
            <div>
                <input type="range" className="range form-range w-full px-4"  value="95" disabled />
            </div>
        </div>
    </div>

    <div className="mb-4">
        <label htmlFor="mobileApps" className="block text-gray-900 text-sm font-bold mb-2">Mobile Apps <small className="text-xs">80%</small></label>
        <div className="progress">
            <div >
            <input type="range" class="range w-full  px-4 form-range " value="80" disabled />

            </div> 
        </div>
    </div>

    <div className="mb-4">
        <label htmlFor="htmlCss" className="block text-gray-900 text-90sm font-bold mb-2">HTML5 &amp; CSS3 <small className="text-xs">90%</small></label>
        <div className="progress">
            <div >
                <input type="range" className="range form-range w-full px-4" value="90" disabled />
            </div>
        </div>
    </div>
</div>

















</div>










  )
}

export default Aboutme