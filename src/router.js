import {createRouter, createWebHistory} from "vue-router";

// importiamo le componenti
import HomePage from './pages/HomePage.vue';

import Projects from './pages/Projects.vue';

const router = createRouter({

    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            components: HomePage

        },
        {
            path: '/',
            name: 'Progetti',
            components: Projects

        }
    ]
});

export {router}