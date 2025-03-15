import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Movies = () => {
    const id : unknown = useLocalSearchParams();
  return (
    <View>
      <Text> Movies - {id as string}</Text>
    </View>
  )
}

export default Movies