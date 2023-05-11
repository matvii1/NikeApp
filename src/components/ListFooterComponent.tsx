import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ListFooterComponent: FC = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerRow}>
        <Text style={styles.footerText}>Subtotal</Text>
        <Text style={styles.footerText}>$550</Text>
      </View>
      <View style={styles.footerRow}>
        <Text style={styles.footerText}>Delivery</Text>
        <Text style={styles.footerText}>$550</Text>
      </View>
      <View style={styles.footerRow}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.footerText}>$550</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    gap: 5,
    borderColor: 'gainsboro',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    color: 'gray',
  },
  textBold: {
    fontWeight: '500',
    color: 'black',
  },
})

export default ListFooterComponent
