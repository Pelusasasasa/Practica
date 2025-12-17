import { notFound } from 'next/navigation'

interface Props {
  params: {
    id: string
  }
}

const CategoryPage = async ({ params }: Props) => {
  const { id } = await params

  if (id === 'kids') notFound()

  return <div>CategoryPage {id}</div>
}

export default CategoryPage
