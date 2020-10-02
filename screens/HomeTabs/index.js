import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import IndexScreen from './IndexScreen'
import FavoritesScreen from './FavoritesScreen'
import MyScreen from './MyScreen'

import IndexSvg from '../../assets/svg/IndexSvg'
import FavoritesSvg from '../../assets/svg/FavoritesSvg'
import MySvg from '../../assets/svg/MySvg'

/**
 * 菜单栏页面
 */
const Tab = createBottomTabNavigator()
const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Index"
        component={IndexScreen}
        options={{
          title: '首页',
          tabBarBadge: 1,
          activeTintColor: 'dodgerblue',
          inactiveTintColor: 'gray',
          tabBarIcon: (focused, color, size) => <IndexSvg style={{ width: size, height: size }} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: '收藏夹',
          tabBarBadge: `···`,
          activeTintColor: 'dodgerblue',
          inactiveTintColor: 'gray',
          tabBarIcon: (focused, color, size) => <FavoritesSvg style={{ width: size, height: size }} />,
        }}
      />
      <Tab.Screen
        name="My"
        component={MyScreen}
        options={{
          title: '我的',
          activeTintColor: 'dodgerblue',
          inactiveTintColor: 'gray',
          tabBarIcon: (focused, color, size) => <MySvg style={{ width: size, height: size }} />,
        }}
      />
    </Tab.Navigator>
  )
}

export default HomeTabs
