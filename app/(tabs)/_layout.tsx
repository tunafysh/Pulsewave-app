import { Tabs } from 'expo-router';
import React, { useEffect } from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import * as Filesystem from "expo-file-system";
import { useColorScheme } from 'react-native';
import { checkFileExistsSync } from '../actions';
import * as Router from "expo-router"

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
              <TabBarIcon size={30} name={focused ? 'home' : 'home-outline'} color="#199A93" />
            ),
          }}
          />
        <Tabs.Screen
          name="create"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon size={30} name={focused ? 'search-circle' : 'search-circle-outline'} color="#199A93" />
            ),
          }}
          />
        <Tabs.Screen
          name="notifications"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon size={30} name="add-outline" color="#199A93" />
            ),
          }}
          />
        <Tabs.Screen
          name="friends"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon size={30} name={focused ? 'home' : 'home-outline'} color="#199A93" />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon size={30} name={focused ? 'code-slash' : 'code-slash-outline'} color="#199A93" />
            ),
          }}
          />
      </Tabs>
  );
}

