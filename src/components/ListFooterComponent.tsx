import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useAppSelector } from '../app/hooks'
import {
  getCartProducts,
  getDeliveryFee,
  getFreeDeliveryFrom,
} from '../features/cartSlice'
import { getDeliveryPrice } from '../utils/getDeliveryPrice'
import { getSubtotalPrice } from '../utils/getSubtotalPrice'
import { getTotalPrice } from '../utils/getTotalPrice'

const ListFooterComponent: FC = () => {
  const cartProducts = useAppSelector(getCartProducts)
  const deliveryFee = useAppSelector(getDeliveryFee)
  const freeDeliveryFrom = useAppSelector(getFreeDeliveryFrom)

  const subtotalPrice = getSubtotalPrice(cartProducts)
  const deliveryPrice = getDeliveryPrice(
    subtotalPrice,
    deliveryFee,
    freeDeliveryFrom
  )
  const deliveryPriceText = deliveryPrice ? `$${deliveryPrice}` : 'Free'
  const total = getTotalPrice(subtotalPrice, deliveryPrice)

  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerRow}>
        <Text style={styles.footerText}>Subtotal</Text>
        <Text style={styles.footerText}>${subtotalPrice}</Text>
      </View>
      <View style={styles.footerRow}>
        <Text style={styles.footerText}>Delivery</Text>
        <Text style={styles.footerText}>{deliveryPriceText}</Text>
      </View>
      <View style={styles.footerRow}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.footerText}>${total}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    gap: 5,
    borderColor: 'gainsboro',
    marginBottom: 100,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    color: 'gray',
  },
  textBold: {
    fontWeight: '500',
    color: 'black',
  },
})

export default ListFooterComponent
