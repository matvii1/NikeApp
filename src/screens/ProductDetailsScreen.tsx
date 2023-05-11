import { FC } from 'react'
import {
  Alert,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native'
import products from 'data/products.json'

type Props = {}

const ProductDetailsScreen: FC<Props> = () => {
  const product = products[0]
  const windowWidth = useWindowDimensions().width

  function addToCard() {
    Alert.alert('Success', 'Item has been added to the card')
  }

  return (
    <>
      <ScrollView>
        <FlatList
          data={product.images}
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
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.desciption}>{product.description}</Text>
        </View>
      </ScrollView>
      <Pressable onPress={addToCard} style={styles.button}>
        <Text style={styles.button__text}>Add to card</Text>
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
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
  button: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#e47911',
    padding: 15,
    alignSelf: 'center',
    width: '90%',
    alignItems: 'center',
    borderRadius: 40,
  },
  button__text: {
    color: 'white',
    fontSize: 16,
  },
})

export default ProductDetailsScreen
