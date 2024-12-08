import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { DishInterface } from '../../../interfaces/Food'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const DishCard:React.FC<{data: DishInterface}> = ({ data }) => {
  return (
    <View style={styles.card}>
        <View style={styles.thumbnail}>
            <Image style={styles.thumbImage} source={require("../../../assets/images/pizza.jpg")}/>
            <Text style={styles.offer}>{data.offer}</Text>
        </View>
        <View style={styles.footer}>
            <Text style={styles.heading}>{data.resName}</Text>
            <View style={{marginTop: 4}}>
                <Text style={styles.subHead}>{data.time} . {data.distance}</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        width: responsiveWidth(38),
        marginRight: 15
    },
    thumbnail: {
        width: '100%',
        height: responsiveHeight(14),
        borderRadius: 18,
        overflow: 'hidden',
        position: 'relative'
    },
    offer: {
        position: 'absolute',
        color: '#fff',
        fontWeight: '800',
        bottom: 10,
        left: 10,
        fontSize: 15
    },
    thumbImage: {
        width: '100%',
        height: '100%'
    },
    footer: {
        marginTop: responsiveHeight(2)
    },
    heading:{
        fontSize: 15,
        fontWeight: 600
    },
    subHead: {
        color: 'green',
        fontWeight: '600'
    }
})

export default DishCard