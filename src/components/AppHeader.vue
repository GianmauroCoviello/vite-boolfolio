<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            vociMenu:[
                {
                    voci:'Home',
                    routeName: 'home'
                },
                {
                    voci:'Progetti',
                    routeName: 'Progetti'
                },
                {
                    voci:'Type',
                },
                {
                    voci:'Technologies'
                },
                {
                    voci:'Chi siamo'
                },
                {
                    voci:'Contatti'
                }
            ]
        }
    },
}
</script>

<template lang="">
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item" v-for="(item, index) in vociMenu" :key="index">
                   
                    <!-- < class="nav-link active" aria-current="page" href="#"></a> -->
                    <router-link class="nav-link active" :to="{name: item.routeName}">{{item.voci}}</router-link>
                  </li>
                 
                </ul> 
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
        </nav>
        
    </div>
</template>

<style lang="">
    
</style>