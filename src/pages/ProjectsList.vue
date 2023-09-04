<script>
import axios from 'axios';
import AppLoader from '../components/AppLoader.vue';

export default {
    name: 'Projects',
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
                <h2 class='mb-5'>My Projects:</h2>
                
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
                        <p></p>
                        <!-- type -->
                        <p class="card-text" v-if='project.type'><strong>tipologia del progetto: </strong>{{project.type.name}}</p>
                        <p v-else>Tipologia assente</p>
                        
                        <!-- technologies -->
                        <div class='pb-3'>
                            <span class='badge bg-success m-1' v-if='project.technologies' v-for='tech in project.technologies' :key="tech.id">
                                {{tech.name}}
                            </span>
                        </div>
                        
                        <a href="#" class="btn btn-primary">leggi l'articolo</a>
                        
                    </div>
                </div>
                
            </div>

        </div>

    </div>
</template>

<style lang="">
  
</style>
