import React, { useEffect, useState } from 'react'
import { IoTriangleOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";
const TopPage = () => {

// let delay=100
// let text='hello how ara you sir'
// let removing=false
// let array=text.split('')
// const hello=array.pop()
// console.log('text',hello)
//     const [displayedText, setDisplayedText] = useState("");

   
//     let index = 0;
//     // text=text[index].slice(0,-1)
// //  index--;
//     useEffect(() => {
//       const intervalId = setInterval(() => {
//         setDisplayedText((prev) => prev + text[index]);
//         index++;
//         if (index === text.length-1) {
//              clearInterval(intervalId) 
 
//             //  setDisplayedText((prev) => prev + text[index]);
//             //  index++;
//             // if(index===0){

//             //     clearInterval(intervalId)
//             // }
//             }
   
 
        
        


        
//       }, delay);
  
//       return () => clearInterval(intervalId);
//     }, [text, delay,index])
  
// const data=displayedText.slice(0,-1)
// console.log('data',data)

const array=['Hello World','hello how are you sir','i am fine sir','for Your Ideas','for Your Digital Presence','for Your Business']
const [data, setdata] = useState(0);
// console.log('array',data)
const [text, setText] = useState('Hello World');
const [displayText, setDisplayText] = useState('');
const [index, setIndex] = useState(0);
const [isForward, setIsForward] = useState(true);

useEffect(() => {
  const interval = setInterval(() => {
    if (isForward) {
      if (index < text.length) {
        setDisplayText(displayText + text[index]);
        setIndex(index + 1);
      } else {
        setIsForward(false); // Switch to reverse when done
      }
    } else {
      if (index > 0) {
        setDisplayText(displayText.slice(0, -1));
        setIndex(index - 1);
      }else {
            setText(array[data])
            setIsForward(true);
            setdata(data+1)
            if(data===array.length-1){
                // setText(text)
                setdata(0)
            }
      }
    }
  
  }, 100); // Adjust timing here

  return () => clearInterval(interval);
  
}, [index, isForward, displayText, text]);


// let employee=0
let [emp, setemp] = useState(0);
let [project, setproject] = useState(0);
let [client, setclient] = useState(0);
useEffect(()=>{
    const increase=setInterval(()=>{
        if(emp<20){
            emp= emp+1
           setemp(emp)
           console.log('hello sir',emp)
        }
     const pro=   setInterval(() => {
            if(project<900){
                project= project+1
                setproject(project)
            }
        }, 20);
        const clie=   setInterval(() => {
            if(client<700){
                client= client+1
                setclient(client)
            }
        }, 20);
    },100)
},[])

  return (
    <div className='w-screen '>

<div className='w-full flex justify-between '>
<div className='flex justify-center items-center w-1/2 ml-20 relative'>
<img className='absolute -left-20' src="https://wicts.co.in/wp-content/uploads/2020/03/seo.png" alt="" />
<div className='absolute right-0 top-56'>
<IoTriangleOutline className='size-10 text rotate-180   animate-moveAndRotate'/>

</div>
<div className='absolute left-32 top-64'>
<ImCross className=' text text-sm rotate-180   animate-moveAndRotate'/>

</div>
<div className='absolute right-0 bottom-44'>
<ImCross className=' text text-sm rotate-180   animate-moveAndRotate'/>

</div>
<div className='absolute right-32 bottom-20'>
<ImCross className='  rotate-180   animate-moveAndRotate'/>

</div>
<div className='absolute left-44 top-96'>
<IoTriangleOutline className='size-10  text-orange-400 rotate-180   animate-moveAndRotate'/>

</div>


    <div className='h-96 mt-20 min-w-[30rem]'>
    <p className='font-semibold text-lg color'>WELCOME</p>
    <h1 className='font-bold  text-7xl color'>India's No.1  </h1>
    <h1 className='font-bold  text-7xl color'>  Software </h1>
    <h1 className='font-bold  text-7xl color'>  Solution </h1>
    <h1 className='font-bold  text-7xl color'>  Providers </h1>
    <h1 className='font-bold  text-7xl color'> {displayText} </h1>
    
<button className='text-white text-pretty font-bold text-sm flex justify-center items-center w-44 rounded-lg h-14   mt-5  gredient'>WHATSAPP NOW </button>
</div>
</div>
{/* image for wicts  */}

<div className='w-auto  mr-10'>
<div className={`transition-all  w-full  hightone mt-20 flex justify-center 
items-center     rounded-full `}>
    <div className=''>
        <img   className='hightone' src="https://wicts.co.in/wp-content/uploads/2023/04/w.gif" alt="" />
    </div>
  
</div>
</div>
</div>
<div className='  relative '>
    <div className='w-44 -top-36   z-50  absolute'>

    <img className='' src="https://wicts.co.in/wp-content/uploads/2020/03/element_01.png" alt="" />
    </div>

    {/* for div creating  */}
    <div className=' w-full relative'>
        <div className='bg-slate-50 circle rounded-full -left-20 top-5 relative'>
            <div className='absolute bottom-10 left-24'>
                <img src="https://wicts.co.in/wp-content/uploads/2020/03/points_bg.png" alt="" />
            </div>
        </div>
        <div className='absolute w-full top-20'>
<div className='m-auto w-96 text-center  color'>
    <p className=' color'>We Are Experts</p>
    <h1 className='font-bold  text-2xl color'>Best Service For Your Business
    With Our Best Experts</h1>
</div>
{/* divfjhnkdjfuifvrdfjri */}


<div className='w-full flex gap-8 mt-7'>
    <div className='w-64 h-72 ml-28 hover transition-all hover:scale-105 hover:transition-all hover:text-white color   bg-white p-5 rounded-xl shadow-2xl'>
<h1 className=' font-bold text-xl'>Digital Marketing,
    SEO,SMM,PPC,
    SOCAIL MEDIA 
    PRESENCE</h1>
<div className='w-10 h-0.5 rounded mt-1  bg-slate-500' >
    </div>
    <p className=' text-sm font-bold mt-5'>We are INDIA'S NO.1 GOOGLE CERTIFIED Digital Marketing Company</p>
    </div>
    {/* second div  */}
    <div className='w-64 h-64  rounded-xl bg-white p-5 shadow-2xl hover transition-all hover:scale-105 hover:transition-all hover:text-white color'>
<h1 className=' font-bold text-xl'>Mobile Application,
    Development</h1>
<div className='w-10 h-0.5 rounded mt-1  bg-slate-500' >
    </div>
    <p className=' text-sm font-bold mt-5'>We are INDIA'S NO.1 Mobile Application Development Company Which are Deliver till Now 300+ Application Delivery Successfully</p>
    </div>

{/* third div  */}
<div className='w-64 h-64 rounded-xl bg-white p-5 shadow-2xl hover transition-all hover:scale-105 hover:transition-all hover:text-white color'>
<h1 className=' font-bold text-xl'>Digital Marketing,
    SEO,SMM,PPC,
    SOCAIL MEDIA 
    PRESENCE</h1>
<div className='w-10 h-0.5 rounded mt-1  bg-slate-500' >
    </div>
    <p className=' text-sm font-bold mt-5'>We are INDIA'S NO.1 GOOGLE CERTIFIED Digital Marketing Company</p>
    </div>
{/* fourth div  */}
<div className='w-64 h-72 rounded-xl   bg-white p-5 shadow-2xl  hover transition-all hover:scale-105 hover:transition-all hover:text-white color'>
<h1 className=' font-bold text-xl'>Digital Marketing,
    SEO,SMM,PPC,
    SOCAIL MEDIA 
    PRESENCE</h1>
<div className='w-10 h-0.5 rounded mt-1  bg-slate-500' >
    </div>
    <p className=' text-sm font-bold mt-5'>We are INDIA'S NO.1 GOOGLE CERTIFIED Digital Marketing Company</p>
    </div>



</div>

        </div>

    </div>
</div>
<div className='w-full px-20 mt-4'>
    <img src="https://wicts.co.in/wp-content/uploads/2023/04/GettyImages-1365534802-1536x959.jpg" alt="image " />

</div>
{/* button div  */}
<div className='w-full mb-20'>
    <div className='w-fit m-auto color mt-8 text-center'>
<p className='py-2'>PRICING PLANS</p>
<h1 className='font-bold text-4xl'>DIGITAL MARKETING WITH SOCIAL PRESENCE</h1>
<div className='w-64 flex bg-slate-300 h-12 rounded-2xl m-auto mt-4'>
    <div className='bg-orange-600 w-32 rounded-2xl flex items-center justify-center text-white font-bold text-sm'>MONTHALY</div>
    <p className='flex items-center justify-center w-28  font-bold text-sm'>YEARLY</p>
</div>
    </div>

</div>
{/* javascript countetd number div  */}

<div className='w-full px-20 mt-4  color mb-20 flex'>
    <div className='w-2/3'>
<h2 className='font-bold'>Why Choose us</h2>
<p className='mt-4 font-semibold'>At WICTS, we develop Custom Software Solutions based on a range of platforms and technologies, including .Net, J2EE, J2SE, J2ME, PHP, embedded systems & diversifying as per the market requirements.</p>
<p  className='mt-4 font-semibold'>Developers at our Team WICTS have experience of carrying out complex and large scale web applications of various themes. WICTS provides numerous services comprise of Website Development, Mobile Applications, JAVA and .Net Programming, Software Testing, PHP Development, Oracle Microsystems, SEO/Digital Marketing. Our clear perception of the growing requirement of the corporate world in the IT industry, has enabled WICTS to develop programs of specific relevance for the present and the future.</p>
<button className='w-40 hover:border-blue-600 hover:bg-red-500 hover:text-white h-12 rounded mt-10  text-xs border border-red-400'>DISCOVER MORE</button>
</div>
<div className='w-80 flex flex-col items-end gap-16'>


    <div className='w-24 h-24 '>
    <p className='color text-7xl font-semibold relative'> {emp} <sup className='absolute text-red-500 text-2xl -right-1 top-0'>+</sup> </p>
    <p className='mt-2'>EMPLOYEES</p>
    </div>

    <div className='w-24 h-24 '>
    <p className='color text-7xl font-semibold relative'> {project} <sup className='absolute text-red-500 text-2xl  -right-10 top-0'>+</sup> </p>
    <p className='mt-2'>PROJECTS</p>
    </div>

    <div className='w-24 h-24 '>
    <p className='color text-7xl font-semibold relative'> {client} <sup className='absolute text-red-500 text-2xl  -right-10 top-0'>+</sup> </p>
    <p className='mt-2'>CLIENTS</p>
    </div>



    

</div>
</div>
{/* collapsevdfnvjfdbgf */}


    </div>
  )
}

 
export default TopPage