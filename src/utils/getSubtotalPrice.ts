import { ICartItem } from '../types/ICartItem'

export function getSubtotalPrice(products: ICartItem[]): number {
  const subtotal = products.reduce((prev, current) => {
    return prev + current.product.price * current.quantity
  }, 0)

	return subtotal
}
