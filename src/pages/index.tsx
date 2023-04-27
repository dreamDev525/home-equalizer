import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const router = useRouter()
  return (
    <div className='relative min-h-screen max-w-[640px] mx-auto bg-primary'>
      <img src='/img/logo-white.png'className='absolute w-96 top-36 left-1/2 transform -translate-x-1/2'/>
      <div className='absolute bottom-1/4 text-center w-full'>
        <span className='block text-2xl mb-12 text-white opacity-80 select-none'>
          Unbiased Home Appraisals
        </span>
        <span className='text-md font-semibold bg-white text-primary py-4 px-20 rounded-full cursor-pointer select-none hover:opacity-90' onClick={()=>router.push('/login')}>
          Get an Appraisal
        </span>
      </div>
    </div>
  )
}