import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { useDeviceOrientation } from '@react-native-community/hooks'
import Constants from 'expo-constants'
import { ListItem, Image, Text } from 'react-native-elements'
import SettingSvg from '../../../assets/svg/SettingSvg'

/**
 * 我的
 */
const MyScreen = ({ navigation }) => {
  const { portrait } = useDeviceOrientation() // 判断是否垂直显示
  return (
    <ScrollView>
      <View style={[NyStyles.container, !portrait && { paddingTop: 0 }]}>
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
              source={{ uri: 'https://cdn.jsdelivr.net/gh/xiaojun996/CDN/images/wechat-img.png' }}
              style={{ width: 64, height: 64, marginLeft: 24, marginRight: 24, borderRadius: 5 }}
            />

            <View style={{ justifyContent: 'space-between', paddingTop: 4, paddingBottom: 4 }}>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>晓</Text>
              <Text style={{ fontSize: 16, fontWeight: '200' }}>WeChat Id: Aishiteru996</Text>
            </View>
          </View>
        </View>

        {/* 设置 */}
        <View style={{ width: '100%', paddingTop: 8 }}>
          <ListItem onPress={() => navigation.push('Setting')}>
            <SettingSvg style={{ width: 24, height: 24 }} />

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

const NyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
  },
})

export default MyScreen
