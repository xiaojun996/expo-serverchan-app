import { useDeviceOrientation } from '@react-native-community/hooks'
import { SocialIcon, Button } from 'react-native-elements'
import { StackScreenProps } from '@react-navigation/stack'
import { StyleSheet, View } from 'react-native'
import React from 'react'

import { RootStackParamList } from '../types'

/**
 * 登录
 */
export default function LoginScreen({ navigation }: StackScreenProps<RootStackParamList, 'Login'>) {
  // 判断是否垂直显示
  const { portrait } = useDeviceOrientation()
  return (
    <View style={[styles.container, !portrait && { paddingTop: 0 }]}>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <SocialIcon type="twitter" />
        <SocialIcon type="gitlab" />
        <SocialIcon light type="github" />
      </View>

      <Button title="登录" buttonStyle={{ width: 160 }} onPress={() => navigation.replace('Root')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
})
