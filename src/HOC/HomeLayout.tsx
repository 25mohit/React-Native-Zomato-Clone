import React, { ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

interface HomeInterace{
    children: ReactNode 
}

const HomeLayout:React.FC<HomeInterace> = props => {
    
  return (
    <SafeAreaView style={{paddingHorizontal: 8}}>{props.children}</SafeAreaView>
  )
}

export default HomeLayout