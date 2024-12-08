import { View, Text, SafeAreaView, StyleSheet, Animated, Image, TouchableOpacity, TextInput, FlatList, ScrollView, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import Layout from '../HOC/Layout'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { ThemeColor } from '../strings'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../interfaces/types'
import { borderColor } from '../../styles'
import Filterbar from '../Utils/Filterbar'
import ReorderDishCard from '../Utils/Cards/ReorderDishCard'
import { DataItem } from '../../interfaces/Food'

const categories = [
    'All',
    'Beverages',
    'Curries',
    'Sweets',
    'Pizza',
    'Burger',
    'Pav Bhaji',
    'Momos',
    'All',
    'Beverages',
    'Curries',
    'Sweets',
    'Pizza',
    'Burger',
    'Pav Bhaji',
    'Momos',
];

const Tab4 = () => {

    const [activeOption, setActiveOption] = useState('pastOrders')
    const [activeCategory, setActiveCategory] = useState('All')
    
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const scrollY = useRef(new Animated.Value(0)).current;

    const navbarHeight = scrollY.interpolate({
        inputRange: [0, 100], // Adjust the scroll range
        outputRange: [60, 0], // Collapse from 60 to 0
        extrapolate: "clamp",
    });

    const scrollViewRef = useRef<ScrollView>(null);

    const handleCategoryPress = (index: number, category: string) => {
        const categoryWidth = 100; // Width of each category
        const halfScreenWidth = Dimensions.get('window').width / 2;
        const scrollToX = index * categoryWidth - halfScreenWidth + categoryWidth/4.5;

        scrollViewRef.current?.scrollTo({
        x: scrollToX > 0 ? scrollToX : 0, // Prevent scrolling to negative positions
        animated: true,
        });

        setActiveCategory(category)
    };

    const data: DataItem[] = [
        { lab: 'Siya Ram Sweets' },
        { lab: 'Mahaveer Rabri Bhandar' },
        { lab: 'Kanha - Tansukh' },
        { lab: 'Siya Ram Sweets' },
        { lab: 'Siya Ram Sweets' },
    ]

    return (
        <SafeAreaView style={[{ backgroundColor: '#fff'}]}>
            <Layout>
                <Animated.View style={[styles.location, { height: navbarHeight, overflow: 'hidden' }]}>
                    <View style={[{ flexDirection: 'row', alignItems: 'center' }]}>
                        <Image style={[styles.locationIcon, { tintColor: ThemeColor }]} source={require("../../assets/images/location.png")} />
                        <View style={{ marginLeft: 5 }}>
                            <Text style={[styles.locationHeading, { color: '#000' }]}>Thaltej</Text>
                            <Text style={[styles.locationSubHeading, { color: '#000' }]}>Ahmedabad</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <View style={styles.right}>
                            <Image style={styles.userImg} source={require("../../assets/images/userImage.jpeg")} />
                        </View>
                    </TouchableOpacity>
                </Animated.View>

                <View style={styles.searchSection}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search within your orders"
                    />
                </View>

                <ScrollView
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: false } // Set to false for height animations
                    )}
                    style={{paddingBottom: 100}}
                >
                    {/* TOOGLE BAR */}
                    <View style={styles.toogleBar}>
                        <TouchableOpacity onPress={() => setActiveOption('pastOrders')} style={[styles.option, {backgroundColor: activeOption === 'pastOrders'? '#fff' : ''}]}>
                            <View >
                                <Text style={{color: activeOption === 'pastOrders' ? 'rgba(40,40,40,0.8)' : 'rgba(80,80,80,0.6)'}}>Past Orders</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setActiveOption('pastDishes')} style={[styles.option, {backgroundColor: activeOption === 'pastDishes'? '#fff' : ''}]}>
                            <View >
                                <Text style={{color: activeOption === 'pastDishes' ? 'rgba(40,40,40,0.8)' : 'rgba(80,80,80,0.6)'}}>Past Dishes</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* CATEGORIES BAR */}
                    <ScrollView
                        ref={scrollViewRef}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.scrollView}
                        style={{marginVertical: responsiveHeight(1), borderBottomWidth: 1, borderBottomColor: borderColor}}
                    >
                        {categories.map((category, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.category, {borderBottomColor: category === activeCategory ? ThemeColor : 'transparent'}]}
                            onPress={() => handleCategoryPress(index, category)}
                        >
                            <Image style={styles.categoryIcon} source={require("../../assets/images/pizza2.png")}/>
                            <Text style={{color: category === activeCategory ? '#000' : '#rgba(40,40,40,0.7)', fontSize: 13}}>{category}</Text>
                        </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <Filterbar />

                    <View style={{ paddingBottom: responsiveHeight(22)}}>
                        {
                            data.map((dt, index) => {
                                return (
                                    <ReorderDishCard data={dt} key={index}/>
                                )
                            })
                        }
                    </View>
                    {/* <FlatList data={data} renderItem={({item, index}) => {
                        return (
                            <View key={index}>
                                <Text>{item.lab}</Text>
                            </View>
                        )
                    }}/> */}
                        
                </ ScrollView>

            </Layout>
        </SafeAreaView>
    )
}

const borderRadius = 20

const styles = StyleSheet.create({
    scrollView: {
        alignItems: 'center',
        // paddingHorizontal: 10, 
      },
      category: {
        width: 80,
        // height: 40,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#f5f5f5',
        // borderRadius: 20,
        paddingBottom: 10,
        borderWidth: 3,
        borderColor: 'transparent',
        // borderBottomColor: ThemeColor,
      },
      categoryIcon : {
        width: 40,
        height: 40,
        objectFit: 'contain'
      },
      categoryText: {
        fontSize: 16,
        color: '#333',
      },
    toogleBar: {
        borderRadius: borderRadius,
        borderColor: borderColor,
        borderWidth: 1,
        backgroundColor: '#F2F4F7',
        width: '100%',
        marginVertical: responsiveHeight(1),
        padding: 1,
        flexDirection: 'row'
    },
    option: {
        width: '50%',
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius,
        paddingVertical: 10
    },
    right: {
        borderColor: '#fff',
        borderWidth: 1.5,
        borderRadius: '50%',
        overflow: 'hidden',
        // padding:2
    },
    userImg: {
        // width: '100%',
        // height: '100%',
        borderRadius: '50%',
        width: 45,
        height: 45,
        objectFit: 'cover'
    },
    location: {
        // height: responsiveHeight(6),
        marginBottom: 0,
        padding: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    locationIcon: {
        width: 27,
        height: 27,
    },
    listItem: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    locationHeading: {
        fontSize: 19,
        fontWeight: '700'
    },
    locationSubHeading: {
        color: '#fff',
    },
    searchSection: {
        backgroundColor: "#fff",
        padding: 10,
        // borderBottomWidth: 1,
        // borderBottomColor: "#ccc",
        height: responsiveHeight(5),
        borderRadius: 10,
        // zIndex: 1,÷ // Sticks above scrollable content
        shadowOffset: { width: 0, height: 0 }, // Shadow position (x, y)
        shadowOpacity: 0.35,
        shadowColor: 'rgba(150,150,150,0.9)',
        justifyContent: 'center',
        marginVertical: 10
    },
    searchInput: {
        // backgroundColor: "#f5f5f5",
        borderRadius: 8
    }

})

export default Tab4