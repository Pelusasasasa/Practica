'use client'
import { useState } from 'react'

import { QuantitySelector, SizeSelector } from '@/src/components'

import { CartProduct, Product, Size } from '@/src/interface'
import { useCartStore } from '@/src/store'

interface Props {
  product: Product
}

export const AddToCart = ({ product }: Props) => {
  const addProductCart = useCartStore(state => state.addProductCart)

  const [size, setSize] = useState<Size | undefined>()
  const [quantity, setQuantity] = useState(1)

  const [posted, setPosted] = useState(false)

  const addToCart = () => {
    setPosted(true)
    if (!size) {
      return
    }

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      image: product.images[0],
      size,
      quantity,
    }
    addProductCart(cartProduct)
    setPosted(false)
    setSize(undefined)
    setQuantity(1)
  }

  return (
    <>
      {posted && !size && <span className="mt-2 text-red-500">Debe de seleccionar una talla!</span>}
      {/*Selector de Tallas*/}
      <SizeSelector onSizeChange={setSize} selectedSize={size} availableSizes={product.sizes} />

      {/*Selector de Cantidad*/}
      <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />

      {/*Boton de Agregar al Carrito*/}
      <button onClick={addToCart} className="btn-primary my-5">
        Agregar al carrito
      </button>
    </>
  )
}
