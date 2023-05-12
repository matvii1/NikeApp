import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Pressable, Text } from 'react-native'
import { useAppSelector } from '../app/hooks'
import { getCartProducts } from '../features/cartSlice'

export default function HeaderRight() {
  const navigation = useNavigation<StackNavigationProp<{}>>()
  const cartProducts = useAppSelector(getCartProducts)

  return (
    <Pressable
      style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
      onPress={() => navigation.navigate('Cart')}
    >
      <FontAwesome5 name="shopping-cart" size={20} color="black" />
      <Text style={{ fontSize: 18 }}>{cartProducts.length || ''}</Text>
    </Pressable>
  )
}
