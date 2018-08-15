<template>
    <div> 
        <header class="FAC-header">
            <!-- when ready to use metaphor, get rid of this whole bootstrap grid :)  -->
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-5">
                        <router-link to="/"><span class="FAC-temporary-CSUN">CSUN <span class="FAC-temporary-Faculty">  | Faculty Beta</span></span></router-link>
                        
                    </div>
                </div>
            </div>
           
        </header>        
    </div>
</template>

<script>


    export default {
        name: 'Header'
    }
</script>

<style>
    /* imported from main.scss */
</style>


