import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { getTrendingMovies } from "@/services/services";
import MovieCard from "@/components/MovieCard";


export default function Index() {
  const router = useRouter();
  let { data: movies, loading: moviesLoading, error: moviesError } = useFetch(() => getTrendingMovies(45));
  if (movies ) {
    for (let movie of movies) {
      if (movie.Poster=="N/A") {
        movies.splice(movies.indexOf(movie),1)
      }
  }}
  return (
    <View className="bg-primary flex-1">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: "18%" }}>
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        {moviesLoading ? (
          <ActivityIndicator size="large" color="#0000ff" className="mt-10 self-center" />
        ) : moviesError ? (
          <Text>An error occured. {moviesError?.message}</Text>
        ) : (<View className="mt-5 flex-1">
          <SearchBar onPress={() => router.push("/search")} />
          <>
            <Text className="text-white text-lg font-bold mt-5 mb-3">
              Latest Movies
            </Text>

            <FlatList
              data={movies}
              renderItem={({ item }) => (
                <MovieCard movie={item} />
              )}
              keyExtractor={(item) => item.imdbID}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: "flex-start",
                gap: 6,
                paddingRight: 5,
                marginBottom: 10
              }}
              className="mt-2 pb-32"
              scrollEnabled={false}
            />
          </>
        </View>)}
      </ScrollView>
    </View>
  );
}
