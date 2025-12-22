import { QuantitySelector, Title } from '@/src/components'
import { initialData } from '@/src/seed/seed'
import Image from 'next/image'
import Link from 'next/link'

const productsInCart = [initialData.products[0], initialData.products[1], initialData.products[2]]

const CartPage = () => {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar Orden" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/*Carrito*/}
          <div className="flex flex-col mt-5">
            <span className="text-xl ">Ajustar Elementos</span>
            <Link href="/cart" className="underline mb-5">
              Editar Carrito
            </Link>

            {/*Items*/}
            <div className="flex flex-col gap-5">
              {productsInCart.map(product => (
                <div key={product.slug} className="flex">
                  <Image
                    src={`/products/${product.images[0]}`}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="mr-5 rounded"
                    style={{ width: '100px', height: '100px', objectFit: 'contain' }}
                  />

                  <div>
                    <p>{product.title}</p>
                    <p>${product.price} x 3</p>
                    <p className="font-bold">Subtotal: ${product.price * 3}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*CheckOut - Resumen de orden*/}

          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-xl font-bold mb-2">Direccion de entrega</h2>

            <div className="mb-10">
              <p className="text-xl">Fernando Herrera</p>
              <p>Avenida Siempre viva 123</p>
              <p>Col. Centro</p>
              <p>Alcadia de los Reyes</p>
              <p>Ciudad de Mexico</p>
              <p>CP 123123</p>
              <p>3456445977</p>
            </div>

            {/* */}
            <div className="w-full h-0.5 rounded bg-gra-200 mb-10" />

            <h2 className="text-2xl mb-2">Resumen de Orden</h2>

            <div className="grid grid-cols-2 gap-2">
              <span>No. Productos</span>
              <span className="text-right">3 Articulos</span>
              <span>Subtotal</span>
              <span className="text-right">$1200</span>
              <span>Impuestos (15%)</span>
              <span className="text-right">$ 100</span>
              <span className="text-2xl mt-5">Total</span>
              <span className="text-right text-2xl mt-5">$1300</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <Link href="/orders/123" className="flex btn-primary justify-center">
                Colocar orden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
