import { ProductMobileSlideShow, ProductSlideShow, QuantitySelector, SizeSelector } from '@/src/components'
import { titleFont } from '@/src/config/fonts'
import { initialData } from '@/src/seed/seed'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    slug: string
  }
}

const ProductPage = async ({ params }: Props) => {
  const { slug } = await params
  const product = initialData.products.find(product => product.slug === slug)

  if (!product) return notFound()

  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
      {/*Slideshow*/}
      <div className="col-span-1 md:col-span-2">
        {/*Desktop Slideshow*/}
        <ProductSlideShow title={product.title} images={product.images} className=" hidden md:block" />

        {/*Mobile Slideshow*/}
        <ProductMobileSlideShow title={product.title} images={product.images} className="block md:hidden" />
      </div>

      {/*Details*/}
      <div className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>{product.title}</h1>
        <p className="mb-5 text-lg">${product.price}</p>

        {/*Selector de Tallas*/}
        <SizeSelector selectedSize={product.sizes[0]} availableSizes={product.sizes} />

        {/*Selector de Cantidad*/}
        <QuantitySelector quantity={0} />

        {/*Boton de Agregar al Carrito*/}
        <button className="btn-primary my-5">Agregar al carrito</button>

        {/*Descripcion*/}
        <h3 className="font-bold text-sm">Descripcion</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  )
}

export default ProductPage
