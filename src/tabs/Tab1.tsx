import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Seperator from '../Utils/Seperator'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import Layout from '../HOC/Layout'
import { ThemeColor } from '../strings'
import DishCard from '../Utils/Cards/DishCard'
import { DishInterface, ExplorerDishInterface } from '../../interfaces/Food'
import ExplorerCard from '../Utils/Cards/ExplorerCard'
import DishSimpleCard from '../Utils/Cards/DishSimpleCard'
import { mainDishesList } from '../../mocData/Dishes'
import DishMainCard from '../Utils/Cards/DishMainCard'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../interfaces/types'
import LocationNavbar from '../Utils/LocationNavbar'

const Tab1 = () => {
  const [toogleOpt, setToogleOpt] = useState('rec')

  const dist1List: DishInterface[] = [
    {
      resName: 'Shree Marutinandam',
      time: '24 mins',
      distance: '2.5 km',
      offer: '20% OFF'
    },
    {
      resName: 'Biryani Raja',
      time: '24 mins',
      distance: '2.5 km',
      offer: '20% OFF'
    },
    {
      resName: "Fozzie's Pizza",
      time: '24 mins',
      distance: '2.5 km',
      offer: '20% OFF'
    },
    {
      resName: "Dominos Pizza",
      time: '24 mins',
      distance: '2.5 km',
      offer: '20% OFF'
    },
  ]

  const explorerDishList: ExplorerDishInterface[] = [
    {
      label: 'Offers',
      subLebel: 'Up to 60% OFF',
      new: true
    },
    {
      label: 'Offers',
      subLebel: 'Up to 60% OFF',
      new: true
    },
    {
      label: 'Offers',
      subLebel: 'Up to 60% OFF',
      new: true
    },
    {
      label: 'Offers',
      subLebel: 'Up to 60% OFF',
      new: true
    },
    {
      label: 'Offers',
      subLebel: 'Up to 60% OFF',
      new: true
    },
  ]

  const simpleDishList = [
    'Pizza', 'Burger', 'Rolls', 'Noodels', 'Sandwich', 'Thali', 'Panner', 'Milk Shake'
  ]

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const navigateHandler = () => {
    navigation.navigate('Search')
  }

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>

      {/* Hero Section */}
      <View style={styles.hero}>
        <Layout>
          {/* <View style={styles.location}>
            <View style={[styles.left, {flexDirection: 'row', alignItems: 'center'}]}>
              <Image style={styles.locationIcon} source={require("../../assets/images/location.png")}/>
              <View style={{marginLeft: 5}}>
                <Text style={styles.locationHeading}>Memnagar</Text>
                <Text style={styles.locationSubHeading}>Ahmedabad</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <View style={styles.right}>
                <Image style={styles.userImg} source={require("../../assets/images/userImage.jpeg")}/>
              </View>
            </TouchableOpacity>
          </View> */}
          <LocationNavbar />

          {/* Search Section */}
          <View style={styles.search}>
            <TouchableOpacity style={styles.searchInput} onPress={() => navigateHandler()}>
              <Text style={styles.searchText}>Search "ice cream"</Text>
            </TouchableOpacity>
            <View>
              <Text style={{color: '#fff', fontSize: 18.5, fontWeight: '800'}}>VEG</Text>
              <Text style={{color: '#fff', fontSize: 15, fontWeight: '600'}}>Mode</Text>
            </View>
          </View>

          <View style={styles.content}>
            <TouchableOpacity style={styles.btn}>
              <Text style={{color: 'yellow'}}>Explore Offers &gt;</Text>
            </TouchableOpacity>
          </View>
        </Layout>
      </View>

      {/* Content */}
      <Layout>

        <View style={styles.toogle}>
          <TouchableOpacity onPress={() => setToogleOpt('rec')}>
            <View style={[styles.toogleOpt, styles.l, {backgroundColor: toogleOpt === 'rec' ? 'rgba(255, 222, 233, 0.3)': '',borderColor: toogleOpt === 'rec' ? ThemeColor : 'rgba(80,80,80,0.3)'}]}>
              <Text>Recommended</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setToogleOpt('col')}>
            <View style={[styles.toogleOpt, styles.r, {backgroundColor: toogleOpt === 'col' ? 'rgba(255, 222, 233, 0.3)': '',borderColor: toogleOpt === 'col' ? ThemeColor : 'rgba(80,80,80,0.3)'}]}>
              <Text>Collections</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList style={styles.dishContainer} horizontal data={dist1List} renderItem={({item, index}) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('RestaurentDetails')}  key={index}>
                <DishCard data={item}/>
              </TouchableOpacity>
            )
          }}/>
        </View>

        <View>
          <FlatList style={styles.dishContainer} horizontal data={dist1List} renderItem={({item, index}) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('RestaurentDetails')}  key={index}>
                <DishCard data={item}/>
              </TouchableOpacity>
            )
          }}/>
        </View>

        <Seperator label='EXPLORE' lineWidth="36%"/>

        <View>
          <FlatList style={{paddingVertical: 10, paddingLeft: 10}} horizontal data={explorerDishList} renderItem={({item, index}) => {
            return(
              <TouchableOpacity onPress={() => navigation.navigate('RestaurentDetails')}  key={index}>
                <ExplorerCard data={item}/>
              </TouchableOpacity>
            )
          }}/>
        </View>
    
        <Seperator label="WHAT'S ON YOUR MIND?" lineWidth="21.5%"/>

        <View>
          <FlatList showsHorizontalScrollIndicator={false} style={{marginBottom: 12}} horizontal data={simpleDishList.slice(0,4)} renderItem={({item, index}) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('RestaurentDetails')}  key={index}>
                <DishSimpleCard data={item}/>
              </TouchableOpacity>
            )
          }}/>
        </View>

        <View>
          <FlatList showsHorizontalScrollIndicator={false} style={{marginBottom: 12}} horizontal data={simpleDishList.slice(4,simpleDishList.length)} renderItem={({item, index}) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('RestaurentDetails')}  key={index}>
                <DishSimpleCard data={item}/>
              </TouchableOpacity>
            )
          }}/>
        </View>

        <Seperator label="ALL RESTAURANTS" lineWidth="27%"/>

        <Text style={styles.label}>1746 restaurents delivering to you</Text>

        <Text style={[styles.label, {marginVertical: 30}]}>FEATURED</Text>

        <View>
          {
            mainDishesList?.map((data, index) => <TouchableOpacity onPress={() => navigation.navigate('RestaurentDetails')} key={index}>
              <DishMainCard data={data}/>
            </TouchableOpacity>)
          }
        </View>
        <View style={{height: responsiveHeight(7)}}></View>

      </Layout>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  left:{},
  // right:{    
  //   borderColor: '#fff',
  //   borderWidth: 1.5,
  //   borderRadius: '50%',
  //   overflow: 'hidden',
  //   // padding:2
  // },
  // userImg:{
  //   // width: '100%',
  //   // height: '100%',
  //   borderRadius: '50%',
  //   width: 45,
  //   height: 45,
  //   objectFit: 'cover'
  // },
  label:{
    color: 'rgba(40,40,40,0.6)',
    alignSelf: 'center',
    fontSize: 15
  },
  dishContainer: {
    paddingVertical:19
  },
  l:{
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  r:{
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15
  },
  toogle: {
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    marginBottom: responsiveHeight(1.6),
    flexDirection: 'row'
  },
  toogleOpt:{
    padding: 10,
    paddingHorizontal: 15,
    borderWidth:1
  },
  content: {
    alignSelf: 'center',
    // height: '100%',
    marginTop: 50,
  },
  btn: {
    borderWidth: 1,
    borderColor: 'yellow',
    borderRadius: 20,
    padding: 8, 
    paddingHorizontal: 19,
  },
  // locationIcon: {
  //   width: 27,
  //   height: 27,
  //   tintColor: '#fff'
  // },
  // locationHeading: {
  //   fontSize: 19,
  //   color: '#fff',
  //   fontWeight: '700'
  // },
  // locationSubHeading: {
  //   color: '#fff',
  // },
  hero: {
    backgroundColor: '#D2691E',
    height: responsiveHeight(37),
    width: '100%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingTop: responsiveHeight(7)
  },
  // location: {
  //   height: responsiveHeight(6),
  //   marginBottom: responsiveHeight(1),
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center'
  // },
  search: {
    height: responsiveHeight(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'static'
  },
  searchInput: {
    backgroundColor: '#fff',
    width: '85%',
    height: '100%',
    borderRadius: 18,
    justifyContent: 'center'
  },
  searchText: {
    paddingLeft: 14,
    fontSize: 17,
    color: 'rgba(30,30,30,0.6)'
  }
})

export default Tab1