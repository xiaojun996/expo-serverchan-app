import { StackScreenProps } from '@react-navigation/stack'
import { CommonActions } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import React from 'react'

import { View } from '../components/Themed'
import ViewListItem from '../components/ViewListItem'

import { RootStackParamList } from '../types'

/**
 * 我的资料
 */
export default function MyProfileScreen({
  navigation,
  route: { params },
}: StackScreenProps<RootStackParamList, 'MyProfile'>) {
  return (
    <View style={[styles.container]}>
      <ViewListItem
        title="Profile Photo"
        rightAvatarUrl="https://cdn.jsdelivr.net/gh/xiaojun996/CDN/images/profile/02.比企谷八幡.png"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
})
