import { View, FlatList } from 'react-native'
import React from 'react'

export default function LoadingSkeleton() {
    return (
        <View className='flex w-[100vw] flex-col gap-2 items-start'>
            <View className='bg-dark-200 my-8 w-[90vw] h-[70px] rounded-full'></View>
            <View className='rounded-full ml-2 w-[100px] h-[20px] bg-dark-200'></View>
            <FlatList
                data={[1, 2, 3, 4, 5, 6]}
                renderItem={() => (
                    <View className='w-[30%] rounded-lg bg-dark-200 h-[190px]'></View>
                )}
                numColumns={3}
                columnWrapperStyle={{
                    justifyContent: "flex-start",
                    gap: 12,
                    paddingRight: 5,
                    marginBottom: 10
                }}
                className="mt-2"
                scrollEnabled={false}
                keyExtractor={(item) => item.toString()}
            />
        </View>
    )
}