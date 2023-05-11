import { FC } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

type Props = {
  onPress?: () => void
  title: string
}

const Button: FC<Props> = ({ onPress, title }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.button__text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
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

export default Button
