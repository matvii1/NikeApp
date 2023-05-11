import { FC } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import CardListItem from '../components/CardListItem'
import ListFooterComponent from '../components/ListFooterComponent'
import data from '../data/cart'

const SchoppingCardScreen: FC = () => {
  return (
    <>
      <View style={styles.shoesContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <CardListItem item={item} />}
          ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
          ListFooterComponent={ListFooterComponent}
        />
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.button__text}>Checkout</Text>
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  shoesContainer: {},
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

export default SchoppingCardScreen
