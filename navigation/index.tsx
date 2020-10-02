import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { ColorSchemeName } from 'react-native'

import { RootStackParamList } from '../types'
import Login from '../screens/LoginScreen'
import BottomTabNavigator from './BottomTabNavigator'
import NotFoundScreen from '../screens/NotFoundScreen'
import LinkingConfiguration from './LinkingConfiguration'

/**
 * 如果您不熟悉React Navigation，建议您进行
 * <基础知识> 指南： https://reactnavigation.org/docs/getting-started
 */
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  )
}

/**
 * 根堆栈导航器通常用于在所有其他内容之上显示模式
 * 在这里阅读更多: https://reactnavigation.org/docs/modal
 */
const Stack = createStackNavigator<RootStackParamList>()

/**
 * 根导航器
 */
function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      {/* 登录 页面 */}
      <Stack.Screen name="Login" component={Login} options={{ headerShown: true, headerTitle: '登录' }} />
      {/* 根 页面 */}
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      {/* 没有找到 页面 */}
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ headerShown: true, headerTitle: '诶呀！没找到！' }} />
    </Stack.Navigator>
  )
}
