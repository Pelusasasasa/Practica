import prisma from '../lib/prisma'
import { initialData } from './seed'

//Borrar Registros Previos
async function main() {
  await prisma.user.deleteMany()
  await prisma.productImage.deleteMany()
  await prisma.product.deleteMany()
  await prisma.category.deleteMany()

  const { users, categories } = initialData

  await prisma.user.createMany({ data: users })

  //Crear Registros
  const categorias = categories.map(name => ({ name }))

  await prisma.category.createMany({ data: categorias })

  const categoriasDB = await prisma.category.findMany()

  const categoriesMap = categoriasDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id
    return map
  }, {} as Record<string, string>)

  const products = initialData.products

  products.forEach(async product => {
    const { type, images, ...rest } = product

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type],
      },
    })

    const imagesData = images.map(image => ({ url: image, productId: dbProduct.id }))

    await prisma.productImage.createMany({
      data: imagesData,
    })
  })

  console.log(`Seed ejecutado correctamente`)
}

;(() => {
  main()
})()
