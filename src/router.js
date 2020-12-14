import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './pages/Top.vue';
import Photos from './pages/Photos.vue';
import NotFound from './pages/NotFound.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Top },
    { path: "/:member/:year/:month", component: Photos, props: true },
    { path: '*', component: NotFound }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
