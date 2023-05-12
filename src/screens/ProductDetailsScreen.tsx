import { FC, useState } from 'react'
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import Button from '../components/Button'
import {
  addToCart,
  getCartProducts,
  removeFromCart,
} from '../features/cartSlice'
import { getSelectedProduct } from '../features/productsSlice'
import { IProduct } from '../types/IProduct'

const ProductDetailsScreen: FC = () => {
  const cartProducts = useAppSelector(getCartProducts)
  const selectedProduct = useAppSelector(getSelectedProduct)
  const isAddedToCard = !!cartProducts.find(({ product }) => {
    return product.name === selectedProduct?.name
  })

  const [isAddedToCart, setIsAddedToCart] = useState(isAddedToCard)
  const dispatch = useAppDispatch()
  const windowWidth = useWindowDimensions().width

  const buttonText = isAddedToCart ? 'Remove from cart' : 'Add to cart'

  function addToCard(selectedProduct: IProduct) {
    setIsAddedToCart((prev) => !prev)

    if (!isAddedToCard) {
      dispatch(addToCart(selectedProduct))
    } else {
      dispatch(removeFromCart(selectedProduct))
    }
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
      <Button
        isAddedToCart={isAddedToCart}
        title={buttonText}
        onPress={() => addToCard(selectedProduct)}
      />
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
    marginBottom: 100,
  },
})

export default ProductDetailsScreen
