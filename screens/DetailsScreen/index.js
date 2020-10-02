import React, { useState } from 'react'
import { ScrollView, View, Button, Text, TextInput } from 'react-native'

/**
 * 详情
 */
const DetailsScreen = ({ navigation, route: { params = {} } }) => {
  const [postText, setPostText] = useState(params?.text || '')
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>详情 Screen</Text>

        <TextInput
          multiline
          placeholder="你在想什么?"
          style={{ height: 50, padding: 10, backgroundColor: 'white' }}
          value={postText}
          onChangeText={setPostText}
        />
        <Button
          title="完成，传递参数到收藏夹"
          onPress={() => {
            navigation.navigate('Favorites', { post: postText })
          }}
        />

        <Button title="去首页" onPress={() => navigation.navigate('Home')} />
        <Button title="去收藏页面" onPress={() => navigation.navigate('Favorites')} />
        <Button title="去我的页面" onPress={() => navigation.navigate('My')} />
        <Button
          title="新建详情页面"
          onPress={() =>
            navigation.push('Details', {
              title: '新的详情',
            })
          }
        />
        <Button
          title="返回"
          onPress={() => {
            navigation.goBack()
          }}
        />
        <Button title="返回堆栈中的第一个屏幕" onPress={() => navigation.popToTop()} />
      </View>
    </ScrollView>
  )
}

export default DetailsScreen
