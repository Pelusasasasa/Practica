import { ProductGrid, Title } from '@/src/components'
import { initialData } from '@/src/seed/seed'


interface Props {
  params: {
    id: string
  }
};

const products = initialData.products

const CategoryPage = async ({ params }: Props) => {
  const { id } = await params;
  const subTitle = id === 'women' ? 'Mujeres' : id === 'men' ? 'Hombres' : id === 'kids' ? 'Niños' : 'Todos'
  
  const productosFiltrados = products.filter(product => product.gender === id)

  //if (id === 'kids') notFound()

  return <>
    <Title title={'Tienda'} subtitle={`Vestimenta para ${subTitle}`} className='mb-2'/>
    <ProductGrid products={productosFiltrados}/>
  </>
}

export default CategoryPage
