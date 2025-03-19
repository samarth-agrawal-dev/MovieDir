import { View, Text, Image, FlatList, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { images } from '@/constants/images'
import MovieCard from '@/components/MovieCard'
import useFetch from '@/services/useFetch'
import { getTrendingMovies, searchMovie } from '@/services/services'
import moviesContext from '@/services/context'
import { icons } from '@/constants/icons'
import SearchBar from '@/components/SearchBar'
import LoadingSkeleton from '@/components/LoadingSkeleton'
const search = () => {
  const [describeText,setDescribeText] = useState("Trending Searches");
  const [userQuery,setUserQuery] = useState("")
  let { movies : originMovies, moviesLoading : originMoviesLoading, moviesError :originMoviesError } = useContext(moviesContext)
  if (originMovies) {
    originMovies = originMovies.slice(0, 6)
  }
  const [movies,setMovies] = useState(originMovies);
  const [moviesLoading,setMoviesLoading] = useState(originMoviesLoading);
  const [moviesError,setMoviesError] = useState(originMoviesError);
  const manageSearch = async () => {
    console.log("This worked.")
    setMovies(await searchMovie(userQuery,"s"));
    setDescribeText(`Search results for ${userQuery}`);
    setUserQuery("");
  }
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className='flex-1 absolute w-full z-0' resizeMode='cover' />
      <View className='items-center w-full flex-row justify-center mt-20'>
        <Image source={icons.logo} className='w-12 h-10' />
      </View>
      {moviesLoading ? (
        <View className='w-[100%] mx-5 justify-center'>
          <LoadingSkeleton />
        </View>
      ) : moviesError ? (
        <Text>An error occured. {moviesError?.message}</Text>
      ) : (<FlatList
        data={movies}
        renderItem={({ item }) => (
          <MovieCard movie={item} />
        )}
        scrollEnabled={true}
        keyExtractor={(item) => (item.imdbID)}
        className='px-5'
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16
        }}
        contentContainerStyle={{
          paddingBottom: 100,
          justifyContent:"center",
          gap:12
        }}
        ListHeaderComponent={<>
          <View className='my-5 flex-col'>
            <SearchBar onPress={() => { }} userQuery={userQuery} autofocus={true} setUserQuery={setUserQuery}/>
            <TouchableOpacity
            onPress={manageSearch}
            className='bg-red-200 w-20 h-5'><Text className='text-white'>Submit</Text></TouchableOpacity>
          </View>
          <Text className="text-white text-lg font-bold mt-5 mb-3">
            {describeText}
          </Text>
        </>}
      />)}
    </View>
  )
}

export default search