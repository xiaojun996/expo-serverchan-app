import { StackScreenProps } from '@react-navigation/stack'
import { CommonActions } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import React from 'react'

import { View } from '../components/Themed'
import ViewListItem from '../components/ViewListItem'

import { RootStackParamList } from '../types'

/**
 * 设置
 */
export default function SettingScreen({
  navigation,
  route: { params },
}: StackScreenProps<RootStackParamList, 'Setting'>) {
  return (
    <View style={[styles.container]}>
      <ViewListItem
        titleStyle={{ alignItems: 'center' }}
        title="Log Out"
        onPress={() =>
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            })
          )
        }
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
    paddingTop: 5,
  },
})
