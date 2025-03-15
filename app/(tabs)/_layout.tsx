import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabButton from '@/components/TabButton'
import { icons } from '@/constants/icons'
const _layout = () => {
  return (
    <Tabs
    screenOptions={{
        tabBarShowLabel:false,
        tabBarItemStyle:{
            width:"100%",
            height:"100%",
            justifyContent:"center",
            alignItems:"center"
        },
        tabBarStyle:{
            backgroundColor:"#0f0D23",
            borderRadius:50,
            marginHorizontal:5,
            marginBottom:36,
            height:52,
            position:"absolute",
            overflow:"hidden",
            borderWidth:1,
            borderColor:"#0f0D23"
        }
    }}
    >
        <Tabs.Screen
            name='index'
            options={{
                title:"Home",
                headerShown:false,
                tabBarIcon : ({focused}) => (
                    <TabButton focused={focused} title='Home' icon={icons.home}/>
                )
            }}
        />
        <Tabs.Screen
            name='search'
            options={{
                title:"Search",
                headerShown:false,
                tabBarIcon : ({focused}) => (
                    <TabButton focused={focused} title='Search' icon={icons.search}/>
                )
            }}
        />
        <Tabs.Screen
            name='saved'
            options={{
                title:"Saved",
                headerShown:false,
                tabBarIcon : ({focused}) => (
                    <TabButton focused={focused} title='Saved' icon={icons.save}/>
                )
            }}
        />
        <Tabs.Screen
            name='profile'
            options={{
                title:"Profile",
                headerShown:false,
                tabBarIcon : ({focused}) => (
                    <TabButton focused={focused} title='Profile' icon={icons.person}/>
                )
            }}
        />
    </Tabs>
  )
}

export default _layout