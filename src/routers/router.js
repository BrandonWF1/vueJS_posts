import Main from "@/pages/Main.vue";
import Posts from "@/pages/Posts.vue";
import {createRouter, createWebHistory} from "vue-router";
import Videos from "@/pages/Videos.vue";
import About from "@/pages/About.vue";
import DetailPost from "@/pages/DetailPost.vue";


const routes = [
    {
        path:'/',
        component: Main
    },
    {
        path:'/about',
        component: About
    },
    {
        path:'/videos',
        component: Videos
    },
    {
        path: '/posts',
        component: Posts
    },
    {
        path: '/posts/:id',
        name: 'detailed-post',
        component: DetailPost
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router