export default defineAppConfig({
  pages: ['pages/index/index'],
  // 分包
  subpackages: [
    {
      root: 'pages/featureA',
      pages: ['index/index']
    },
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
