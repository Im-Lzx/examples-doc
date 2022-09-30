import nav from "./nav";
import sidebar from "./sidebar";
import socialLinks from "./socialLinks";
export default {
    title: 'Lzx Demo',
    description: 'Just some Demos',
    appearance: true, // 黑暗模式
    lastUpdated: true, // 最后更新时间
    outDir: "../dist",
    themeConfig: {
        siteTitle: 'Lzx Demo',
        logo: 'img/logo2.png',
        outlineTitle: '本页目录',
        
        // 配置-顶部导航栏
        nav: nav,
        // 配置-左边菜单栏
        sidebar: sidebar,
        // 配置-顶端github,掘金等平台链接
        socialLinks: socialLinks,
    }
}
