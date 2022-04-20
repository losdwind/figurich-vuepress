const { path } = require('@vuepress/utils')
module.exports = {

    postcss: {
        plugins: [
            require('tailwindcss')('./tailwind.config'),
            require('autoprefixer'),
        ]
    },


    // site Config

    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {

            lang: 'en-US',
            title: 'Figurich',
            description: 'About Computational Wellbeing, Positive Psychology and Mobile Sensing',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: '福可期',
            description: '关于积极心理学与移动感知',
        },
    },



    // theme config
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/logolight.png',
        logoDark: '/images/logodark.png',
        // repo: 'losdwind/FigurichOfficialWebsite',
        // sidebar: 'auto',

        locales: {
            '/': {
                selectLanguageName: 'English',
                selectLanguageText: 'Languages',
                contributors: false,
                editLinkText: 'Edit this page on GitHub',

                navbar: [
                    // NavbarItem
                    {
                        text: 'Branchl',
                        link: '/branchl/',
                    },
                    // NavbarGroup
                    {
                        text: 'Eu-Well Desgin',
                        // link: '/eu-well-design/',
                        link:'https://zeroheight.com/1b919a1e6'
                    },
                    {
                        text: 'Eu-Well Model',
                        link: '/eu-well-model/',
                        // children: ['/well-mapper/mobile-sensing-system.md']
                    },
                    {
                        text: 'About',
                        link: '/about/',
                        // children: ['/about/about-figurich.md','/about/about-me.md' ]


                    },
                    // 字符串 - 页面文件路径
                ],

                sidebar: {
                    '/eu-well-model/': [
                        {
                            text: 'Mobile Sensing',
                            children: ['/eu-well-model/mobile-sensing/mobile-sensing-system.md'],
                        },
                        {
                            text: 'Positive Psychology',
                            children: ['/eu-well-model/positive-psychology/wellbeing-model.md'],
                        }

                    ]
                }

                

            },

            '/zh/': {
                selectLanguageName: '简体中文',
                selectLanguageText: '语言',
                selectLanguageAriaLabel: '选择语言',
                contributors: false,

                // page meta
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdatedText: '上次更新',
                contributorsText: '贡献者',

                // custom containers
                tip: '提示',
                warning: '注意',
                danger: '警告',

                // 404 page
                notFound: [
                    '这里什么都没有',
                    '我们怎么到这来了？',
                    '这是一个 404 页面',
                    '看起来我们进入了错误的链接',
                ],
                backToHome: '返回首页',

                // a11y
                openInNewWindow: '在新窗口打开',
                toggleDarkMode: '切换夜间模式',
                toggleSidebar: '切换侧边栏',


                navbar: [
                    // NavbarItem
                    {
                        text: '点枝日记',
                        link: '/zh/branchl/',
                    },
                    // NavbarGroup
                    {
                        text: 'Eu-Well 设计系统',
                        // link: '/zh/eu-well-design/'
                        link:'https://zeroheight.com/1b919a1e6'

                    },
                    {
                        text: 'Eu-Well 模型',
                        link: '/zh/eu-well-model/'
                    },
                    {
                        text: '关于',
                        link: '/zh/about/'
                    },
                    // 字符串 - 页面文件路径
                ],

                sidebar: {
                    '/zh/eu-well-model/': [
                        {
                            text: '移动感知',
                            children: ['/zh/eu-well-model/mobile-sensing/mobile-sensing-system.md'],
                        },
                        {
                            text: '积极心理学',
                            children: ['/zh/eu-well-model/positive-psychology/wellbeing-model.md'],
                        }

                    ],
                }
            },


        },

    },


    // plugins
    plugins: [
        [
            '@vuepress/register-components',
            {
                componentsDir: path.resolve(__dirname, './components'),
            },
        ],

        [
            '@vuepress/plugin-docsearch',
            {
                apiKey: '',
                indexName: 'figurich',
                searchParameters: {
                    facetFilters: ['tags:v2'],
                },
                locales: {
                    '/zh/': {
                        placeholder: '搜索文档',
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档',
                            },
                            modal: {
                                searchBox: {
                                    resetButtonTitle: '清除查询条件',
                                    resetButtonAriaLabel: '清除查询条件',
                                    cancelButtonText: '取消',
                                    cancelButtonAriaLabel: '取消',
                                },
                                startScreen: {
                                    recentSearchesTitle: '搜索历史',
                                    noRecentSearchesText: '没有搜索历史',
                                    saveRecentSearchButtonTitle: '保存至搜索历史',
                                    removeRecentSearchButtonTitle: '从搜索历史中移除',
                                    favoriteSearchesTitle: '收藏',
                                    removeFavoriteSearchButtonTitle: '从收藏中移除',
                                },
                                errorScreen: {
                                    titleText: '无法获取结果',
                                    helpText: '你可能需要检查你的网络连接',
                                },
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换',
                                    closeText: '关闭',
                                    searchByText: '搜索提供者',
                                },
                                noResultsScreen: {
                                    noResultsText: '无法找到相关结果',
                                    suggestedQueryText: '你可以尝试查询',
                                    openIssueText: '你认为该查询应该有结果？',
                                    openIssueLinkText: '点击反馈',
                                },
                            },
                        },
                    },
                },
            },
        ],
    ],
}