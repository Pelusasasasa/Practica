export const revalidate = 60

import { getProductsPaginationWithImages } from '@/src/actions'
import { Pagination, ProductGrid, Title } from '@/src/components'
import { Gender } from '@/src/generated/prisma/enums'
import { redirect } from 'next/navigation'

interface Props {
  params: {
    gender: string
  }
  searchParams: {
    page?: string
  }
}

const CategoryPage = async ({ params, searchParams }: Props) => {
  const { gender } = await params

  const { products, totalPages } = await getProductsPaginationWithImages({ gender: gender as Gender, page: Number(searchParams.page) })

  if (products.length === 0) {
    redirect(`/gender/${gender}`)
  }

  return (
    <>
      <Title title={'Tienda'} subtitle={`Vestimenta para ${gender}`} className="mb-2" />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  )
}

export default CategoryPage
