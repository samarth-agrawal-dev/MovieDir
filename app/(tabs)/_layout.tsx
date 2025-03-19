import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabButton from '@/components/TabButton'
import { icons } from '@/constants/icons'
import moviesContext from '@/services/context'
import useFetch from '@/services/useFetch'
import { getTrendingMovies } from '@/services/services'
const _layout = () => {
    let { data: movies, loading: moviesLoading, error: moviesError } = useFetch(() => getTrendingMovies(49));
    if (movies) {
        for (let movie of movies) {
            if (movie.Poster == "N/A") {
                movies.splice(movies.indexOf(movie), 1)
            }
        }
    }
    return (
        <moviesContext.Provider value={{movies,moviesLoading,moviesError}}>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarItemStyle: {
                        width: "100%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    tabBarStyle: {
                        backgroundColor: "#0f0D23",
                        borderRadius: 50,
                        marginHorizontal: 5,
                        marginBottom: 36,
                        height: 52,
                        position: "absolute",
                        overflow: "hidden",
                        borderWidth: 1,
                        borderColor: "#0f0D23"
                    }
                }}
            >
                <Tabs.Screen
                    name='index'
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabButton focused={focused} title='Home' icon={icons.home} />
                        )
                    }}
                />
                <Tabs.Screen
                    name='search'
                    options={{
                        title: "Search",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabButton focused={focused} title='Search' icon={icons.search} />
                        )
                    }}
                />
                <Tabs.Screen
                    name='saved'
                    options={{
                        title: "Saved",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabButton focused={focused} title='Saved' icon={icons.save} />
                        )
                    }}
                />
                <Tabs.Screen
                    name='profile'
                    options={{
                        title: "Profile",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabButton focused={focused} title='Profile' icon={icons.person} />
                        )
                    }}
                />
            </Tabs>
        </moviesContext.Provider>
    )
}

export default _layout