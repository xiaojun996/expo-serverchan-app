import { StackScreenProps } from '@react-navigation/stack'
import { StyleSheet, ScrollView, View } from 'react-native'
import { useDeviceOrientation } from '@react-native-community/hooks'
import { ListItem, Image, Text } from 'react-native-elements'
import Constants from 'expo-constants'
import React from 'react'

import SettingSvg from '../assets/svgs/SettingSvg'

import { RootStackParamList } from '../types'

/**
 * 我的
 */
export default function MeScreen({ navigation }: StackScreenProps<RootStackParamList, 'Root'>) {
  const { portrait } = useDeviceOrientation() // 判断是否垂直显示
  return (
    <ScrollView>
      <View style={[styles.container, !portrait && { paddingTop: 0 }]}>
        {/* 顶部头像、姓名、二维码等 */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
            width: '100%',
            height: 224,
            paddingTop: Constants.statusBarHeight, // 刘海状态栏的安全距离
            paddingBottom: 44,
            backgroundColor: '#ffffff',
          }}
        >
          <View style={{ flexDirection: 'row', width: '100%' }}>
            <Image
              source={{ uri: 'https://cdn.jsdelivr.net/gh/xiaojun996/CDN/images/profile/02.比企谷八幡.png' }}
              style={{ width: 64, height: 64, marginLeft: 24, marginRight: 24, borderRadius: 5 }}
            />

            <View style={{ justifyContent: 'space-between', paddingTop: 4, paddingBottom: 4 }}>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>晓</Text>
              <Text style={{ fontSize: 16, fontWeight: '200' }}>WeChat ID: Aishiteru996</Text>
            </View>
          </View>
        </View>

        {/* NotFound */}
        <View style={{ width: '100%', paddingTop: 8 }}>
          <ListItem onPress={() => navigation.push('Setting')}>
            <SettingSvg width={24} height={24} />

            <ListItem.Content>
              <ListItem.Title>{'Setting'}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
  },
})
