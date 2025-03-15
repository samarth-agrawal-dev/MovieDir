import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'

const TabButton = ({ title, icon, focused }: { title: string, icon: any, focused: boolean }) => {
    return (
        <>
            {focused ? (
                <ImageBackground
                    source={images.highlight}
                    className='flex flex-row gap-2 w-full flex-1 min-w-[95px] min-h-[51.5px] mt-4 justify-center items-center rounded-full overflow-hidden'>
                    <Image
                        source={icon}
                        tintColor="#151312"
                        className='size-5' />
                    <Text className='text-secondary text-base font-semibold'>{title}</Text>
                </ImageBackground>)
                : <View className='size-full justify-center items-center mt-4 rounded-full'>
                    <Image
                    source={icon}
                    tintColor="#A8B5DB"
                    className='size-5' />
                </View>}
        </>
    )
}

export default TabButton