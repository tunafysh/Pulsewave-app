import { Tabs } from 'expo-router';
import React, { useEffect } from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import * as Filesystem from "expo-file-system";
import { useColorScheme, Text, View } from 'react-native';
import { checkFileExistsSync } from '../actions';
import * as Router from "expo-router"
import * as Haptics from "expo-haptics"

export default function TabLayout() {
  return (
      <Tabs
        screenOptions={{
          tabBarLabelStyle: { display: 'none' },
          tabBarStyle: {
            elevation: 0,
            position: 'absolute',
            backgroundColor: useColorScheme() == "dark"? "#030707": "#F8FCFC",
            borderColor: useColorScheme() == "dark"? "#199A93": '#42C2BE',
            borderTopWidth: 3,
            borderLeftWidth: 3,
            borderRightWidth: 3,
            height: 60,
            borderTopStartRadius: 16,
            borderTopEndRadius: 16,
          },
          tabBarVisibilityAnimationConfig: {
            show: { animation: 'spring'},
            hide: { animation: 'spring'},
          },
          tabBarActiveTintColor: useColorScheme() == "dark"? "#199A93": '#42C2BE',
          headerShown: false,
        }}
        >
        <Tabs.Screen 
          name="index"
          options={{
            title: undefined,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                size={30}
                name={focused ? 'home' : 'home-outline'}
                color="#199A93"
                onPress={() => {
                  Router.router.push('/');
                }}
                onLongPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).then(() => {
                    Router.router.replace({ pathname: '/(tabs)/', params: {"replace": "true"} });
                  })
                  })
                }}
              />
            ),
          }}
          />
          <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon size={30} name={focused ? 'search' : 'search'} color="#199A93" onPress={() => Router.router.push('/(tabs)/search')} onLongPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).then(() => {
                  Router.router.replace({ pathname: '/(tabs)/search', params: {"focus": "true"} });
                })
              }} />
              
            ),
          }}
          />
        <Tabs.Screen
          name="create"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon size={30} name="add-outline" color="#199A93" onPress={() => Router.router.push('/(tabs)/create')} onLongPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).then(() => {
                  Router.router.replace({ pathname: '/(tabs)/create', params: {"camera": "true"} });
                })
              
              } />
            ),
          }}
          />
        <Tabs.Screen
          name="notifications"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon size={30} name={focused ? 'notifications' : 'notifications-outline'} color="#199A93" onPress={() => Router.router.push('/(tabs)/notifications')} onLongPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).then(() => {
                  Router.router.replace({ pathname: '/(tabs)/notifications', params: {"clean": "true"} });
                })
              }} />
            ),
          }}
          />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon size={30} name={focused ? 'person' : 'person-outline'} color="#199A93" onPress={() => Router.router.push('/(tabs)/profile')} onLongPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).then(() => {
                  Router.router.replace({ pathname: '/(tabs)/profile', params: {"settings": "true"} });
                })
              }} />
            ),
          }}
        />
        
      </Tabs>
  );
}

