import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue'
import Datatable from "./components/Datatable.vue";

const routes = [
    {
        path:'/',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router