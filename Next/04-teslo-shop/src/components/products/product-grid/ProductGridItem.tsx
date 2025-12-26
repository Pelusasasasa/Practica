'use client'
import { Product } from '@/src/interface'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface Props {
  product: Product
}

export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.productImage[0].url)

  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link href={`/product/${product.slug}`}>
        <Image
          onMouseEnter={() => setDisplayImage(product.productImage[1].url)}
          onMouseLeave={() => setDisplayImage(product.productImage[0].url)}
          src={`/products/${displayImage}`}
          alt={product.title}
          width={500}
          height={500}
          className="w-full object-cover rounded"
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link className="hover:text-blue-600" href={`/products/${product.slug}`}>
          {product.title}
        </Link>
        <span className="font-bold">${product.price}</span>
      </div>
    </div>
  )
}
