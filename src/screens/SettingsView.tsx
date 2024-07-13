import { View, Text } from 'react-native'
import React from 'react'
import { SettingsScreenProps } from './screen.types'
import { useRoute } from '@react-navigation/native'

const SettingsView = ({navigation}:SettingsScreenProps) => {
  const route = useRoute()
  console.log(route)
  return (
    <View style={{
      display: 'flex',
      alignItems:'center',
      justifyContent: 'center',
      height: "100%"
    }}>
      <Text>Settings View</Text>
    </View>
  )
}

export default SettingsView