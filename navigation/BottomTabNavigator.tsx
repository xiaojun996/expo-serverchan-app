import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'

import IndexScreen from '../screens/IndexScreen'
import TabOneScreen from '../screens/TabOneScreen'
import TabTwoScreen from '../screens/TabTwoScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import MeScreen from '../screens/MeScreen'

import FavoritesSvg from '../assets/svgs/FavoritesSvg'
import MeSvg from '../assets/svgs/MeSvg'
import IndexSvg from '../assets/svgs/IndexSvg'

import { BottomTabParamList,IndexParamList, TabOneParamList, TabTwoParamList, FavoritesParamList, MeParamList } from '../types'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

/**
 * 底部导航标签按钮
 */
export default function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="Index"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint, labelStyle: { fontSize: 14 } }}
    >
      <BottomTab.Screen
        name="Index"
        component={IndexNavigator}
        options={{
          title: 'Index',
          tabBarBadge: undefined,
          tabBarIcon: ({ size, color }) => <IndexSvg width={size} height={size} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          title: '标签一',
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          title: '标签二',
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={FavoritesNavigator}
        options={{
          title: 'Favorites',
          tabBarBadge: `···`,
          tabBarIcon: ({ size, color }) => <FavoritesSvg width={size} height={size} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Me"
        component={MeNavigator}
        options={{
          title: 'Me',
          tabBarBadge: `1`,
          tabBarIcon: ({ size, color }) => <MeSvg width={size} height={size} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )
}

// You can explore the built-in icon families and icons on the web at:
// 您可以在以下位置浏览网络上的内置图标系列和图标:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// 每个标签都有自己的导航堆栈，您可以在此处阅读有关此模式的更多信息：:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

/**
 * 首页 堆栈
 */
const IndexStack = createStackNavigator<IndexParamList>()

function IndexNavigator() {
  return (
    <IndexStack.Navigator>
      <IndexStack.Screen name="IndexScreen" component={IndexScreen} options={{ headerTitle: 'Index', headerShown: false }} />
    </IndexStack.Navigator>
  )
}

/**
 * 标签一 堆栈
 */
const TabOneStack = createStackNavigator<TabOneParamList>()

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen name="TabOneScreen" component={TabOneScreen} options={{ headerTitle: 'Tab One Title' }} />
    </TabOneStack.Navigator>
  )
}

/**
 * 标签二 堆栈
 */
const TabTwoStack = createStackNavigator<TabTwoParamList>()

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen name="TabTwoScreen" component={TabTwoScreen} options={{ headerTitle: 'Tab Two Title' }} />
    </TabTwoStack.Navigator>
  )
}

/**
 * 收藏 堆栈
 */
const FavoritesStack = createStackNavigator<FavoritesParamList>()

function FavoritesNavigator() {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{ headerTitle: 'Favorites', headerShown: false }}
      />
    </FavoritesStack.Navigator>
  )
}

/**
 * 我的 堆栈
 */
const MeStack = createStackNavigator<MeParamList>()

function MeNavigator() {
  return (
    <MeStack.Navigator>
      <MeStack.Screen name="MeScreen" component={MeScreen} options={{ headerTitle: 'Me', headerShown: false }} />
    </MeStack.Navigator>
  )
}
