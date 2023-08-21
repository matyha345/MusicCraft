import AppMusic from "../components/pages/app-music/AppMusic";
import Home from "../components/pages/home/Home";
import Marketplace from "../components/pages/marketplace/Marketplace";
import Product from "../components/pages/product/Product";



export const routesData = [
    {
        path: '/',
        component: Home,
        // isAuth: false
    },
    {
        path: '/product',
        component: Product,
        // isAuth: false
    },
    {
        path: '/marketplace',
        component: Marketplace,
        // isAuth: false
    },
    {
        path: '/app-music',
        component: AppMusic,
        // isAuth: false
    }
]