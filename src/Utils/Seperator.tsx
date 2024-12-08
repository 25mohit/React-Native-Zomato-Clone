import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'

interface SeperatorInterface{
    label: string,
    lineWidth: any
}

const Seperator:React.FC<SeperatorInterface> = ({ label, lineWidth }) => {
  return (
    <View style={styles.devider}>
        <View style={[styles.deviderView, { marginRight: 0, width: lineWidth }]}></View>
        <Text style={styles.deviderLabel}>{label}</Text>
        <View style={[styles.deviderView, { marginLeft: 0, width: lineWidth }]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  devider: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginVertical: responsiveHeight(3),
    justifyContent: 'space-evenly'
},
deviderView: {
    height: 1,
    backgroundColor: '#bebebe',
    width: '30%',
    opacity: 0.5
},
deviderLabel: {
    fontSize: responsiveFontSize(1.9),
    color: 'rgba(30,30,30,0.5)'
},
})
export default Seperator