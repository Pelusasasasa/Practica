import { CartProduct } from '@/src/interface'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
  cart: CartProduct[]

  getTotalItems: () => number
  addProductCart: (product: CartProduct) => void
  //UpdateQuantity
  //RemoveProduct
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],

      //Methods
      getTotalItems: () => {
        const { cart } = get()
        return cart.reduce((total, item) => total + item.quantity, 0)
      },

      addProductCart: (product: CartProduct) => {
        const { cart } = get()

        //1. Reviser si el producto existe e el carrtio con la talla
        const productInCart = cart.some(p => p.id === product.id && p.size === product.size)

        if (!productInCart) {
          set({ cart: [...cart, product] })
          return
        }

        //2. Si existe, actualizar la cantidad
        const updateCartProducts = cart.map(item => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity: item.quantity + product.quantity }
          }

          return item
        })

        set({ cart: updateCartProducts })
      },
    }),
    { name: 'shopping-cart' }
  )
)
