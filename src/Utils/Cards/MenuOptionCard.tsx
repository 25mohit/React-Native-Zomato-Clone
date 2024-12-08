import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import CardLayout from '../../HOC/CardLayout'
import { ThemeColor } from '../../strings'
import { borderColor, borderRadius, commonHeight } from '../../../styles'

interface MenuInterface{
    title: string,
    menuOptions?: any
}

const MenuOptionCard:React.FC<MenuInterface> = ({ title, menuOptions }) => {
  return (
    <View style={styles.card}>
        <View style={{borderLeftWidth: 3, borderLeftColor: ThemeColor, marginBottom: 12}}>
            <Text style={styles.title}>{title}</Text>
        </View>
        {
            menuOptions?.map((item: any, index: number) => {
                return (
                    <TouchableOpacity key={index}>
                        <View style={{flexDirection: 'row', width: '100%', justifyContent:'space-between', marginVertical: 7, paddingBottom: 7, alignItems:'center', borderBottomColor: borderColor, borderBottomWidth: index < menuOptions?.length-1 ? 1 : 0, marginBottom: index == menuOptions?.length-1 ? -5 : null}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View style={styles.icon}>
                                    <Image style={styles.ic} source={require("../../../assets/images/bookmark.png")}/>
                                </View>
                                <Text style={styles.label}>{item.label}</Text>
                            </View>
                            <Image style={styles.riIcon} source={require("../../../assets/images/right.png")}/>
                        </View>
                    </TouchableOpacity>
                )
            })
        }
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        fontWeight: '700',
        marginLeft: 10
    },
    riIcon: {
        width: 13,
        height: 13
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
    card: {
        borderRadius: borderRadius,
        marginVertical: commonHeight,
        backgroundColor: '#fff',
        padding: 15,
        shadowOffset: { width: 0, height: 0 }, // Shadow position (x, y)
        shadowOpacity: 0.20, 
        shadowColor: 'rgba(150,150,150,0.2)',
    },

    label: {
        fontWeight: 500,
        fontSize: 15,
        marginLeft: 9
    }
})

export default MenuOptionCard