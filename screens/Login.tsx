import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { StyleSheet, View, Text } from 'react-native'
import { useDeviceOrientation } from '@react-native-community/hooks'
import Constants from 'expo-constants'
import { SocialIcon, Button } from 'react-native-elements'

import { RootStackParamList } from '../types'

/**
 * 登录
 */
const LoginScreen = ({ navigation }: StackScreenProps<RootStackParamList, 'NotFound'>) => {
  // 判断是否垂直显示
  const { portrait } = useDeviceOrientation()
  return (
    <View style={[LoginStyles.container, !portrait && { paddingTop: 0 }]}>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <SocialIcon type="twitter" />
        <SocialIcon type="gitlab" />
        <SocialIcon light type="github" />
      </View>

      <Button title="登录" buttonStyle={{ width: 160 }} onPress={() => navigation.replace('Root')} />
    </View>
  )
}

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight, // 刘海状态栏的安全距离
  },
})

export default LoginScreen
