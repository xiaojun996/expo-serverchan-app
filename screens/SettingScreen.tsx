import { useDeviceOrientation } from '@react-native-community/hooks'
import { StackScreenProps } from '@react-navigation/stack'
import { CommonActions } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'
import React from 'react'

import { View } from '../components/Themed'

import { RootStackParamList } from '../types'

/**
 * 设置
 */
export default function SettingScreen({
  navigation,
  route: { params },
}: StackScreenProps<RootStackParamList, 'Setting'>) {
  const { portrait } = useDeviceOrientation() // 判断是否垂直显示

  return (
    <View style={[styles.container, !portrait && { paddingTop: 0 }]}>
      <ListItem
        containerStyle={{ width: '100%' }}
        onPress={() =>
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            })
          )
        }
      >
        <ListItem.Content style={{ alignItems: 'center' }}>
          <ListItem.Title>{'Log Out'}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingTop: 5,
  },
})
