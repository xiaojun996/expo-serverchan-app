import * as Linking from 'expo-linking'

/**
 * Linking.makeUrl('/'): 'exp://127.0.0.1:19000/--/'
 * 阅读更多: https://reactnavigation.org/docs/deep-linking
 */
export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Login: 'login',
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          Me: {
            /**
             * '/user/wojciech/settings'
             * { id: 'user-wojciech' section: 'settings' }
             *
             * 将参数标记为可选: 通过?在参数名称后添加后缀来实现
             *  https://reactnavigation.org/docs/configuring-links#marking-params-as-optional
             */
            path: 'my/:id/:section?',
            parse: {
              id: (id: string) => `user-${id}`,
            },
            stringify: {
              id: (id: string) => id.replace(/^user-/, ''),
            },
          },
        },
      },
      NotFound: '*',
    },
  },
}
