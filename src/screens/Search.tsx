import { View, Text, SafeAreaView, StatusBar, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../interfaces/types'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import Seperator from '../Utils/Seperator'
import Layout from '../HOC/Layout'
import DishSimpleCard from '../Utils/Cards/DishSimpleCard'
import { ThemeColor } from '../strings'

const Search = () => {

  const [activeTab, setActiveTab] = useState('delivery')

  const [searchHistoryList, setSearchHistoryList] = useState([
    {label: 'Lassi', id: 1},
    {label: 'Pizza', id: 2},
    {label: 'Tikkad', id: 3},
    {label: 'Panner', id: 4}
  ])

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const simpleDishList = [
    'Pizza', 'Burger', 'Rolls', 'Noodels', 'Sandwich', 'Thali', 'Panner', 'Milk Shake'
  ]

  const onRemoveHandler = (dt: any) => {
    setSearchHistoryList(searchHistoryList.filter(list => list.id !== dt.id))
  }
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
      <ScrollView style={{height: '100%', backgroundColor:'#fff'}}>
        <View style={styles.banner}>
          <Layout>
            <View style={styles.search}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={{tintColor: ThemeColor}} source={require("../../assets/images/back.png")}/>
              </TouchableOpacity>
              <TextInput autoFocus style={styles.searchText} placeholder='Search "ice cream"'/>
            </View>
          </Layout>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity onPress={() => setActiveTab('delivery')} style={[{width: '40%',  borderBottomColor: activeTab === 'delivery' ? ThemeColor : 'transparent'}, styles.tab]}>
              <View>
                <Text style={[styles.label, {color: activeTab === 'delivery' ? '#000' : 'rgba(60,60,60,0.6)'}]}>Delivery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab('dining')} style={[{width: '40%', borderBottomColor: activeTab === 'dining' ? ThemeColor : 'transparent'}, styles.tab]}>
              <View>
                <Text style={[styles.label, {color: activeTab === 'dining' ? '#000' : 'rgba(60,60,60,0.6)'}]}>Dining</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {
          activeTab === 'delivery' ?
            <View style={styles.container}>
              {
                searchHistoryList?.length ? 
                <>
                  <Seperator label='YOUR RECENT SEARCHES' lineWidth="21%"/>
                  <Layout>
                    {
                      searchHistoryList?.map((data, index) => 
                        <View key={data.id} style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 11, alignItems: 'center'}}>
                          <View style={{flexDirection:'row', alignItems: 'center'}}>
                            <Image style={{width: 35, height: 35, borderRadius: '50%', marginRight: 15}} source={require("../../assets/images/pizza.jpg")}/>
                            <View>
                              <Text style={{fontSize: 17, fontWeight: '500'}}>{data.label}</Text>
                              <Text style={{color: 'rgba(40,40,40,0.6)', marginTop: 5}}>Dish</Text>
                            </View>
                          </View>
                          <TouchableOpacity onPress={() => onRemoveHandler(data)}>
                            <Image style={{width: 11, height: 11}} source={require("../../assets/images/close.png")}/>
                          </TouchableOpacity>
                        </View>)
                    }
                  </Layout>
                </> : null
              }
              <Seperator label="WHAT'S ON YOUR MIND" lineWidth="23%"/>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {
                  simpleDishList?.map((data, ind) => 
                  <TouchableOpacity key={ind} style={styles.card}>
                    <DishSimpleCard data={data}/>
                  </TouchableOpacity>)
                }
              </View>
            </View> :
            <View style={styles.container}>
              <Seperator label='ARE YOU HERE?' lineWidth="29%"/>
              <Seperator label="EDITOR'S CHOICE" lineWidth="28%"/>
            </View>
        }
          
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  banner: {
    height: responsiveHeight(16),
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 11,
    paddingTop: 5,
    justifyContent: 'space-between',
    shadowOffset: { width: 0, height: 5 }, // Shadow position (x, y)
    shadowOpacity: 0.25, 
    shadowColor: 'rgba(50,50,50,0.6)',
  },
  tab: {
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'transparent',
    width: '30%'
  },
  label: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 8,

  },
  card: {
    width: '33%',
    marginBottom: 17,
    alignItems: 'center'
  },
  container: {
    // backgroundColor: '#F2F2F2',
    height: '100%'
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
    paddingLeft: 10
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
  }
})
export default Search