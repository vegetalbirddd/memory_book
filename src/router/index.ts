import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        redirect: "/"
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
