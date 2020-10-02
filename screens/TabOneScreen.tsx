import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Alert } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'

import { RootStackParamList } from '../types'

export default function TabOneScreen({ navigation, route: { params } }: StackScreenProps<RootStackParamList, 'Root'>) {
  const handleCreateAlertList = () =>
    /**
     * 参数一、 alert 标题
     * 参数二、 alert 消息内容
     * 参数三、 数组[]
     */
    Alert.alert('弹窗', '哈哈哈', [
      {
        text: 'ok',
        onPress: () => console.info('Cancel Pressed'),
        style: 'cancel',
      },
    ])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>标签一</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.js" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
