import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Titulo Pricing',
    description: 'Esta es la pagina de precios de mis servicios',
    keywords: ['Pricing Page', 'Agustin', 'Informacion']
};



const PricingPage = () => {
    return (
        <>
            <span className='text-7xl'>PricingPage</span>
        </>
    )
}

export default PricingPage