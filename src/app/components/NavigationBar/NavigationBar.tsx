import Link from 'next/link'
import React from 'react'

const NavigationBar = () => {
    return (
        <div className='w-full h-20 bg-gray-900 flex justify-between items-center pl-40 pr-40'>
            <div>
                <p className='font-semibold text-xl cursor-pointer text-white hover:text-orange-400'>LOGO</p>
            </div>
            <ul className='w-fit flex justify-between gap-16'>
                <Link href={"/"}><li className='font-normal text-lg text-white hover:text-orange-400 cursor-pointer'>Home</li></Link>
                <Link href={"/about"}><li className='font-normal text-lg text-white hover:text-orange-400 cursor-pointer'>About</li></Link>
                <Link href={"/projects"}><li className='font-normal text-lg text-white hover:text-orange-400 cursor-pointer'>Projects</li></Link>
                <Link href={"/achievement"}><li className='font-normal text-lg text-white hover:text-orange-400 cursor-pointer'>Achievement</li></Link>
            </ul>
            <button className='w-fit h-fit p-3 rounded-lg bg-transparent border-2 border-orange-400 text-orange-400 flex items-center justify-center text-sm  hover:bg-orange-400 hover:text-white '>Contact Me</button>

        </div>
    )
}

export default NavigationBar