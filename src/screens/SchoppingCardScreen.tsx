import { FC } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useAppSelector } from '../app/hooks'
import Button from '../components/Button'
import CardListItem from '../components/CardListItem'
import ListFooterComponent from '../components/ListFooterComponent'
import { getCartProducts } from '../features/cartSlice'
import EmptyCartScreen from './EmptyCartScreen'

const SchoppingCardScreen: FC = () => {
  const cartProducts = useAppSelector(getCartProducts)

  if (!cartProducts.length) {
    return <EmptyCartScreen />
  }

  return (
    <>
      <View style={styles.shoesContainer}>
        <FlatList
          data={cartProducts}
          renderItem={({ item }) => <CardListItem product={item} />}
          ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
          ListFooterComponent={ListFooterComponent}
        />
      </View>
      <Button title="Check out" />
    </>
  )
}

const styles = StyleSheet.create({
  shoesContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
})

export default SchoppingCardScreen
