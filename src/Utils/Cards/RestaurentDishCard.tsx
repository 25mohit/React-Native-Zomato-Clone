import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { borderColor } from '../../../styles'
import { ThemeColor } from '../../strings'
import { MainDishOfResInterface } from '../../../interfaces/Food'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../interfaces/types'

const RestaurentDishCard:React.FC<{data: MainDishOfResInterface}> = ({ data}) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, borderBlockColor: borderColor, borderBottomWidth: 1}}>
      <View style={{width: '58%'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={{width: 20, height: 20}} source={require("../../../assets/images/vegan.jpg")}/>
            <Text style={styles.bestChip}>Bestseller</Text>
        </View>
        <Text style={styles.heading}>{data.dishName}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
            <View style={{flexDirection: 'row'}}>
                <Image style={{width: 15, height: 15, tintColor: '#D6A602'}} source={require('../../../assets/images/star.png')}/>
                <Image style={{width: 15, height: 15, tintColor: '#D6A602'}} source={require('../../../assets/images/star.png')}/>
                <Image style={{width: 15, height: 15, tintColor: '#D6A602'}} source={require('../../../assets/images/star.png')}/>
                <Image style={{width: 15, height: 15, tintColor: '#D6A602'}} source={require('../../../assets/images/star.png')}/>
                <Image style={{width: 15, height: 15, tintColor: '#D6A602'}} source={require('../../../assets/images/star.png')}/>
            </View>
            <Text style={{fontSize: 12, marginLeft: 5, color: 'rgba(80,80,80,0.8)'}}>({data.ratings})</Text>
        </View>
        <Text style={{fontSize: 17, marginVertical: 12}}>₹{data.price}</Text>
        <Text numberOfLines={2}>{data.description}</Text>
        <View style={{paddingVertical: 18, flexDirection: 'row'}}>
            <TouchableOpacity>
                <View style={styles.icon}>
                    <Image style={{width: 18, height: 18}} source={require("../../../assets/images/bookmark.png")}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.icon}>
                    <Image style={{width: 18, height: 18, tintColor: ThemeColor}} source={require("../../../assets/images/share.png")}/>
                </View>
            </TouchableOpacity>
        </View>
      </View>
      <View style={{width: '40%'}}>
        <View style={{position: 'absolute'}}>
            <Image style={{maxWidth: 152, objectFit: 'cover', height: 152, borderRadius: 18}} source={require("../../../assets/images/pizza.jpg")}/>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <View style={styles.addBtn}>
                    <Text style={{color: ThemeColor, fontSize: 20, fontWeight: '700'}}>ADD</Text>
                    <Text style={{position: 'absolute', right: 10, top: 2, color: ThemeColor, fontWeight: '600'}}>+</Text>
                </View>
            </TouchableOpacity>
            <Text style={{position: 'absolute', bottom: -40, left: 29, color: 'rgba(50,50,50,0.6)'}}>customisable</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    bestChip: {
        backgroundColor: '#D6A602',
        color: '#fff',
        fontWeight: '600',
        paddingVertical: 3,
        paddingHorizontal: 6,
        width: 76,
        borderRadius: 5,
        marginLeft: 10,
        fontSize: 13
    },
    heading: {
        fontSize: 18, 
        fontWeight: '600',
        marginVertical: 10
    },
    addBtn: {
        borderColor: ThemeColor,
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: '#FFF5F6',
        position: 'absolute',
        bottom: -20,
        marginLeft: '14%'
    },
    icon:{
        width: 40,
        height: 40,
        borderColor: borderColor,
        borderWidth: 1,
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 0 }, // Shadow position (x, y)
        shadowOpacity: 0.35, 
        shadowColor: 'rgba(50,50,50,0.4)',
        marginRight: 18
    }
})

export default RestaurentDishCard