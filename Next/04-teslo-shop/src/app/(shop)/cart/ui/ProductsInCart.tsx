'use client'

import { QuantitySelector } from '@/src/components'
import { useCartStore } from '@/src/store'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const ProductsInCart = () => {
  const { updateQuantity, removeProduct } = useCartStore(state => state)
  const [loaded, setLoaded] = useState<boolean>(false)
  const productsInCart = useCartStore(state => state.cart)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) return <div>Cargando...</div>

  return (
    <>
      {productsInCart.map(product => (
        <div key={product.slug + product.size} className="flex">
          <Image
            src={`/products/${product.image}`}
            alt={product.title}
            width={100}
            height={100}
            className="mr-5 rounded"
            style={{ width: '100px', height: '100px', objectFit: 'contain' }}
          />

          <div>
            <Link href={`/product/${product.slug}`} className="hover:underline cursor-pointer">
              <p>
                {product.size} - {product.title}
              </p>
            </Link>
            <p>${product.price}</p>
            <QuantitySelector onQuantityChange={value => updateQuantity(product, value)} quantity={product.quantity} />

            <button className="underline mt-3 cursor-pointer" onClick={() => removeProduct(product)}>
              Remover
            </button>
          </div>
        </div>
      ))}
    </>
  )
}
