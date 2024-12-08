import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Filterbar = () => {
    const list = ['Filters', 'Bestseller', 'Rated 4+', 'Spicy', 'Kids Choice']
    const imgList: { [key: string]: any } = {
        'Filters': require("../../assets/images/filter.png"),
        'Bestseller': require("../../assets/images/champ.png"),
        'Rated 4+': require("../../assets/images/star2.png"),
        'Spicy': require("../../assets/images/chilli.png"),
        'Kids Choice': require("../../assets/images/boy.png"),
    }

  return (
    <View style={styles.container}>
      <FlatList showsHorizontalScrollIndicator={false} style={{paddingBottom: 10}} horizontal data={list} renderItem={({item, index}) => {
        return (
            <TouchableOpacity key={index} >
                <View style={styles.chip}>
                    <Image style={{width: 20, height: 20, marginRight: 5}} source={imgList[item]}/>
                    <Text style={{fontWeight: 500, fontSize: 13}}>{item}</Text>
                </View>
            </TouchableOpacity>
        )
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginVertical: 5
        // paddingBottom: 10
    },
    chip:{
        borderColor: 'rgba(140,140,140,0.3)',
        borderRadius: 9,
        paddingVertical: 5,
        paddingHorizontal: 12,
        marginRight: 14,
        borderWidth:1,
        backgroundColor: '#fff',
        shadowOffset: { width: 3, height: 3 }, // Shadow position (x, y)
        shadowOpacity: 0.35, 
        shadowColor: 'rgba(50,50,50,0.4)',
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export default Filterbar