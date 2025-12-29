'use client'

import { getStockBySlug } from '@/src/actions'
import { useEffect, useState } from 'react'

export const StockLabel = ({ slug }: { slug: string }) => {
  const [inStock, setInStock] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    getStock()
  }, [slug])

  const getStock = async () => {
    setIsLoading(true)
    const stock = await getStockBySlug(slug)
    setInStock(stock)
    setIsLoading(false)
  }

  return (
    <>
      {!isLoading && <p className="mb-5 text-lg">Stock: {inStock}</p>}
      {isLoading && <p className={`mb-5 text-lg animate-pulse bg-gray-200`}>&nbsp;</p>}
    </>
  )
}
