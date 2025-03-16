import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Movies = () => {
    const {title} = useLocalSearchParams();
  return (
    <View>
      <Text> Movies - {title}</Text>
    </View>
  )
}

export default Movies