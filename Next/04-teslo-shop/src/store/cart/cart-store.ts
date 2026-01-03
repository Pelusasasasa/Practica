import { CartProduct } from '@/src/interface'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
  cart: CartProduct[]

  getTotalItems: () => number
  getSummaryInformation: () => {
    subTotal: number
    taxRate: number
    subTotalTaxed: number
    itemsInCart: number
  }
  addProductCart: (product: CartProduct) => void
  updateQuantity: (product: CartProduct, quantity: number) => void
  removeProduct: (product: CartProduct) => void
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

      getSummaryInformation: () => {
        const { cart } = get()

        const subTotal = cart.reduce((total, product) => total + product.quantity * product.price, 0)
        const taxRate = subTotal * 0.15
        const subTotalTaxed = subTotal + taxRate
        const itemsInCart = cart.reduce((total, item) => total + item.quantity, 0)

        return {
          subTotal,
          taxRate,
          subTotalTaxed,
          itemsInCart,
        }
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
      updateQuantity: (product: CartProduct, quantity: number) => {
        const { cart } = get()

        const productInCart = cart.some(p => p.id === product.id && p.size === product.size)

        if (!productInCart) return

        const updateCartProducts = cart.map(item => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity }
          }

          return item
        })

        set({ cart: updateCartProducts })
      },
      removeProduct: (product: CartProduct) => {
        const { cart } = get()

        const updateCartProducts = cart.filter(item => item.id !== product.id || item.size !== product.size)

        set({ cart: updateCartProducts })
      },
    }),
    { name: 'shopping-cart' }
  )
)
