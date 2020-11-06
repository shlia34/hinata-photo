import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './components/Top.vue';
import NotFound from './components/NotFound.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/hinata-photo/:member/:year/:month', component: Top, props: true },
    { path: '*', component: NotFound }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
