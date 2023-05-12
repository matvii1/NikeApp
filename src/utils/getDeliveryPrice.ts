export function getDeliveryPrice(
  subtotal: number,
  deliveryFee: number,
  freeDeliveryFrom: number
): number {
  return subtotal <= freeDeliveryFrom ? deliveryFee : 0
}
