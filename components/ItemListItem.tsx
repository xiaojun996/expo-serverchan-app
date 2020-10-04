import { ListItem } from 'react-native-elements'
import SettingSvg from '../assets/svgs/SettingSvg'
import React from 'react'

import { useThemeColor } from './Themed'

type ThemeProps = {
  lightColor?: string
  darkColor?: string
}

type ListItemProps = ThemeProps & ListItem['props']

export default function ItemListItem(props: ListItemProps) {
  const { style, lightColor, darkColor, onPress } = props
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'containerBackground')

  return (
    <ListItem onPress={onPress} containerStyle={[{ backgroundColor }, style]}>
      <SettingSvg width={24} height={24} />

      <ListItem.Content>
        <ListItem.Title style={[{ color }]}>{'Setting'}</ListItem.Title>
      </ListItem.Content>

      <ListItem.Chevron />
    </ListItem>
  )
}
