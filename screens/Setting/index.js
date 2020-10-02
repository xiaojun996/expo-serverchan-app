import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useDeviceOrientation } from '@react-native-community/hooks'
import Constants from 'expo-constants'
import { ListItem } from 'react-native-elements'
import { StackActions, NavigationActions } from 'react-navigation'

const resetAction = StackActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Login' }), //Login 要跳转的路由
  ],
})

/**
 * 设置
 */
const SettingScreen = ({ navigation, route: { params = {} } }) => {
  const { portrait } = useDeviceOrientation() // 判断是否垂直显示
  return (
    <View style={[SettingStyles.container, !portrait && { paddingTop: 0 }]}>
      <ListItem containerStyle={{ width: '100%' }} onPress={() => resetAction()}>
        <ListItem.Content style={{ alignItems: 'center' }}>
          <ListItem.Title>{'Log Out'}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </View>
  )
}

const SettingStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingTop: Constants.statusBarHeight, // 刘海状态栏的安全距离
  },
})

export default SettingScreen
