'use server'

import { Gender } from '@/src/generated/prisma/enums'
import prisma from '@/src/lib/prisma'

interface PaginationOptions {
  page?: number
  take?: number
  gender?: Gender
}

export const getProductsPaginationWithImages = async ({ page = 1, take = 12, gender }: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1
  if (page < 1) page = 1

  try {
    //1. Obtener los productos
    const products = await prisma.product.findMany({
      take: take,
      skip: (page - 1) * take,
      include: {
        productImage: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
      where: {
        gender: gender,
      },
    })

    //2. Obtener el total de  paginas
    const totalCount = await prisma.product.count({
      where: {
        gender: gender,
      },
    })
    const totalPages = Math.ceil(totalCount / take)

    return {
      currentPage: page,
      totalPages,
      products: products.map(product => ({
        ...product,
        images: product.productImage.map(image => image.url),
      })),
    }
  } catch (error) {
    console.log(error)
    throw new Error('No se pudo cargar los productos')
  }
}
