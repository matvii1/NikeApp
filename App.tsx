import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import ProductScreen from './src/screens/ProductScreen'
import ProductDetailsScreen from './src/screens/ProductDetailsScreen'
import SchoppingCardScreen from './src/screens/SchoppingCardScreen'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductScreen /> */}
      {/* <ProductDetailsScreen /> */}
      <SchoppingCardScreen />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
})
