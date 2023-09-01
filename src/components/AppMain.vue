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
                <h1 class="mb-5 mt-3">BOOLFOLIO</h1>
                
            </div>

        </div>

    </div>
    <AppLoader v-if="loader"/>
    <div v-else class="container">
        <div class="row">
            <div class="col-3 py-3 " v-for='project in projects' ::key="project.id">
                <!-- <p></p> -->

                <div class="card" style="width: 18rem;">
                    <img :src=" ` ${baseUrl}/storage/${project.cover_image}`" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">{{project.title}}</h5>
                      <p class="card-text">{{project.content}}</p>
                      <a href="#" class="btn btn-primary">leggi l'articolo</a>
                    </div>
                </div>
                
            </div>

        </div>

    </div>
</template>

<style lang="">
  
</style>
