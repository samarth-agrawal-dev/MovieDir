import { View, Text, Image, TextInput } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { icons } from '@/constants/icons'
const SearchBar = ({onPress,userQuery,setUserQuery,autofocus} : {onPress : () => void, userQuery:string,setUserQuery:React.Dispatch<React.SetStateAction<string>>, autofocus:boolean}) => {
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (inputRef.current && autofocus) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <Image source={icons.search} className='size-5' resizeMode='contain' tintColor="#ab8bff"/>
      <TextInput
        onPress={onPress}
        onChangeText={setUserQuery}
        placeholder='Search for a movie.'
        value={userQuery}
        ref={inputRef}
        placeholderTextColor="#a8b5db"
        className='flex-1 ml-2 text-white'
      />
    </View>
  )
}

export default SearchBar