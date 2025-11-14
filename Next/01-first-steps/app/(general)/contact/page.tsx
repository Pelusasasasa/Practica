import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Titulo Contacto',
    description: 'SEO Contact',
    keywords: ['Contact Page', 'Agustin', 'Informacion']
};


const ContactPage = () => {
    return (
        <>
            <span className='text-7xl'>ContactPage</span>
        </>
    )
}

export default ContactPage