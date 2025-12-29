'use server'
import prisma from '@/src/lib/prisma'

export const getStockBySlug = async (slug: string) => {
  try {
    const product = await prisma.product.findUnique({
      select: {
        inStock: true,
      },
      where: {
        slug,
      },
    })

    if (!product) {
      return 0
    }

    return product?.inStock || 0
  } catch (error) {
    console.log(error)
    return 0
  }
}
