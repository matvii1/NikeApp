import { Feather } from '@expo/vector-icons'
import { FC } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ICartItem } from 'types/ICartItem'
import { useAppDispatch } from '../app/hooks'
import { changeQuantity } from '../features/cartSlice'

type Props = {
  product: ICartItem
}

const CardListItem: FC<Props> = ({ product }) => {
  const {
    product: { image, name, sizes },
    quantity,
  } = product
  const dispatch = useAppDispatch()

  function handleDeleteItem(product: ICartItem) {
    dispatch(
      changeQuantity({
        product,
        changeValue: -1,
      })
    )
  }

  function handleAddItem(product: ICartItem) {
    dispatch(
      changeQuantity({
        product,
        changeValue: 1,
      })
    )
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.size}>{sizes.join(', ')}</Text>
        </View>

        <View style={styles.contentFooter}>
          <View style={styles.buttons}>
            <Feather
              name="minus-circle"
              size={24}
              color="gray"
              onPress={() => handleDeleteItem(product)}
            />
            <Text style={styles.quantity}>{quantity}</Text>
            <Feather
              name="plus-circle"
              size={24}
              color="gray"
              onPress={() => handleAddItem(product)}
            />
          </View>
          <Text>${`${product.product.price}`}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 180,
    aspectRatio: 1,
    borderRadius: 5,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  quantity: {},
  buttons: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
  },
  size: {
    fontSize: 12,
    color: 'gray',
    fontStyle: 'italic',
  },
})

export default CardListItem
