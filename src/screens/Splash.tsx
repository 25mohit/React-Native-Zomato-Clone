import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../interfaces/types';
import { ThemeColor } from '../strings';

const Splash = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        },1000)
    },[])

  return (
    <View style={styles.container}>
      {/* <Text>Welcome</Text> */}
      <Image style={styles.logo} source={require('../../assets/images/zomato.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      backgroundColor: ThemeColor
    },
    logo: {
      width: 200,
      height: 200
    }
})
export default Splash