import { FC } from 'react'
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native'
import { IProduct } from 'types/IProduct'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import Button from '../components/Button'
import { addToCart } from '../features/cartSlice'
import { getSelectedProduct } from '../features/productsSlice'

const ProductDetailsScreen: FC = () => {
  const dispatch = useAppDispatch()
  const selectedProduct = useAppSelector(getSelectedProduct)
  const windowWidth = useWindowDimensions().width

  function addToCard(selectedProduct: IProduct) {
    dispatch(addToCart(selectedProduct))
  }

  if (!selectedProduct) {
    return <Text>Something went wrong</Text>
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <FlatList
          data={selectedProduct.images}
          renderItem={({ item: image }) => (
            <Image
              source={{ uri: image }}
              style={{ ...styles.image, width: windowWidth }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View>
          <Text style={styles.title}>{selectedProduct.name}</Text>
          <Text style={styles.price}>${selectedProduct.price}</Text>
          <Text style={styles.desciption}>{selectedProduct.description}</Text>
        </View>
      </ScrollView>
      <Button title="Add to cart" onPress={() => addToCard(selectedProduct)} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  image: {
    aspectRatio: 1,
  },
  title: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
  },
  desciption: {
    fontSize: 18,
    marginVertical: 10,
    lineHeight: 20,
    fontWeight: '300',
  },
})

export default ProductDetailsScreen
