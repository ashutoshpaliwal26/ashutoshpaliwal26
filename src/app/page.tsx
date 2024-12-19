'use client'

import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import profilePic from '@/public/Profilepic2.jpg'
import Image from "next/image"

const Home = () => {
  return (
    <>
      <div>
        <section className='pl-40 pr-40 w-full h-4/5 flex pt-28'>
          <div className='w-1/2 h-full flex items-start justify-center flex-col gap-2'>
            <p className="text-xl font-semibold text-gray-500 animate-load-text">Hi I am</p>
            <p className="text-2xl font-bold text-gray-400 animate-load-text">Ashutosh Paliwal</p>
            <p className="text-6xl font-bold text-orange-500 pt-2 pb-2 animate-load-text">Full Stack Developer</p>
            <div className="w-full h-fit pt-5 pb-5 flex gap-6 animate-load-text delay-500">
              <div className="transition ease-in-out w-10 h-10 rounded-full border cursor-pointer border-gray-500 hover:scale-110 hover:border-gray-400 hover:duration-300 hover:text-gray-400 animate-load-btn text-gray-400 flex justify-center items-center text-lg"><Link href=""><Twitter /></Link></div>
              <div className="transition ease-in-out w-10 h-10 rounded-full border cursor-pointer border-gray-500 hover:scale-110 hover:border-gray-400 hover:duration-300 hover:text-gray-400 animate-load-btn text-gray-400 flex justify-center items-center text-lg hover:delay-0"><Link href=""><Github /></Link></div>
              <div className="transition ease-in-out w-10 h-10 rounded-full border cursor-pointer border-gray-500 hover:scale-110 hover:border-gray-400 hover:duration-300 hover:text-gray-400 animate-load-btn text-gray-400 flex justify-center items-center text-lg hover:delay-0"><Link href=""><Linkedin /></Link></div>
            </div>
            <button className='hover:scale110 w-fit h-fit p-3 rounded-lg bg-transparent border-2 border-orange-400 text-orange-400 flex items-center justify-center text-sm  hover:bg-orange-600 hover:text-white animate-load-text delay-700'>Contact Me</button>
          </div>
          <div className='w-1/2 h-full flex justify-end'>
            <div className="border-2 p-2 border-orange-600 w-96 h-96 rounded-full animate-load-text duration-1000">
              <div className="border rounded-full w-full h-full object-contain">
                <Image className="border rounded-full w-full h-full object-contain" alt="Profile Pic" style={{ overflow: "hidden" }} src={profilePic} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home