import React from 'react';
import Image from "next/legacy/image";
import { signIn } from "next-auth/react"


function Login() {
  return (
    <div className='grid place-items-center'>
      <Image src= "https://links.papareact.com/t4i" 
            width={400}
            height={400}
            objectFit="contain"/>

        <h1 onClick={() => signIn()} className='flex items-center
        p-4
        bg-blue-500 
        rounded-full
        cursor-pointer 
        hover:bg-blue-200
        active:border-b-2 
        active:border-blue-500 group
        text-white'> Login with Facebook</h1>


    </div>
  )
}

export default Login
