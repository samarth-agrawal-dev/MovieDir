import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { icons } from '@/constants/icons'

const MovieCard = ({ movie }: { movie: Movie }) => {
    return (
        <Link href={`/movie/${movie.Title}`} asChild>
            <TouchableOpacity className='w-[33%]'>
                <Image
                    source={{ uri: movie.Poster }}
                    className='w-full h-48 rounded-lg'
                    resizeMode='cover'
                />
                <View className='flex-col gap-1 mt-1'>
                    <Text className='text-[12px] font-bold text-white mt-2 text-center' numberOfLines={1}>{movie.Title}</Text>
                    <View className='flex-row items-center justify-start gap-x-2'>
                        <Image source={icons.star} className='size-4' />
                        <Text className='text-xs text-white font-bold uppercase w-12'>{movie.imdbRating !== "N/A" ? movie.imdbRating : "N/A"}</Text>
                    </View>
                    <View className='flex-row items-center justify-between'>
                        <Text className='text-xs mt-1 text-light-300 font-medium'>{movie.Year}</Text>
                        <Text className='text-xs mt-1 w-12 text-light-300 font-medium'>{movie.Type[0].toUpperCase() + movie.Type.slice(1)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Link>
    )
}

export default MovieCard