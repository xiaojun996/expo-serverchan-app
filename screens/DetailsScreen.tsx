import { ScrollView, View, Button, Text, TextInput } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { CommonActions } from '@react-navigation/native'
import React, { useState } from 'react'

import { RootStackParamList } from '../types'

/**
 * 详情
 */
export default function DetailsScreen({
  navigation,
  route: { params },
}: StackScreenProps<RootStackParamList, 'Details'>) {
  const { text }: any = params

  const [postText, setPostText] = useState(text)

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
            navigation.dispatch(
              CommonActions.navigate({
                name: 'Favorites',
                params: {
                  post: postText,
                },
              })
            )
          }}
        />

        <Button
          title="去首页"
          onPress={() =>
            navigation.dispatch(
              CommonActions.navigate({
                name: 'Index',
              })
            )
          }
        />

        <Button
          title="去收藏页面"
          onPress={() =>
            navigation.dispatch(
              CommonActions.navigate({
                name: 'Favorites',
              })
            )
          }
        />

        <Button
          title="去我的页面"
          onPress={() =>
            navigation.dispatch(
              CommonActions.navigate({
                name: 'Me',
              })
            )
          }
        />

        <Button title="新建详情页面" onPress={() => navigation.push('Details')} />

        <Button
          title="返回"
          onPress={() => {
            navigation.dispatch(CommonActions.goBack())
          }}
        />

        <Button title="返回堆栈中的第一个屏幕" onPress={() => navigation.popToTop()} />
      </View>
    </ScrollView>
  )
}
