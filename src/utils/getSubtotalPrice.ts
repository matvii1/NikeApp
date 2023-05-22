import { IProduct } from 'types/IProduct'

export function getSubtotalPrice(products: IProduct[]): number {
  const subtotal = products.reduce((prev, current) => {
    return prev + current.price * current.quantity!
  }, 0)

  return subtotal
}
