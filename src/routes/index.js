import HomePage from "../pages/homePage/HomePage";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import OrderPage from "../pages/orderPage/OrderPage";
import ProductPage from "../pages/productPage/ProductPage";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/products',
        page: ProductPage,
        isShowHeader: true
    },
    {

        path: '*',
        page: NotFoundPage
    },


]