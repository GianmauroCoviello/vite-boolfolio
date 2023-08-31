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
    <div class='container'>
        <div class='container-loader d-flex justify-content-center align-items-center'>
            
            <div class='loader mb-5'></div>

        </div>
        <h1 class="text-center mb-5 text-primary">Aspetta solo un attimo.......</h1>
    </div>
        
</template>

<style lang="scss">
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
