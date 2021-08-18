import {
    Home,
    Notes,
    About,
    Share
} from "@/pages";

//路由配置
const routers = [

    /* ***************登录************* */
    {
        path: "/login",
        exact: false,
        name: 'Damons7',
        noRender: true,
        render: () => <Notes />
    },

    /* ***************首页************* */
    {
        path: "/home",
        exact: true,
        name: 'Damons7',
        render: () => <Home />
    },

    /* ***************记录************* */
    {
        path: "/notes",
        exact: false,
        name: '记下录',
        render: () => <Notes />
    },

    /* ***************分享************* */
    {
        path: "/share",
        exact: true,
        name: '分享的',
        render: () => <Share />
    },
    /* ***************关于************* */
    {
        path: "/about",
        exact: true,
        name: '有关于',
        render: () => <About />
    },
]

export default routers;