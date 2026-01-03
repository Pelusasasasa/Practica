'use client'
import { useCartStore } from '@/src/store'
import { currencyFormat } from '@/src/utils'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const CheckOutCart = () => {
  const { getSummaryInformation } = useCartStore(state => state)
  const [loaded, setLoaded] = useState<boolean>(false)

  const { subTotal, taxRate, subTotalTaxed, itemsInCart } = getSummaryInformation()

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) return <div>Cargando...</div>
  return (
    <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
      <h2 className="text-2xl mb-2">Resumen de Orden</h2>

      <div className="grid grid-cols-2 gap-2">
        <span>No. Productos</span>
        <span className="text-right">{itemsInCart} Articulos</span>
        <span>Subtotal</span>
        <span className="text-right">${currencyFormat(subTotal)}</span>
        <span>Impuestos (15%)</span>
        <span className="text-right">$ {currencyFormat(taxRate)}</span>
        <span className="text-2xl mt-5">Total</span>
        <span className="text-right text-2xl mt-5">${currencyFormat(subTotalTaxed)}</span>
      </div>

      <div className="mt-5 mb-2 w-full">
        <Link href="/checkout/address" className="flex btn-primary justify-center">
          Proceder al Checkout
        </Link>
      </div>
    </div>
  )
}
