<template>
    <div id="landingPage" class="pt-5">
        <div>
            <a class="btn--feedback" href="https://www.csun.edu/faculty/scholarship/feedback" target="_blank">Give Feedback</a>
        </div>
        <div class="FAC-searchForFac text-center py-5">Search For Faculty</div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-sm-7 col-12 mx-0 px-0">
                    <input type="text" class="form-control pr-0" placeholder="Search for..." aria-label="Faculty Name" aria-describedby="button-addon2">
                </div>
                <div class="col-sm-1 col-12 mx-0 px-0">
                    
                    <router-link to="/SearchPage"><button type="button" class="btn btn-primary" id="button-addon2"><i class="fas fa-search"></i></button></router-link>
                    
                </div>
            </div>
        </div>
        <div class="text-center pt-5">
            <router-link to="/SearchByDept">Browse By: Department</router-link> 
        </div>
    </div>
</template>
<script>
export default {
    name: 'Home'
}


// <router-link class="nav-link" to="/">HOME</router-link> </li>
// <router-link class="nav-link" to="/classes">CLASSES</router-link> 
</script> 

<style></style>




