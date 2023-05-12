import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { FC } from 'react'
import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native'
import { IProduct } from 'types/IProduct'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getProducts, setSelectedProduct } from '../features/productsSlice'

const numColumns = 2
const gap = 5

const ProductScreen: FC = () => {
  const products = useAppSelector(getProducts)
  const dispatch = useAppDispatch()

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>()

  function navigate(item: IProduct) {
    dispatch(setSelectedProduct(item))

    navigation.navigate('Product Details')
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigate(item)}
            style={styles.itemContainer}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
          </Pressable>
        )}
        contentContainerStyle={{ gap }}
        columnWrapperStyle={{ gap }}
        numColumns={numColumns}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    width: '50%',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
})

export default ProductScreen
