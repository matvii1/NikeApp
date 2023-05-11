import { FC } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useAppSelector } from '../app/hooks'
import Button from '../components/Button'
import CardListItem from '../components/CardListItem'
import ListFooterComponent from '../components/ListFooterComponent'
import { getCartProducts } from '../features/cartSlice'

const SchoppingCardScreen: FC = () => {
  const cartProducts = useAppSelector(getCartProducts)

  return (
    <>
      <View style={styles.shoesContainer}>
        <FlatList
          data={cartProducts}
          renderItem={({ item }) => <CardListItem item={item} />}
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
