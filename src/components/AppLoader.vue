<script>
import axios from 'axios';

export default {
    name: 'AppLoader',
    data() {
        
    },
    created() {
       
    },
    methods: {
        
        
    },
  
}
</script>

<template lang="">
    <hr>
    <div class='container'>
        <div class='container-loader d-flex justify-content-center align-items-center'>
            
            <div class='loader mb-5'><h3 class='m-3 '></h3></div>

        </div>
        
        <h3 class=" text-dark"><em>Boolfolio</em></h3>
    </div>
        
</template>

<style lang="scss">
.container{
    position: relative;


    h3{
        position: absolute;
        bottom: 50%;
        left: 600px;
    }
    
}
.container-loader{
    width: 100%;
    height: 500px;
    
    .loader{
        border: 16px solid #f3f3f3;
        border-top: 16px solid #3434db;
        border-radius: 50%;
        width: 200px;
        height: 200px;
        animation: spin 2s linear infinite;

    }

    @keyframes spin{
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
   


}
    

  
</style>
