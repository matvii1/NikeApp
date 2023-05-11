import products from 'data/products.json'
import { FC } from 'react'
import { FlatList, Image, StyleSheet, View } from 'react-native'

const ProductScreen: FC = () => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
      )}
      numColumns={2}
    />
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    width: '50%',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
})

export default ProductScreen
