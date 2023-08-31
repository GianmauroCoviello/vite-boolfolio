<script>
import axios from 'axios';
import AppLoader from './AppLoader.vue';

export default {
    name: 'AppMain',
    components:{

        AppLoader

    },
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            projects: [],
            loader: true
        }
    },
    created() {
        this.getProjects()
    },
    methods: {
        getProjects(){
            this.loader = true;
            axios.get(`${this.baseUrl}/api/projects`).then((response) => {
                console.log(response)
                if (response.data.status) {
                    this.projects = response.data.results;
                    this.loader = false;
                    
                }
                else{

                

                }

            })
        },
        
    },
  
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h1>BOOLFOLIO</h1>
            </div>

        </div>

    </div>
    <AppLoader v-if="loader"/>
    <div v-else class="container">
        <div class="row">
            <div class="col-12 " v-for='project in projects' ::key="project.id">
                <p>{{project.title}}</p>
                
            </div>

        </div>

    </div>
</template>

<style lang="">
  
</style>
