import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { PropsWithChildren, ReactNode } from 'react'
import { borderRadius, commonHeight } from '../../styles'

interface CardInterface {
    children: ReactNode,
    width?: number
}

const CardLayout: React.FC<CardInterface> = props => {
    const width: number = props?.width || 100    
    
  return (
    <View style={[{marginVertical: commonHeight, width: `${width}%`}, styles.card]}>
        <TouchableOpacity>
        {props.children}
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    card: {
        borderRadius: borderRadius,
        marginVertical: commonHeight,
        backgroundColor: '#fff',
        padding: 15,
        shadowOffset: { width: 0, height: 0 }, // Shadow position (x, y)
        shadowOpacity: 0.20, 
        shadowColor: 'rgba(150,150,150,0.2)',
    }
})

export default CardLayout