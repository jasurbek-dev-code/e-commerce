"use client"

import { ProductType } from '@/interfaces'
import Image from 'next/image'
import React, { useState } from 'react'


interface CustomeImageProps{
    product:ProductType,
    fill?:boolean
}
export default function CustomeImage({product,fill}:CustomeImageProps) {
    const [isLoading, setisLoading] = useState(true)
  return (
    <>
      {fill ? (
        <Image
          src={product.image}
          alt={product.title}
          fill
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          onLoadingComplete={() => setisLoading(false)}
        />
      ) : (
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={1000}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          onLoadingComplete={() => setisLoading(false)}
        />
      )}
    </>
  );
}
