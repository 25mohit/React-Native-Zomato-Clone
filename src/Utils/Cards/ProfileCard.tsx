import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { borderRadius, commonHeight } from '../../../styles'
import { ThemeColor } from '../../strings'

const ProfileCard = () => {
  return (
    <View style={styles.profileCard}>
      <View style={{padding: 15, flexDirection: 'row', alignItems: 'center'}}>
        <Image style={{width: 65, height: 65, borderRadius: '50%', marginRight: 15}} source={require("../../../assets/images/userImage.jpeg")}/>
        <View>
            <Text style={{fontSize: 22, fontWeight: 600}}>mohit</Text>
            <Text style={{marginVertical: 9, fontWeight: 500}}>mohit724agarwal@gmail.com</Text>
            <TouchableOpacity>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <Text style={{color: ThemeColor, fontWeight: 500, fontSize: 13}}>View activity</Text>
                    <Image style={{tintColor: ThemeColor, width: 15, height: 15}} source={require("../../../assets/images/right1.png")}/>
                </View>
            </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.bottom}>
            <View>
                <Text style={styles.txt}>Join Zomato Gold</Text>
            </View>
            <View>
                <Image style={styles.rightIcon} source={require("../../../assets/images/right.png")}/>
            </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const goldColor = '#FADBAA'

const styles = StyleSheet.create({
    profileCard: {
        marginVertical: commonHeight,
        backgroundColor: '#fff',
        borderRadius: borderRadius,
        overflow: 'hidden'
    },
    bottom: {
        backgroundColor: '#000',
        padding: 17,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    txt: {
        color: goldColor,
        fontWeight: 700,
        fontSize: 15
    },
    rightIcon: {
        width: 17,
        height: 17,
        tintColor: goldColor
    }
})
export default ProfileCard