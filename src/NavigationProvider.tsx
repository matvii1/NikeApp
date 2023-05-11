import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'
import HeaderRight from './components/HeaderRight'
import ProductDetailsScreen from './screens/ProductDetailsScreen'
import ProductScreen from './screens/ProductScreen'
import SchoppingCardScreen from './screens/SchoppingCardScreen'

const Stack = createNativeStackNavigator()

const NavigationProvider: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: 'white',
          },
        }}
      >
        <Stack.Screen
          name="Products"
          component={ProductScreen}
          options={{
            headerRight: HeaderRight,
          }}
        />
        <Stack.Screen name="Cart" component={SchoppingCardScreen} />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationProvider
