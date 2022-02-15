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
            description: 'About Positive Psychology and Mobile Sensing',
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
        logo: '/images/logo.png',
        navbar: [
            // NavbarItem
            {
                text: 'Branchl',
                link: '/branchl/',
            },
            // NavbarGroup
            {
                text: 'Constellation',
                link: '/constellation/',
                children: ['/constellation/design-system.md', '/constellation/fengshui.md'],
            },
            {
                text: 'Well-mapper',
                link: '/well-mapper/',
                children: ['/well-mapper/wellbeing-model.md', '/well-mapper/mobile-sensing-system.md'],
            },
            {
                text: 'About',
                children: ['/about/about-figurich.md', '/about/about-me.md'],
            },
            // 字符串 - 页面文件路径
        ],
        locales: {
            '/': {
                selectLanguageName: 'English',
            },
            '/zh/': {
                selectLanguageName: '简体中文',
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
    ],
}