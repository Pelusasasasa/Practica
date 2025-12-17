import { titleFont } from '@/src/config/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const PageNotFound = () => {
  return (
    <div className=" flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5 ">
        <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>
        <p className="font-semibold text-xl">Whoops! Lo sentimos mucho.</p>
        <p className="font-light ">
          <span>Puedes regresar a </span>
          <Link href="/" className="font-normal underline transition-all text-xl text-blue-500">
            Inicio
          </Link>
        </p>
      </div>

      <div className="px-5 mx-5 ">
        <Image src="/imgs/starman_750x750.png" alt="Starman" width={750} height={750} className="p-5 sm:p-0" />
      </div>
    </div>
  )
}
