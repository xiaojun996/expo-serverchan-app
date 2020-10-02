import React from 'react'
import { StyleSheet, ScrollView, View, Button, Text, TouchableHighlight, Image, Alert } from 'react-native'
import { useDeviceOrientation } from '@react-native-community/hooks'
import Constants from 'expo-constants'

/**
 * 首页
 */
const IndexScreen = ({ navigation }) => {
  const { portrait } = useDeviceOrientation() // 判断是否垂直显示
  const handleCreateAlertList = () =>
    /**
     * 参数一、 alert 标题
     * 参数二、 alert 消息内容
     * 参数三、 数组[]
     */
    Alert.alert('警告标题', '哈哈哈', [
      {
        text: '过会儿～',
        onPress: () => console.info('Ask me later pressed'),
      },
      { text: '好的', onPress: () => console.info('OK Pressed') },
      {
        text: '取消',
        onPress: () => console.info('Cancel Pressed'),
        style: 'cancel',
      },
    ])

  return (
    <ScrollView>
      <View style={[IndexStyles.container, !portrait && { paddingTop: 0 }]}>
        <TouchableHighlight onPress={handleCreateAlertList}>
          <Image
            blurRadius={0}
            source={{
              width: 200,
              height: 300,
              uri: 'https://picsum.photos/200/300',
            }}
          />
        </TouchableHighlight>

        <Text>首页 Screen</Text>

        <Button title="Go to 收藏夹" onPress={() => navigation.navigate('Favorites')} />
        <Button
          title="Go to 详情"
          onPress={() =>
            navigation.navigate('Details', {
              id: 123,
              text: 'ahhahaha',
            })
          }
        />
      </View>
    </ScrollView>
  )
}

const IndexStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight, // 刘海状态栏的安全距离
  },
})

export default IndexScreen
