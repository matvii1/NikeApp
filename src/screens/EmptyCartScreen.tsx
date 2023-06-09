import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const EmptyCartScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your cart is empty</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
})

export default EmptyCartScreen
