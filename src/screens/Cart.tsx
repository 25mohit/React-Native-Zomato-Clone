import { View, Text, SafeAreaView, StatusBar, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import Layout from '../HOC/Layout'
import { borderColor, borderRadius, commonHeight } from '../../styles'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { ThemeColor } from '../strings'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../interfaces/types'
import ConfettiCannon from 'react-native-confetti-cannon';

const Cart = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const animationRef = useRef<ConfettiCannon>(null)
  const newList = [1,2]

  const onSubmitHandler = () => {
    if (animationRef.current) {
      animationRef.current.start();
      setTimeout(() => {
        navigation.popTo('MainScreen')
      },3000)
    } else {
      console.error("AnimationRef is not assigned");
    }
  }
  
  return (
    <>
      <SafeAreaView style={{height: '100%'}}>
        <StatusBar backgroundColor="red"/>
        <Layout>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: responsiveHeight(1), height: 40}}>
              <View style={{flexDirection: 'row', alignItems:'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image style={[styles.icon, {marginRight: 10}]} source={require("../../assets/images/back2.png")}/>
                </TouchableOpacity>
                <Text style={{fontWeight: '600', fontSize: 16}}>La Pino'z Pizza</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Image style={styles.icon} source={require("../../assets/images/share2.png")}/>
                </TouchableOpacity>
              </View>
          </View>
          <ScrollView style={{marginBottom: responsiveHeight(13)}}>

            <View style={styles.notify}>
              <Text>🥳</Text>
              <Text style={{fontWeight: '700',color: '#0068ED', marginLeft: 8}}>You saved ₹26 on this order</Text>
            </View>

            <View style={styles.cardView}>
              {
                newList?.map((d, index) => 
                  <View key={index} style={{marginVertical: 10, borderBottomColor: borderColor, borderBottomWidth: index < newList.length -1 ? 1 : 0, paddingBottom: index < newList.length -1 ? 15 : null}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={{flexDirection: 'row'}}>
                        <Image style={styles.icon} source={require("../../assets/images/vegan.jpg")}/>
                        <View>
                          <Text style={{fontWeight: '600'}}>Sweet Corn Pizza Regular</Text>
                          <Text style={{fontWeight: '600', marginVertical: 7}}>₹125</Text>
                          <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5.5}}>
                            <Text style={{fontSize: 11}}>Edit</Text>
                            <Image style={styles.icon2} source={require("../../assets/images/right.png")}/>
                          </View>
                          <Text style={{fontSize: 11, color: 'rgba(40,40,40,0.6)'}}>NOT ELIGIBLE FOR COUPONS</Text>
                        </View>
                      </View>
                      <View>
                        <View style={{borderColor: ThemeColor, borderWidth: 1, borderRadius: 10, backgroundColor: '#FFF5F6', width: 80, flexDirection:'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 5}}>
                          <TouchableOpacity>
                            <Text style={{color: ThemeColor, fontWeight: '600'}}>-</Text>
                          </TouchableOpacity>
                          <Text style={{fontWeight: '600'}}>1</Text>
                          <TouchableOpacity>
                            <Text style={{color: ThemeColor, fontWeight: '600'}}>+</Text>
                          </TouchableOpacity>
                        </View>
                        <Text style={{marginVertical: 8, fontWeight: '600', fontSize: 13, alignSelf: 'center'}}>₹99</Text>
                      </View>
                    </View>
                    <View>
                      <View style={styles.note}>
                        <Text style={{fontSize: 13}}>Add a note for the restaurent</Text>
                      </View>
                    </View>
                  </View>
              )}
            </View>

            <View style={styles.cardView}>
              <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: borderColor, borderBottomWidth: 1, paddingBottom: 10}}>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                  <Image style={styles.icon} source={require("../../assets/images/check.png")}/>
                  <Text style={{fontWeight: '600', fontSize: 13}}>Items starting @ ₹99 only applied!</Text>
                </View>
                <Text style={{color: '#0068ED', fontSize: 12}}>-₹26.00</Text>
              </View>
              <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10}}>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                  <Image style={styles.icon} source={require("../../assets/images/offer.webp")}/>
                  <Text style={{fontWeight: '600', fontSize: 13}}>View all coupons</Text>
                </View>
                  <Image style={styles.icon2} source={require("../../assets/images/right.png")}/>
              </View>
            </View>

            <View style={styles.cardView}>
              <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: borderColor, borderBottomWidth: 1, paddingBottom: 10}}>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                  <Image style={styles.icon} source={require("../../assets/images/clock.png")}/>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 13}}>Delivery in </Text>
                    <Text style={{fontWeight: '600', fontSize: 13}}> 12 mins</Text>
                  </View>
                </View>
                <Image style={styles.icon2} source={require("../../assets/images/right.png")}/>
              </View>
              <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10}}>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                  <Image style={styles.icon} source={require("../../assets/images/note.png")}/>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 13}}>Total Bill</Text>
                    <Text style={{fontWeight: '600', fontSize: 13}}> ₹189</Text>
                  </View>
                </View>
                  <Image style={styles.icon2} source={require("../../assets/images/right.png")}/>
              </View>
            </View>

          </ScrollView>
        </Layout>
        <View style={styles.footer}>
          <Layout>
            <TouchableOpacity onPress={onSubmitHandler}>
              <View style={styles.btn}>
                <Text style={{color: '#fff', fontWeight: '600'}}>Select address at next step</Text>
                <Image style={[styles.icon2, {tintColor: '#fff', marginLeft:5}]} source={require("../../assets/images/right.png")}/>
              </View>
            </TouchableOpacity>
          </Layout>
        </View>
      </SafeAreaView>
      <ConfettiCannon autoStart={false} fallSpeed={2000} fadeOut={true} ref={animationRef} count={150} origin={{x: -10, y: 0}} />
    </>
  )
}

const styles = StyleSheet.create({
  icon:{
    width: 20,
    height: 20,
    marginRight: 10
  },
  cardView: {
    borderRadius: borderRadius,
    marginVertical: commonHeight,
    backgroundColor: '#fff',
    padding: 15,
    shadowOffset: { width: 0, height: 0 }, // Shadow position (x, y)
    shadowOpacity: 0.20, 
    shadowColor: 'rgba(150,150,150,0.2)',
  },
  btn: {
    backgroundColor: ThemeColor,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    flexDirection: 'row'
  },
  footer: {
    height: responsiveHeight(10),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // justifyContent: 'center'
  },
  note: {
    borderColor: borderColor,
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 10,
    width: 210,
    marginTop: 15
  },
  icon2:{
    width: 10,
    height: 10
  },
  notify: {
    borderRadius: borderRadius,
    backgroundColor: '#D9E5FD',
    padding: 15,
    paddingHorizontal: 20,
    marginVertical: responsiveHeight(2),
    flexDirection: 'row', 
    alignItems: 'center',
  }
})

export default Cart