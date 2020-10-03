import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { SearchBar, ListItem, Avatar } from 'react-native-elements'
import { useDeviceOrientation } from '@react-native-community/hooks'
import { LinearGradient } from 'expo-linear-gradient'
import Constants from 'expo-constants'

import { ScrollView, View } from '../components/Themed'

/**
 * 收藏夹
 */
export default function FavoritesScreen() {
  // 判断是否垂直显示
  const { portrait } = useDeviceOrientation()
  const [search, setSearch] = useState('')
  const updateSearch = (search: any) => setSearch(search)

  interface ListItem {
    title: string
    subtitle: string
    leftAvatar: object
    titleStyle: object
  }

  const List: ListItem[] = [
    {
      title: '菜月昴（ナツキ・スバル）',
      subtitle: '主人公，17岁→18岁，高中三年级，经常逃课，被当作“惧学症学生”。',
      leftAvatar: {
        rounded: true,
        source: {
          uri:
            'https://bkimg.cdn.bcebos.com/pic/6c224f4a20a44623868034569022720e0cf3d7b8?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U3Mg==,g_7,xp_5,yp_5',
        },
      },
      titleStyle: { color: 'white', fontWeight: 'bold' },
    },
    {
      title: '爱蜜莉雅（エミリア）',
      subtitle: '女主角，也译作艾米莉娅。梦幻的银发，如雪的肌肤，魅惑的蓝紫色瞳孔，以及如精灵的尖耳',
      leftAvatar: {
        rounded: true,
        source: {
          uri:
            'https://bkimg.cdn.bcebos.com/pic/58ee3d6d55fbb2fbc96fc926474a20a44623dcba?x-bce-process=image/resize,m_lfit,w_220,limit_1',
        },
      },
      titleStyle: { color: 'white', fontWeight: 'bold' },
    },
    {
      title: '帕克（パック）',
      subtitle: '“永久冻土”的终焉之兽的古老大精灵',
      leftAvatar: {
        rounded: true,
        source: {
          uri:
            'https://bkimg.cdn.bcebos.com/pic/55e736d12f2eb93848cfe7c6dd628535e5dd6f60?x-bce-process=image/resize,m_lfit,w_220,limit_1',
        },
      },
      titleStyle: { color: 'white', fontWeight: 'bold' },
    },
    {
      title: '雷姆（レム）',
      subtitle: '鬼族，拉姆的妹妹，特征是蓝发与右刘海。',
      leftAvatar: {
        rounded: true,
        source: {
          uri:
            'https://bkimg.cdn.bcebos.com/pic/14ce36d3d539b60092419183e150352ac65cb773?x-bce-process=image/resize,m_lfit,w_220,limit_1',
        },
      },
      titleStyle: { color: 'white', fontWeight: 'bold' },
    },
    {
      title: '拉姆（ラム）',
      subtitle: '鬼族，雷姆的姐姐，特征是红发与左刘海。',
      leftAvatar: {
        rounded: true,
        source: {
          uri:
            'https://bkimg.cdn.bcebos.com/pic/dc54564e9258d10941023786d958ccbf6c814d25?x-bce-process=image/resize,m_lfit,w_220,limit_1',
        },
      },
      titleStyle: { color: 'white', fontWeight: 'bold' },
    },
    {
      title: '碧翠丝（ベアトリス）',
      subtitle: '大精灵，外表是十一二岁的可爱萝莉，金色的长螺旋状卷发，穿着华丽的礼服。',
      leftAvatar: {
        rounded: true,
        source: {
          uri:
            'https://bkimg.cdn.bcebos.com/pic/d01373f082025aaf99d0e0fff3edab64034f1a27?x-bce-process=image/resize,m_lfit,w_220,limit_1',
        },
      },
      titleStyle: { color: 'white', fontWeight: 'bold' },
    },
    {
      title: '罗兹瓦尔·L·梅札斯（ロズワール・L・メイザース）',
      subtitle:
        '左黄右蓝的不同瞳色，深蓝色的披肩长发，惨白的肤色与纤细的身形，画着小丑般的脸妆以及穿着配色奇特的服饰。',
      leftAvatar: {
        rounded: true,
        source: {
          uri:
            'https://bkimg.cdn.bcebos.com/pic/9825bc315c6034a8b6ea21b5c3134954092376fe?x-bce-process=image/resize,m_lfit,w_220,limit_1',
        },
      },
      titleStyle: { color: 'white', fontWeight: 'bold' },
    },
    {
      title: '奥托·思文（オットー・スーウェン）',
      subtitle:
        '五官端正，头脑机智，还有得天独厚的加护，但却是被幸运抛弃的青年。作为一名游行商人，有作为商人的头脑，但却没有受到幸运青睐。',
      leftAvatar: {
        rounded: true,
        source: {
          uri:
            'https://bkimg.cdn.bcebos.com/pic/a686c9177f3e67094ff45ed232c79f3df8dc5522?x-bce-process=image/resize,m_lfit,w_220,limit_1',
        },
      },
      titleStyle: { color: 'white', fontWeight: 'bold' },
    },
    {
      title: '佩特拉·莱特（ペトラ・レイテ）',
      subtitle: '罗兹瓦尔领地中阿拉姆村的村民。喜欢菜月昴',
      leftAvatar: {
        rounded: true,
        source: {
          uri:
            'https://bkimg.cdn.bcebos.com/pic/a50f4bfbfbedab642db9c500fe36afc378311e22?x-bce-process=image/resize,m_lfit,w_220,limit_1',
        },
      },
      titleStyle: { color: 'white', fontWeight: 'bold' },
    },
    {
      title: '帕特拉修（パトラッシュ）',
      subtitle: '在作为人的代步工具的地龙中，是一头以优秀著称的戴安娜种地龙。菜月昴的地龙。',
      leftAvatar: {
        rounded: true,
        source: {
          uri:
            'https://bkimg.cdn.bcebos.com/pic/902397dda144ad346dee82aad9a20cf431ad854d?x-bce-process=image/resize,m_lfit,w_220,limit_1',
        },
      },
      titleStyle: { color: 'white', fontWeight: 'bold' },
    },
    {
      title: '弗雷德莉卡·鲍尔曼（フレデリカ・バウマン）',
      subtitle: '也译作法兰黛莉卡·鲍曼。作为女性来说，是一位身高很高、拥有澄澈翠瞳的美女——如果她把獠牙隐藏起来的话。',
      leftAvatar: {
        rounded: true,
        source: {
          uri:
            'https://bkimg.cdn.bcebos.com/pic/242dd42a2834349b1eb675a8c0ea15ce36d3be6e?x-bce-process=image/resize,m_lfit,w_220,limit_1',
        },
      },
      titleStyle: { color: 'white', fontWeight: 'bold' },
    },
  ]

  return (
    <ScrollView>
      <View style={[styles.container, !portrait && { paddingTop: 0 }]}>
        <SearchBar
          placeholder="查找"
          cancelButtonTitle={'取消'}
          onChangeText={updateSearch}
          value={search}
          platform={'ios'}
          containerStyle={{ backgroundColor: '#121212' }}
        />

        <View style={{ width: '100%', paddingLeft: 8, paddingRight: 8 }}>
          {List.map(item => (
            <LinearGradient
              // Background Linear Gradient
              colors={['#FF9800', '#F44336']}
              start={{ x: 1, y: 0 }}
              end={{ x: 0.2, y: 0 }}
              style={{ width: '100%', marginBottom: 9, borderRadius: 9 }}
              key={item.title}
            >
              <ListItem
                containerStyle={{
                  backgroundColor: 'transparent',
                }}
              >
                {/* 头像 */}
                <Avatar {...item.leftAvatar} />

                {/* listitem内容 */}
                <ListItem.Content>
                  <ListItem.Title style={item.titleStyle}>{item.title}</ListItem.Title>
                  <ListItem.Subtitle style={{ color: 'white' }}>{item.subtitle}</ListItem.Subtitle>
                </ListItem.Content>

                <ListItem.Chevron color="white" />
              </ListItem>
            </LinearGradient>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight, // 刘海状态栏的安全距离
  },
  Text: {
    fontSize: 30,
  },
})
