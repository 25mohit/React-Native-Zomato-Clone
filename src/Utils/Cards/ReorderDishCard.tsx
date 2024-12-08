import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ReorderDishCardProps } from '../../../interfaces/Food'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import CardLayout from '../../HOC/CardLayout'
import { borderColor, borderRadius, commonHeight } from '../../../styles'
import Layout from '../../HOC/Layout'

const ReorderDishCard:React.FC<ReorderDishCardProps> = ({data}) => {

  return (
    <View style={[styles.card]}>
        <View style={[{borderBottomColor: borderColor, borderBottomWidth: 1, paddingBottom: 13, flexDirection: 'row', alignItems:'center', justifyContent: 'space-between'}]}>
            <View style={{flexDirection: 'row', alignItems: 'center', width: '76%'}}>
                <Image style={styles.logo} source={require("../../../assets/images/pizza.jpg")}/>
                <View>
                    <Text style={{fontSize: 19, fontWeight: '600', marginBottom: 5}}>{data.lab}</Text>
                    <Text style={{color: '#C60000', fontSize: 10}}>Does not deliver to your location</Text>
                </View>
            </View>
            <TouchableOpacity style={{height: '100%', paddingTop: 6}}>
                <Image style={{width: 15, height: 15}} source={require("../../../assets/images/menu.png")}/>
            </TouchableOpacity>
        </View>
        <View style={{paddingTop: 10}}>
            <View style={{flexDirection:'row', alignItems: 'center', borderBottomColor: borderColor, borderBottomWidth: 1, paddingBottom: 10}}>
                <Image style={{width: 15, height: 15, marginRight: 10}} source={require("../../../assets/images/vegan.jpg")}/>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'rgba(40,40,40,0.7)', marginRight: 5, fontSize: 13}}>1 x</Text>
                    <Text style={{fontSize: 13, fontWeight: '500'}}>Kullad Lassi</Text>
                </View>
            </View>
        </View>

        {/* FOOTER */}
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'space-between'}}>
            <View>
                <Text style={{fontSize: 16, fontWeight: '700'}}>₹118</Text>
                <Text style={{fontSize: 12, marginTop: 5, color: 'rgba(40,40,40,0.7)'}}>Ordered on 11 Oct at 9:09 AM</Text>
            </View>
            <TouchableOpacity style={styles.inactiveBtn}>
                <Text style={{color: '#fff', fontSize: 13, fontWeight: '600'}}>Reorder</Text>
            </TouchableOpacity>
        </View>
    </View>
 )
}

const styles = StyleSheet.create({
    card: {
        // marginVertical: 10,
        borderRadius: borderRadius,
        marginVertical: commonHeight,
        backgroundColor: '#fff',
        padding: 15,
        shadowOffset: { width: 0, height: 0 }, // Shadow position (x, y)
        shadowOpacity: 0.80, 
        shadowColor: 'rgba(150,150,150,0.2)',
        borderColor: borderColor,
        borderWidth: 1,
        marginHorizontal: 2
    },
    inactiveBtn: {
        backgroundColor: '#AFB4C0',
        borderRadius: 10,
        paddingVertical: 9,
        paddingHorizontal: 15
    },
    logo: {
        width: 47, 
        height: 47,
        borderRadius: 13,
        marginRight: 10
    }
})

export default ReorderDishCard