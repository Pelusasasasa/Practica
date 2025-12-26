import { getProductsPaginationWithImages } from '@/src/actions'
import { Pagination, ProductGrid, Title } from '@/src/components'
import { redirect } from 'next/navigation'

interface Props {
  searchParams: {
    page: string
  }
}

export default async function Home({ searchParams }: Props) {
  const page = Number((await searchParams).page) || 1

  const { products, currentPage, totalPages } = await getProductsPaginationWithImages({ page })

  if (products.length === 0) {
    redirect('/')
  }

  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />

      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </>
  )
}
