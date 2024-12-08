import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const DishSimpleCard:React.FC<{data: string}> = ({data}) => {
  return (
    <View style={styles.card}>
        <Image style={styles.thumbnail} source={require('../../../assets/images/pizza2.png')}/>
        <Text style={styles.label}>{data}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {

    },
    thumbnail: {
        width: 115,
        height: 100
    },
    label: {
        alignSelf: 'center',
        fontSize: 15
    }
})
export default DishSimpleCard