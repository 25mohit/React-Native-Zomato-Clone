import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { MainDishInterface } from '../../../interfaces/Food'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const DishMainCard:React.FC<{data: MainDishInterface}> = ({ data }) => {

  return (
    <View style={styles.card}>
        <View style={styles.head}>
            <Image style={styles.img} source={require("../../../assets/images/kulcha.jpg")}/>
            <Text style={styles.stats}>26 mins . 2.5km</Text>
        </View>
        <View style={styles.container}>
            <View style={{justifyContent: 'space-between', marginTop: 6, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.heading}>{data.resName}</Text>
                <View style={styles.chip}>
                    <Text style={styles.chipHead}>{data.rating}</Text>
                    <Image style={{width: 12, height: 12, marginLeft: 3}} source={require("../../../assets/images/star.png")}/>
                </View>
            </View>
            <Text style={styles.label}>{data.type} . {data.cusine} . {data.price}</Text>
            <View style={styles.seperator}></View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 6}}>
                <Image style={styles.offer} source={require("../../../assets/images/offer.webp")}/>
                <Text>{data.offer}</Text>
            </View>
        </View>
    </View>
  )
}
const borderRadius = 15

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: borderRadius,
        width: '100%',
        shadowColor: 'rgba(50,50,50,0.6)',          // Shadow color
        shadowOffset: { width: 0, height: 0 }, // Shadow position (x, y)
        shadowOpacity: 0.25,          // Shadow opacity
        shadowRadius: 6, 
        marginBottom: 40
    },
    offer: {
        width: 25,
        height: 25,
        marginRight: 4
    },
    label: {
        color: 'rgba(40,40,40,0.6)',
        // alignSelf: 'center',
        fontSize: 15,
        marginVertical: 7,
    },
    seperator: {
        borderWidth: 0.5,
        borderColor: 'rgba(140,140,140,0.2)',
        marginVertical: 5
    },
    chip:{
        backgroundColor:'green',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row'
    },
    chipHead:{
        color: 'white',
        fontWeight: '800',
        fontSize: 13
    },
    head: {
        height: responsiveHeight(27),
        position: 'relative'
    },
    container: {
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    heading:{
        fontSize: 22,
        fontWeight: '700',
        maxWidth: '84%'
    },
    img: {
        height: '100%',
        width: '100%',
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius
    },
    stats: {
        color: 'green',
        fontWeight: '600',
        position: 'absolute',
        bottom: -0.5,
        left: 0,
        backgroundColor: '#fff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderTopRightRadius: 15
    }
})

export default DishMainCard