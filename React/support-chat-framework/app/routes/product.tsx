import React from 'react'
import type { Route } from './+types/product'

export async function loader({params}: Route.LoaderArgs){
    const { name = '' } = params;

    return {
        name: name.toUpperCase()
    }
};

const ProductPage = ({loaderData}: Route.ComponentProps) => {
    const { name } = loaderData
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 py-12 px-4 rounded-lg shadow-md">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Detalles del Producto</h1>
      <div className="bg-white rounded-md shadow p-8 w-full max-w-md flex flex-col items-center space-y-6">
        <span className="text-lg text-gray-600">Nombre del producto:</span>
        <span className="text-2xl font-semibold text-blue-700">{name}</span>
      </div>
    </div>
  )
}


export default ProductPage