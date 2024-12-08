import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ExplorerDishInterface } from '../../../interfaces/Food'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const ExplorerCard:React.FC<{data: ExplorerDishInterface}> = ({ data }) => {
  return (
    <View style={styles.card}>
        <Image style={styles.thumbnail} source={require('../../../assets/images/burger.jpg')}/>
        <View>
            <Text style={[{alignSelf: 'center'}, styles.heading]}>{data.label}</Text>
            <Text style={[{alignSelf: 'center'}, styles.subHeading]}>{data.subLebel}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#fff',
        width: responsiveWidth(25),
        height: responsiveWidth(32),
        marginRight: 17,
        borderRadius: 15,
        shadowColor: 'rgba(50,50,50,0.6)',          // Shadow color
        shadowOffset: { width: 0, height: 0 }, // Shadow position (x, y)
        shadowOpacity: 0.25,          // Shadow opacity
        shadowRadius: 6, 
        justifyContent: 'space-between',
        paddingBottom: 8
    },
    heading: {
        fontSize: 17,
        fontWeight: '700'
    },
    subHeading: {
        fontSize: 11,
    },
    thumbnail: {
        width: '85%',
        alignSelf: 'center',    
        height: responsiveHeight(10)
    }
})
export default ExplorerCard