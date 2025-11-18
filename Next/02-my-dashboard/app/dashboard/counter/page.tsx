
import { CartCounter } from "@/app/shopping-cart"

export const metadata = {
    title: 'Shopping Cart',
    description: 'Un simple contador'
}

const CounterPage = () => {

    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <span>Productos en el carrito</span>

            <CartCounter value={20} />
        </div>
    )
}

export default CounterPage