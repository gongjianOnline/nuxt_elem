
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /**配置elementUI */
    vendor: ['element-ui'],
    /*
    ** You can extend webpack config here
    */
  },

  vender:[
    'mint-ui'
  ],
  babel:{
    "plugins": [
      [
        "component", 
        [
          {
          "libraryName": "mint-ui",
          },
          'transform-async-to-generator',
          'transform-runtime'
        ]
      ]
    ],
    comments: true
  },
  plugins: [
    { src: '~plugins/mint-ui', ssr: true },
     // ssr: Boolean (默认为 true) 如果值为 false，该文件只会在客户端被打包引入
    { src: '@/assets/js/iconfont.js', ssr: false },
    //配置elementUI
    { src:'~plugins/element-ui',ssr:false}
  ],
  css: [
    // 全部引用的时候需要用到
    'mint-ui/lib/style.css',
    //引入矢量图标
    '@/assets/css/iconfont.css',
    //全局引入element-ui
    'element-ui/lib/theme-chalk/index.css'
  ]



}
