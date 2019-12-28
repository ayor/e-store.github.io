import Customer from './components/Customer/Customers.vue'
import Video from './components/Video/Videos.vue'
import Home from './components/Home/Home.vue'
import addCustomer from './components/Customer/addCustomer.vue'
import complaints from './components/Customer/complaints.vue'
import addVideo from './components/Video/addVideo.vue'
import checkOut from "./components/Home/checkOut.vue";
import viewVideos from "./components/Video/viewVideos.vue";
import login from './components/Home/Login.vue'
import orders from './components/Customer/Orders.vue'
import reviews from './components/Customer/reviews.vue'
import addressBook from './components/Customer/addBook.vue'
import Summary from './components/Customer/Summary.vue'
import cart from './components/Home/Cart.vue'

export const routes = [
    {
        path:'',
        component:Home
    },
    {
        path:'/customers',
        component: Customer,       
        children:[
            {
                path:'/summary',
                component:Summary
            },
            {
                path:'/orders',
                component:orders
            },
            {
                path:'/reviews',
                component:reviews
            },
            {
                path:'/addressBook',
                component:addressBook
            },
        ]
    },
    {
        path:'/videos',
        component:Video
    },
    {
        path: '/addCustomer',
        component: addCustomer
    },
    {
        path: '/complaints',
        component: complaints
    },
    {
        path:'/addVideo',
        component: addVideo
    },
    {
        path:'/checkOut',
        component: checkOut
    },
    {
        path:'/viewVideos',
        component: viewVideos
    },
    {
        path:'/login',
        component: login
    },
    {
        path:'/carts',
        component: cart
    }
]