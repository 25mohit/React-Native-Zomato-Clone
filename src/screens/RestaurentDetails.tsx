import { View, Text, SafeAreaView, StatusBar, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Layout from '../HOC/Layout'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../interfaces/types'
import Filterbar from '../Utils/Filterbar'
import { borderColor, cStyles } from '../../styles'
import { ThemeColor } from '../strings'
import RestaurentDishCard from '../Utils/Cards/RestaurentDishCard'
import { dishedListOfResturent } from '../../mocData/Dishes'

const RestaurentDetails = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <View style={{backgroundColor:'#fff', position: 'relative', height: '100%', paddingBottom: responsiveHeight(7)}}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
            <View style={styles.header}>
                <Layout>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={styles.icon}>
                                <Image style={{width: 18, height: 18}} source={require('../../assets/images/back2.png')}/>
                            </View>
                        </TouchableOpacity>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <TouchableOpacity>
                                <View style={styles.icon}>
                                    <Image style={{width: 18, height: 18}} source={require('../../assets/images/users.png')}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginHorizontal: 15}}>
                                <View style={styles.icon}>
                                    <Image style={{width: 18, height: 18}} source={require('../../assets/images/bookmark.png')}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.icon}>
                                    <Image style={{width: 18, height: 18}} source={require('../../assets/images/menu.png')}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Layout>
            </View>
            <ScrollView >

                {/* RESTAURENT INFO HEADER */}
                <Layout>
                    <View>
                        <View style={styles.activeChip}>
                            <Image style={{width: 25, height: 25}} source={require("../../assets/images/leaf.png")}/>
                            <Text style={{color: 'green', fontWeight: '600', marginLeft: 5}}>Pure Veg</Text>
                        </View>
                        <View style={[{flexDirection: 'row', justifyContent: 'space-between'}]}>
                            <View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 25, marginRight: 10, marginVertical: 10, fontWeight: '800'}}>La Milano Pizzeria</Text>
                                    <TouchableOpacity>
                                        <Image style={{width: 20, height: 20}} source={require("../../assets/images/info.png")}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={{marginVertical: 5, flexDirection: 'row', alignItems: 'center'}}>
                                    <Image style={{width: 17, height: 17}} source={require("../../assets/images/clock.png")}/>
                                    <Text style={{fontSize: 16, marginHorizontal: 7}}>23 mins . 1 km . Thaltej</Text>
                                    <TouchableOpacity>
                                        <Image style={{width: 13, height: 13}} source={require("../../assets/images/down.png")}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={{marginVertical: 5, flexDirection: 'row', alignItems: 'center'}}>
                                    <Image style={{width: 15, height: 15}} source={require("../../assets/images/calendar.png")}/>
                                    <Text style={{fontSize: 16, marginHorizontal: 7}}>Schedule for later</Text>
                                    <TouchableOpacity>
                                        <Image style={{width: 13, height: 13}} source={require("../../assets/images/down.png")}/>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity>
                                    <View style={styles.chip1}>
                                        <Image style={{width: 15, height: 15}} source={require("../../assets/images/star2.png")}/>
                                        <Text style={{marginLeft: 6, fontWeight: 500}}>Best in Pizza</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                            <View style={{alignItems: 'flex-end'}}>
                                <View style={styles.chip}>
                                    <Text style={styles.chipHead}>4.3</Text>
                                    <Image style={{width: 12, height: 12, marginLeft: 3}} source={require("../../assets/images/star.png")}/>
                                </View>
                                <TouchableOpacity>
                                    <Text style={{marginTop: 5, fontSize: 11}}>2.7K ratings</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.footer}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Image style={{width: 20, height: 20, marginRight: 5}} source={require("../../assets/images/offer.webp")}/>
                                    <Text style={{fontSize: 16, fontWeight: 500}}>Flat 20% OFF above ₹1000</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 15}}>7 offers</Text>
                                    <TouchableOpacity>
                                        <Image style={{width: 13, height: 13, marginLeft: 5}} source={require("../../assets/images/down.png")}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Layout>

                <View style={[styles.seperator, styles.sec]}>
                    <Layout>
                        <Filterbar />
                    </Layout>
                    <Layout>
                        <View style={[styles.se,{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderTopWidth: 1, paddingTop: 10}]}>
                            <Text style={cStyles.heading}>Most ordered together</Text>
                            <TouchableOpacity>
                                <Image style={{width: 13, height: 13}} source={require("../../assets/images/down.png")}/>
                            </TouchableOpacity>
                        </View>
                    </Layout>
                </View>

                <View style={{paddingVertical: 15}}>
                    <Layout>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text style={cStyles.heading}>Recommended for you</Text>
                            <TouchableOpacity>
                                <Image style={{width: 13, height: 13}} source={require("../../assets/images/down.png")}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingVertical: 20}}>
                            {
                                dishedListOfResturent?.map((data, index) => <RestaurentDishCard data={data} key={index}/>)
                            }
                        </View>
                    </Layout>
                </View>

            </ScrollView>
            <View style={styles.bottomModal}>
                <Layout>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.search}>
                            <TouchableOpacity>
                                <Image style={{tintColor: ThemeColor, width: 20, height: 20}} source={require("../../assets/images/search.png")}/>
                            </TouchableOpacity>
                            <TextInput autoFocus style={styles.searchText} placeholder='Search "pizza"'/>
                        </View>
                        <TouchableOpacity style={styles.menuBtn}>
                            <Image style={{width: 25, height: 25, marginRight: 5, tintColor: '#fff'}} source={require("../../assets/images/cutlery.png")}/>
                            <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>Menu</Text>
                        </TouchableOpacity>
                    </View>
                </Layout>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#fff',
        height: responsiveHeight(15),
        shadowOffset: { width: 0, height: 4 }, // Shadow position (x, y)
        shadowOpacity: 0.35, 
        shadowColor: 'rgba(50,50,50,0.4)',
        marginBottom: 20,
        justifyContent:'center',
        paddingTop: responsiveHeight(5.9)
    },
    seperator: {
        borderTopWidth: 12,
        borderBottomWidth: 8,
        borderColor: '#F2F4F7'
    },
    se: {
        borderTopColor: borderColor
    },
    sec : {
        paddingVertical: 15
    },
    menuBtn: {
        backgroundColor: '#2F2F37',
        width: 105,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    search: {
        height: responsiveHeight(6),
        flexDirection: 'row',
        position: 'static',
        backgroundColor: 'white',
        shadowColor: 'rgba(50,50,50,0.6)',          // Shadow color
        shadowOffset: { width: 0, height: 0 }, // Shadow position (x, y)
        shadowOpacity: 0.25, 
        borderRadius: 15,
        alignItems: 'center',
        paddingLeft: 10,
        width: '67%'
      },
      // searchInput: {
      //   backgroundColor: '#fff',
      //   width: '85%',
      //   height: '100%',
      //   justifyContent: 'center'
      // },
      searchText: {
        paddingLeft: 14,
        fontSize: 17,
        color: 'rgba(30,30,30,0.6)',
        maxWidth: '90%'
      },
    icon:{
        borderColor: borderColor,
        borderRadius: '50%',
        borderWidth: 1,
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeChip:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EDFAF1',
        width: 105,
        paddingVertical: 3,
        paddingHorizontal: 4,
        borderRadius: 15,
        justifyContent: 'center'
    },
    chip1:{
        borderRadius: 15,
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderColor: 'rgba(200,200,200,0.5)',
        borderWidth: 1,
        marginVertical: 14,
        backgroundColor: '#fff',
        flexDirection: 'row', 
        alignItems: 'center',
        width: responsiveWidth(33),
        shadowOffset: { width: 3, height: 3 }, // Shadow position (x, y)
        shadowOpacity: 0.35, 
        shadowColor: 'rgba(50,50,50,0.4)',
    },

    chip:{
        backgroundColor:'green',
        borderRadius: 10,
        paddingVertical: 4,
        width: 55,
        paddingHorizontal: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row'
    },
    chipHead:{
        color: 'white',
        fontWeight: '800',
        fontSize: 16
    },
    footer: {
        borderColor: 'transparent',
        borderWidth: 1,
        borderTopColor: borderColor,
        paddingVertical: responsiveHeight(2),
        marginTop: 10
    },
    bottomModal: {
        backgroundColor: '#fff',
        width: '100%',
        height: responsiveHeight(12),
        position:'absolute',
        bottom: 0,
        shadowOffset: { width: 0, height: -5 }, // Shadow position (x, y)
        shadowOpacity: 0.25, 
        shadowColor: 'rgba(50,50,50,0.6)',
        paddingTop: 15
    }
})
export default RestaurentDetails