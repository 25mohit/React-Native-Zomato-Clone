import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../interfaces/types'
import { ThemeColor } from '../strings'

interface LocationInterface {
    layout?: string
}

const LocationNavbar: React.FC<LocationInterface> = ({ layout }) => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const currentColor = layout === 'light' ? '#000' : '#fff'

    return (
        <Animated.View style={styles.location}>
            <View style={[{ flexDirection: 'row', alignItems: 'center' }]}>
                <Image style={[styles.locationIcon, { tintColor: layout === 'light' ? ThemeColor : '#fff' }]} source={require("../../assets/images/location.png")} />
                <View style={{ marginLeft: 5 }}>
                    <Text style={[styles.locationHeading, { color: currentColor }]}>Thaltej</Text>
                    <Text style={[styles.locationSubHeading, { color: currentColor }]}>Ahmedabad</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <View style={styles.right}>
                    <Image style={styles.userImg} source={require("../../assets/images/userImage.jpeg")} />
                </View>
            </TouchableOpacity>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    right: {
        borderColor: '#fff',
        borderWidth: 1.5,
        borderRadius: '50%',
        overflow: 'hidden',
    },
    userImg: {
        borderRadius: '50%',
        width: 45,
        height: 45,
        objectFit: 'cover'
    },
    location: {
        height: responsiveHeight(6),
        marginBottom: responsiveHeight(1),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    locationIcon: {
        width: 27,
        height: 27,
    },
    locationHeading: {
        fontSize: 19,
        fontWeight: '700'
    },
    locationSubHeading: {
        color: '#fff',
    },
})
export default LocationNavbar