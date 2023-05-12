import { FC } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

type Props = {
  onPress?: () => void
  title: string
  isAddedToCart?: boolean
}

const Button: FC<Props> = ({ onPress, title, isAddedToCart }) => {
  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor: !isAddedToCart ? '#ef7911' : '#8F490B',
        },
      ]}
      onPress={onPress}
    >
      <Text style={styles.button__text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
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

export default Button
