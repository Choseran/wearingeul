import { createRouter, createWebHistory } from "vue-router";
// import { userStore } from "@/store/modules/userStore.js";
import MainLayout from "@/layout/MainLayout.vue";
import MainView from '../views/MainView.vue'
import DippenListView from "@/views/list/DippenListView.vue";
import BestListView from "@/views/list/BestListView.vue";
import NewListView from "@/views/list/NewListView.vue";
import SaleListView from "@/views/list/SaleListView.vue";
import SmilecatView from "@/views/detail/SmilecatView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";

const routes = [
    {
        path: '/',
        component: MainView,
        meta: {
            layout: MainLayout
        }
    },
    {
        path: '/dip-pen',
        component: DippenListView,
        meta: {
            layout: MainLayout
        }
    },
    {
        path: '/best',
        component: BestListView,
        meta: {
            layout: MainLayout
        }
    },
    {
        path: '/new',
        component: NewListView,
        meta: {
            layout: MainLayout
        }
    },
    {
        path: '/sale',
        component: SaleListView,
        meta: {
            layout: MainLayout
        }
    },
    {
        path: '/detail/1',
        component: SmilecatView,
        meta: {
            layout: MainLayout
        }
    },
    {
        path: '/login',
        component: LoginView,
        meta: {
            layout: MainLayout
        }
    },
    {
        path: '/register',
        component: RegisterView,
        meta: {
            layout: MainLayout
        }
    }
]

// const loginStore = userStore();

// routes.beforeEach((to, from, next) => {
//     if (to.fullPath !== "/login" && !userStore.isLoggedIn) {
//         next("/login")
//     } else if (to.fullPath == "/login" && userStore.isLoggedIn) {
//         next("/")
//     } else {
//         next();
//     }
// })

export default createRouter({
    history: createWebHistory(),
    routes,
    // loginStore,
})