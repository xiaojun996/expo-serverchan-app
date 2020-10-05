import { ListItem, Image } from 'react-native-elements'
import React from 'react'

import { useThemeColor } from './Themed'

type ThemeProps = {
  lightColor?: string
  darkColor?: string
  rightAvatarUrl?: string
}

type ListItemProps = ThemeProps & ListItem['props']

export default function ViewListItem(props: ListItemProps) {
  const {
    leftIcon,
    rightAvatarUrl,
    titleStyle,
    containerStyle,
    lightColor,
    darkColor,
    onPress,
    title,
    ...otherProps
  } = props

  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'containerBackground')

  return (
    <ListItem
      onPress={onPress}
      containerStyle={[{ backgroundColor }, containerStyle, { width: '100%' }]}
      {...otherProps}
    >
      {leftIcon}

      <ListItem.Content style={titleStyle}>
        <ListItem.Title style={[{ color }]}>{title}</ListItem.Title>
      </ListItem.Content>

      {/* 右边头像链接，有链接才显示 */}
      {rightAvatarUrl && (
        <Image source={{ uri: rightAvatarUrl }} style={{ width: 64, height: 64, marginLeft: 24, borderRadius: 5 }} />
      )}
      <ListItem.Chevron />
    </ListItem>
  )
}
