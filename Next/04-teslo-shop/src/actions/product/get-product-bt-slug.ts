'use server'

import prisma from '@/src/lib/prisma'

export const getProductBySlug = async (slug: string) => {
  try {
    const product = await prisma.product.findUnique({
      include: {
        productImage: {
          select: {
            url: true,
          },
        },
      },
      where: {
        slug,
      },
    })

    if (!product) {
      throw new Error('Producto no encontrado')
    }

    return {
      ...product,
      images: product.productImage.map(image => image.url),
    }
  } catch (error) {
    throw new Error('Error al obtener el producto por slug')
  }
}
