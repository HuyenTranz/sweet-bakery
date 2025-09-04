import HomePage from "../pages/homePage/HomePage";
import OrderPage from "../pages/orderPage/OrderPage";
import ProductPage from "../pages/productPage/ProductPage";

export const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/order',
        component: OrderPage
    },
    {
        path: '/products',
        component: ProductPage
    }
]