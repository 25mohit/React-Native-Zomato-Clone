import React, { ReactNode } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface HomeInterace{
    children: ReactNode 
}

const Layout:React.FC<HomeInterace> = props => {
    
  return (
    <View style={{paddingHorizontal: 12}}>{props.children}</View>
  )
}

export default Layout