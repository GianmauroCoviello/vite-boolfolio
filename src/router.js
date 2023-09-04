import {createRouter, createWebHistory} from "vue-router";

// importiamo le componenti
import HomePage from './pages/HomePage.vue';

import ProjectsList from './pages/ProjectsList.vue';
// import ProjectsListVue from "./pages/ProjectsList.vue";

const router = createRouter({

    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage

        },
        {
            path: '/ProjectsList',
            name: 'Progetti',
            component: ProjectsList

        }
    ]
});

export {router}