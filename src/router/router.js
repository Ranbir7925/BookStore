import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '../components/user/SignIn'
import SignUp from '../components/user/SignUp'
import Dashboard from '../components/book/Dashboard'
import Books from '../components/book/Books'
import Cart from '../components/Cart/BookCart'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        { path: '*', redirect: '/signin' },
        { path: '/signin', component: SignIn },
        { path: '/signup', component: SignUp },
        {
            path: '/dashboard', component: Dashboard,
            children: [
                { path: 'books', component: Books },
                { path: 'cart', component: Cart },
            ]
        }
    ]
})

export default router