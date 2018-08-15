<template>
    <div class="FAC-searchPage">
        
        
        <section id="FAC-searchBanner">
            <div class="FAC-searchForFac text-center py-5 mx-3">Start Discovering People At CSUN.</div>
            <div class="container mb-3 pb-5">
                <div class="row">
                    <div class="offset-md-2 col-md-6 col-12">
                        <input type="text" placeholder="Search for Person..." class="form-control d-inline">
                    </div>
                    <div class="col-md-2 col-12 pt-md-0 pt-3">
                        <button type="button" class="btn btn-primary">Search</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 pt-5 font-italic text-center" >
                        <router-link to="/SearchByDept">Browse By: Department</router-link> 
                    </div>
                </div>
            </div>
        </section>

        <div>
            <a class="btn--feedback" href="https://www.csun.edu/faculty/scholarship/feedback" target="_blank">Give Feedback</a>
        </div>

        <section id="FAC-facultyCards">
            <div class="container pt-4" >

                <div class="row text-center py-2">

                    <div class="col-lg-4 col-sm-6 col-12 py-2" >

                        <router-link to="/FacultyProfile/">
                            <div class="card">
                                
                                <img class="card-img-top d-block mx-auto mt-4"  src="https://cdn.metalab.csun.edu/media/faculty/steven.fitzgerald/avatar.jpg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">Steven Fitzgerald</h5>
                                    <p class="card-text">Professor and Director</p>
                                    <div>Computer Science, META+LAB</div>
                                </div>
                            </div>
                        </router-link>

                    </div>

                    <div class="col-lg-4 col-sm-6 col-12 py-2" >
                        <router-link to="/FacultyProfile/">
                            <div class="card">
                                
                                <img class="card-img-top d-block mx-auto mt-4"  src="https://cdn.metalab.csun.edu/media/faculty/steven.fitzgerald/avatar.jpg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">Steven Fitzgerald</h5>
                                    <p class="card-text">Professor and Director</p>
                                    <div>Computer Science, META+LAB</div>
                                </div>
                            </div>
                        </router-link>
                    </div>

                  <div class="col-lg-4 col-sm-6 col-12 py-2" >
                        <router-link to="/FacultyProfile/">
                            <div class="card">
                                
                                <img class="card-img-top d-block mx-auto mt-4"  src="https://cdn.metalab.csun.edu/media/faculty/steven.fitzgerald/avatar.jpg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">Steven Fitzgerald</h5>
                                    <p class="card-text">Professor and Director</p>
                                    <div>Computer Science, META+LAB</div>
                                </div>
                            </div>
                        </router-link>
                    </div>

                    <div class="col-lg-4 col-sm-6 col-12 py-2" >
                        <router-link to="/FacultyProfile/">
                            <div class="card">
                                
                                <img class="card-img-top d-block mx-auto mt-4"  src="https://cdn.metalab.csun.edu/media/faculty/steven.fitzgerald/avatar.jpg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">Steven Fitzgerald</h5>
                                    <p class="card-text">Professor and Director</p>
                                    <div>Computer Science, META+LAB</div>
                                </div>
                            </div>
                        </router-link>
                    </div>

                  <div class="col-lg-4 col-sm-6 col-12 py-2" >
                       <router-link to="/FacultyProfile/">
                            <div class="card">
                                
                                <img class="card-img-top d-block mx-auto mt-4"  src="https://cdn.metalab.csun.edu/media/faculty/steven.fitzgerald/avatar.jpg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">Steven Fitzgerald</h5>
                                    <p class="card-text">Professor and Director</p>
                                    <div>Computer Science, META+LAB</div>
                                </div>
                            </div>
                        </router-link>
                    </div>

                  <div class="col-lg-4 col-sm-6 col-12 py-2" >
                        <router-link to="/FacultyProfile/">
                            <div class="card">
                                
                                <img class="card-img-top d-block mx-auto mt-4"  src="https://cdn.metalab.csun.edu/media/faculty/steven.fitzgerald/avatar.jpg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">Steven Fitzgerald</h5>
                                    <p class="card-text">Professor and Director</p>
                                    <div>Computer Science, META+LAB</div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>                





            </div>
            

            <!-- *******************  PAGINATION ******************** -->

            <div class="container py-5">
                <div class="row">
                    <div class="col-4">
                        <nav aria-label="Page navigation example">
                        <ul class="pagination pagination-lg">
                            <li class="page-item pr-2">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                            </li>
                            <li class="page-item px-2"><a class="page-link" href="#">1</a></li>
                            <li class="page-item px-2"><a class="page-link" href="#">2</a></li>
                            <li class="page-item px-2"><a class="page-link" href="#">3</a></li>
                            
                            
                            
                            <li class="page-item pl-2">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                            </li>
                        </ul>
                        </nav>
                    </div>
                </div>
            </div>
            
        </section>
        </div>
    
</template>
<script>
export default {
    name:'SearchPage'
}
</script>
<style>
</style>
