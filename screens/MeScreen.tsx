import { StackScreenProps } from '@react-navigation/stack'
import { StyleSheet } from 'react-native'
import { useDeviceOrientation } from '@react-native-community/hooks'
import { Image } from 'react-native-elements'
import Constants from 'expo-constants'
import React from 'react'

import { Text, View, ScrollView } from '../components/Themed'
import ItemListItem from '../components/ItemListItem'

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
        <View style={styles.profile}>
          <View style={styles.profileInfo}>
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
          <ItemListItem onPress={() => navigation.push('Setting')} />
          <ItemListItem onPress={() => navigation.push('Setting')} />
          <ItemListItem onPress={() => navigation.push('Setting')} />
          <ItemListItem onPress={() => navigation.push('Setting')} />
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
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    height: 224,
    paddingTop: Constants.statusBarHeight, // 刘海状态栏的安全距离
    paddingBottom: 44,
  },
  profileInfo: { flexDirection: 'row', width: '100%' },
})
