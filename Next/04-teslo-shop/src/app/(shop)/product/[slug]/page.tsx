export const revalidate = 604800

import { getProductBySlug } from '@/src/actions'
import { ProductMobileSlideShow, ProductSlideShow, QuantitySelector, SizeSelector } from '@/src/components'
import { StockLabel } from '@/src/components/product/stock-label/StockLabel'
import { titleFont } from '@/src/config/fonts'
import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { AddToCart } from './ui/AddToCart'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const slug = (await params).slug

  // fetch post information
  const product = await getProductBySlug(slug)

  if (!product) return notFound()

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [`/products/${product?.images[1]}`],
    },
  }
}

const ProductPage = async ({ params }: Props) => {
  const { slug } = await params
  const product = await getProductBySlug(slug)

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
        <StockLabel slug={product.slug} />
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>{product.title}</h1>
        <p className="mb-5 text-lg">${product.price}</p>

        <AddToCart product={product} />

        {/*Descripcion*/}
        <h3 className="font-bold text-sm">Descripcion</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  )
}

export default ProductPage
