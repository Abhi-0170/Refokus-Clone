import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-40'>
            <div className='basis-1/2'>
                <h1 className='text-[11rem] font-semibold leading-none tracking-tight'>refokus.</h1>
                <div className='ml-3 mt-10'>
                {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map((item, index) => <a key = {index} className='text-xs mr-10 text-zinc-500'>{item}</a>)}
                </div>
            </div>
            <div className='basis-1/2 flex gap-10' >
                <div className='basis-1/3'>
                    <h4 className='text-sm mb-7 text-zinc-500 capitalize'>socials</h4>
                    {["instagram", "twitter(X?)", "LinkedIn"].map((item, index) => <a key = {index} className='text-sm block mt-3 capitalize text-zinc-600'>{item}</a>)}
                </div>
                <div className='basis-1/3'>
                    <h4 className='text-sm mb-7 text-zinc-500 capitalize'>sitemap</h4>
                    {["Home", "work", "Carrers", "Contact"].map((item, index) => <a key = {index} className='text-sm block mt-3 capitalize text-zinc-300'>{item}</a>)}
                </div>
                <div className='basis-1/2 flex flex-col items-end mt-10'>
                    <p className='text-right text-sm text-zinc-300'>Refokus is pioneering digital agency driven by design and empowered by technology.</p>
                    <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" className='p-2 w-502h-5 mt-5 bg-violet-700'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer