import { Title } from '@/src/components'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ProductsInCart } from './ui/ProductsInCart'
import { CheckOutCart } from './ui/CheckOutCart'

const CartPage = () => {
  //if (productsInCart.length === 0) redirect('/empty')

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/*Carrito*/}
          <div className="flex flex-col mt-5">
            <span className="text-xl ">Agregar Mas Items</span>
            <Link href="/" className="underline mb-5">
              Continua Comprando
            </Link>

            {/*Items*/}
            <div className="flex flex-col gap-5">
              <ProductsInCart />
            </div>
          </div>

          {/*CheckOut - Resumen de orden*/}

          <CheckOutCart />
        </div>
      </div>
    </div>
  )
}

export default CartPage
