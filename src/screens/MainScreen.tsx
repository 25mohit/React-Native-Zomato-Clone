import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { ThemeColor } from '../strings'
import Tab1 from '../tabs/Tab1'
import Tab2 from '../tabs/Tab2'
import Tab3 from '../tabs/Tab3'
import Tab4 from '../tabs/Tab4'

const MainScreen = () => {
    const [tabSelected, setTabSelected] = useState(0)

    return (
        <View style={styles.container}>
            {tabSelected === 0 ? <Tab1 /> : tabSelected === 1 ? <Tab4 /> : tabSelected === 2 ? <Tab2 /> : <Tab3 />}
            <View style={styles.bottomNavigation}>
                <View style={styles.tabCont}>
                    <TouchableOpacity style={[styles.tab, {borderColor: tabSelected === 0 ? ThemeColor : '#fff'} ]} onPress={() => setTabSelected(0)}>
                        <Image style={[styles.tabIcon, { tintColor: tabSelected === 0 ? ThemeColor : 'rgba(70,70,70,0.5)'}]} source={require("../../assets/images/ic1.png")}/>
                        <Text style={[{color: tabSelected === 0 ? ThemeColor : ''}]}>Delivery</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabCont}>
                    <TouchableOpacity style= {[styles.tab, {borderColor: tabSelected === 1 ? ThemeColor : '#fff'} ]} onPress={() => setTabSelected(1)}>
                        <Image style={[styles.tabIcon, { tintColor: tabSelected === 1 ? ThemeColor : 'rgba(70,70,70,0.5)'}]} source={require("../../assets/images/ic2.png")}/>
                        <Text style={[{color: tabSelected === 1 ? ThemeColor : ''}]}>Dining</Text>
                    </TouchableOpacity>
                </View> 
                <View style={styles.tabCont}>
                    <TouchableOpacity style= {[styles.tab, {borderColor: tabSelected === 2 ? ThemeColor : '#fff'} ]} onPress={() => setTabSelected(2)}>
                        <Image style={[styles.tabIcon, { tintColor: tabSelected === 2 ? ThemeColor : 'rgba(70,70,70,0.5)'}]} source={require("../../assets/images/reorder.png")}/>
                        <Text style={[{color: tabSelected === 2 ? ThemeColor : ''}]}>Reorder</Text>
                    </TouchableOpacity>
                </View> 
                <View style={styles.tabCont}>
                    <TouchableOpacity style={[styles.tab, {borderColor: tabSelected === 3 ? ThemeColor : '#fff'} ]} onPress={() => setTabSelected(3)}>
                        <Image style={[styles.tabIcon, { tintColor: tabSelected === 3 ? ThemeColor : 'rgba(70,70,70,0.5)'}]} source={require("../../assets/images/ic3.png")}/>
                        <Text style={[{color: tabSelected === 3 ? ThemeColor : ''}]}>Zomaland</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bottomNavigation: {
        position: 'absolute',
        bottom: 0,
        height: responsiveHeight(9),
        paddingBottom: responsiveHeight(1 ),
        width:'100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        shadowOffset: { width: 0, height: -7 }, // Shadow position (x, y)
        shadowOpacity: 0.35, 
        shadowColor: 'rgba(150,150,150,0.4)',
        // borderWidth: 1,
        // borderTopColor: 'rgba(40,40,40,0.1)'
    },
    tabCont: {
        width: '20%',
        alignItems: 'center',
    },
    tab: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 2
    },
    tabIcon: {
        width: responsiveWidth(6),
        height: responsiveWidth(6),
    }
})

export default MainScreen