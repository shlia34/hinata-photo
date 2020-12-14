import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './pages/Top.vue';
import Members from './pages/Members.vue';
import Member from './pages/Member.vue';
import Photos from './pages/Photos.vue';
import NotFound from './pages/NotFound.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Top },
    { path: "/members", component: Members},
    { path: "/members/:member", component: Member, props: true },
    { path: "/:member/:year/:month", component: Photos, props: true },
    { path: '*', component: NotFound }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
