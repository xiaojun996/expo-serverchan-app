import React from 'react'
import { Text as DefaultText, View as DefaultView, ScrollView as DefaultScrollView } from 'react-native'

import { SearchBar as DefaultSearchBar } from 'react-native-elements'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'

/**
 * 主题
 */
export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme()
  const colorFromProps = props[theme]

  if (colorFromProps) {
    return colorFromProps
  } else {
    return Colors[theme][colorName]
  }
}

type ThemeProps = {
  lightColor?: string
  darkColor?: string
}

export type TextProps = ThemeProps & DefaultText['props']
export type ViewProps = ThemeProps & DefaultView['props']
export type ScrollViewProps = ThemeProps & DefaultScrollView['props']
export type SearchBarProps = ThemeProps & DefaultSearchBar['props']

/**
 * 重写 Text 组件，以便更好支持 dark 和 light 模式
 * @param props
 */
export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')

  return <DefaultText style={[{ color }, style]} {...otherProps} />
}

/**
 * 重写 View 组件，以便更好支持 dark 和 light 模式
 * @param props
 */
export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background')

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
}

/**
 * 重写 ScrollView 组件，以便更好支持 dark 和 light 模式
 * @param props
 */
export function ScrollView(props: ScrollViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background')

  return <DefaultScrollView style={[{ backgroundColor }, style]} {...otherProps} />
}

/**
 * 重写 SearchBar 组件，以便更好支持 dark 和 light 模式
 * @param props
 */
export function SearchBar(props: SearchBarProps) {
  const { containerStyle, lightColor, darkColor, ...otherProps } = props
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background')

  return <DefaultSearchBar containerStyle={[{ backgroundColor }, containerStyle]} {...otherProps} />
}
