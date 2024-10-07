import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layout/MainLayout.vue";
import MainView from '../views/MainView.vue'
import DippenListView from "@/views/DippenListView.vue";
import DetailView from "@/views/DetailView.vue";
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
        path: '/detail',
        component: DetailView,
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

export default createRouter({
    history: createWebHistory(),
    routes,
})