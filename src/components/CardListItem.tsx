import { Feather } from '@expo/vector-icons'
import { FC, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ICartItem } from 'types/ICartItem'
import { IProduct } from 'types/IProduct'

type Props = {
  item: IProduct
}

const CardListItem: FC<Props> = ({ item }) => {


  const [counter, setCounter] = useState(quantity)

  function handleDelete() {
    setCounter((prev) => {
      return prev > 1 ? prev - 1 : 1
    })
  }

  function handleAdd() {
    setCounter((prev) => {
      return prev < 11 ? prev + 1 : 11
    })
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.size}>{size}</Text>
        </View>

        <View style={styles.contentFooter}>
          <View style={styles.buttons}>
            <Feather
              name="minus-circle"
              size={24}
              color="gray"
              onPress={handleDelete}
            />
            <Text style={styles.quantity}>{counter}</Text>
            <Feather
              name="plus-circle"
              size={24}
              color="gray"
              onPress={handleAdd}
            />
          </View>
          <Text>$320.00</Text>
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