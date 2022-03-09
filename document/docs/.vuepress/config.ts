export default({
  // 站点配置
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "favicon.ico"
      }
    ],
  ],
  theme: '@vuepress/theme-default',
  lang: 'zh-CN',
  title: '原神启动器Plus',
  description: 'Genshin.Launcher.Plus',
  base: '/document/',
  themeConfig: {
    logo: 'https://s2.loli.net/2022/03/08/mUB73fHR86VhDJs.png',
    navbar: [
      {
        text: '主页',
        link: 'https://www.dawnfz.com'
      },
      {
        text: '交流群',
        link: 'https://jq.qq.com/?_wv=1027&k=hHtDKShK'
      },
      {
        text: '赞助项目',
        link: '/view/sponsor.md'
      },
    ],
    sidebar: [
      {
        text: '开始使用',
        collapsible: false,
        children: [
          '/README.md',
          '/view/introduce.md',
        ]
      },

      {
        text: '功能指南',
        collapsible: false,
        children: [
          '/view/features/custom-parameter.md',
          '/view/features/unlock-fps.md',
          '/view/features/account-switch.md',
          '/view/features/screenshot-directory.md',
          '/view/features/client-switch.md',
          '/view/features/custom-background.md'
        ],
      },

      {
        text: '常见问题',
        collapsible: false,
        children: [
          '/view/issues/account-issues.md',
          '/view/issues/path-issues.md',
          '/view/issues/pkg-issues.md',
          '/view/issues/run-issues.md',
          '/view/issues/switch-issues.md',
        ],
      },
      {
        text: '开发',
        collapsible: false,
        children: [
          '/view/develop.md',
        ],
      },
    ],
    editLink: false,
    editLinkText: '编辑此页',
    docsRepo: 'DawnFz/Genshin.Launcher.Plus.Docs',
    docsBranch: 'main',
    docsDir: 'docs',
    contributors: false,
    lastUpdated: true,
    contributorsText: '贡献者',
    lastUpdatedText: '上次更新',
    tip: '提示',
    warning: '警告',
    danger: '危险',
    notFound: "找不到该页面",
    backToHome: '返回首页',
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '搜索内容',
            hotKeys: ['/']
          }
        }
      }
    ],
    [
      "vuepress-plugin-clipboard",
      {
        align: "top"
      }
    ]
  ]
})
