import { createRouter, createWebHistory } from "vue-router";
// import { userStore } from "@/store/modules/userStore.js";
import ListLayout from "@/layout/ListLayout.vue";
import DetailLayout from "@/layout/DetailLayout.vue";

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
    },
    {
        path: '/dip-pen',
        component: DippenListView,
        meta: {
            layout: ListLayout
        }
    },
    {
        path: '/best',
        component: BestListView,
        meta: {
            layout: ListLayout
        }
    },
    {
        path: '/new',
        component: NewListView,
        meta: {
            layout: ListLayout
        }
    },
    {
        path: '/sale',
        component: SaleListView,
        meta: {
            layout: ListLayout
        }
    },
    {
        path: '/detail/1',
        component: SmilecatView,
        meta: {
            layout: DetailLayout
        }
    },
    {
        path: '/login',
        component: LoginView,
    },
    {
        path: '/register',
        component: RegisterView,
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