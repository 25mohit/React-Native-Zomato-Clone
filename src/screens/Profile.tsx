import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Layout from '../HOC/Layout'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../interfaces/types'
import ProfileCard from '../Utils/Cards/ProfileCard'
import CardLayout from '../HOC/CardLayout'
import MenuOptionCard from '../Utils/Cards/MenuOptionCard'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const Profile = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const menuOptions = {
        foodOrders: [
            { label: 'Your Orders' },
            { label: 'Favorite orders' },
            { label: 'Manage recommendations' },
            { label: 'Order on train' },
            { label: 'Address book' },
            { label: 'Hidden Restaurants' },
            { label: 'Online ordering help' },
        ],
        others: [
            { label: 'Choose language' },
            { label: 'About' },
            { label: 'Send feedback' },
            { label: 'Get Feeding India receipt' },
            { label: 'Report a safety emergency' },
            { label: 'Settings' },
            { label: 'Log out' },
        ]
    }
    
    return (
    <SafeAreaView>
        <Layout>
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.backImg} source={require("../../assets/images/back2.png")}/>
                </TouchableOpacity>
            </View>
            <ProfileCard />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <CardLayout width={48}>
                        <View style={styles.icon}>
                            <Image style={styles.ic} source={require("../../assets/images/bookmark.png")}/>
                        </View>
                        <Text style={[styles.label, {marginTop: 8}]}>Collections</Text>
                    </CardLayout>
                    <CardLayout width={48}>
                        <View style={styles.icon}>
                            <Text style={styles.iconTxt}>₹</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
                            <Text style={styles.label}>Money</Text>
                            <View style={styles.activeChip}>
                                <Text style={{color: 'green', fontWeight: '600', fontSize: 12}}>₹ 0</Text>
                            </View>
                        </View>
                    </CardLayout>
                </View>

                <CardLayout>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={styles.icon}>
                                <Image style={styles.ic} source={require("../../assets/images/users.png")}/>
                            </View>
                            <Text style={[styles.label, {marginLeft: 9}]}>Your Profile</Text>
                        </View>
                        <View style={[styles.activeChip, {width: 125}]}>
                            <Text style={{color: 'green', fontWeight: '600', fontSize: 13}}>100% completed</Text>
                        </View>
                    </View>
                </CardLayout>

                <CardLayout>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={styles.icon}>
                            <Image style={styles.ic} source={require("../../assets/images/bookmark.png")}/>
                        </View>
                        <Text style={[styles.label, {marginLeft: 9}]}>Veg Mode</Text>
                    </View>
                </CardLayout>

                <CardLayout>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={styles.icon}>
                            <Image style={styles.ic} source={require("../../assets/images/bookmark.png")}/>
                        </View>
                        <Text style={[styles.label, {marginLeft: 9}]}>Appearance</Text>
                    </View>
                </CardLayout>

                <CardLayout>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={styles.icon}>
                            <Image style={styles.ic} source={require("../../assets/images/star2.png")}/>
                        </View>
                        <Text style={[styles.label, {marginLeft: 9}]}>Your rating</Text>
                    </View>
                </CardLayout>

                <MenuOptionCard title='Food Orders' menuOptions={menuOptions.foodOrders}/>
                
                <MenuOptionCard title='Dining' menuOptions={menuOptions.foodOrders}/>

                <MenuOptionCard title='Events' menuOptions={menuOptions.foodOrders}/>

                <MenuOptionCard title='Money' menuOptions={menuOptions.foodOrders}/>

                <MenuOptionCard title='Zomato for Enterprise' menuOptions={menuOptions.foodOrders}/>
                
                <MenuOptionCard title='Others' menuOptions={menuOptions.others}/>

                <View style={styles.footer}>
                    <Text style={[styles.logo, {fontSize: 22, fontWeight: '800', fontStyle: 'italic'}]}>zomato</Text>
                    <Text style={[styles.logo, {fontSize: 13}]}>v18.9.0(4)</Text>
                </View>
            </ScrollView>
        </Layout>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    backImg: {
        width: 20,
        height: 20,
        marginBottom: 8
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: responsiveHeight(15),
        marginBottom: responsiveHeight(47)
    },
    logo: {
        color: '#AFB4C0'
    },
    activeChip:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EDFAF1',
        width: 45,
        paddingVertical: 3,
        paddingHorizontal: 4,
        marginLeft: 11,
        borderRadius: 15,
        justifyContent: 'center'
    },
    iconTxt:{
        fontWeight: '500',
        fontSize: 18
    },
    icon: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: '50%'
    },
    ic: {
        width: 17,
        height: 17
    },
    label: {
        fontWeight: 500,
        fontSize: 15
    }
})
export default Profile