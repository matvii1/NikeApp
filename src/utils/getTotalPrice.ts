export function getTotalPrice(
  subtotalPrice: number,
  deliveryPrice: number
): number {
  return subtotalPrice + deliveryPrice
}
