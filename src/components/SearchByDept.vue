<template>
    <div>
        <!-- <div>
            <a class="btn--feedback" href="https://www.csun.edu/faculty/scholarship/feedback" target="_blank">Give Feedback</a>
        </div> -->
        <div class="py-5 mt-1">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                         <router-link to="/SearchPage">&#8592; Back to Search</router-link>
                    </div>
                </div>
            </div>
           
        </div>


                        <!-- <router-link to="/FacultyProfile/">
                            <div class="card">
                                <img class="card-img-top d-block mx-auto mt-4"  src="https://cdn.metalab.csun.edu/media/faculty/steven.fitzgerald/avatar.jpg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title h6 font-weight-normal">Steven Fitzgerald</h5>
                                    <p class="card-text">Professor and Director</p>
                                    <div>Computer Science, META+LAB</div>
                                </div>
                            </div>
                        </router-link> -->



        <div class="bg-light py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                            <h1 class="h3 pt-3 mb-5">Browse by Department</h1>
                    </div>
                </div>
                <!-- <hr class="mt-2"> -->
                <div class="row">
                    <div class="col-lg-4 col-sm-6 col-12 pb-3">
                        <router-link to="/DepartmentFaculty" class="card-department">
                            <div class="card">
                                
                                <div class="card-body">
                                    <h2 class="card-title h6 font-weight-normal ">Academic First Year Experiences</h2>
                                </div>                           
                            </div>
                        </router-link>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12 pb-3 ">
                        <router-link to="/DepartmentFaculty" class="card-department">
                        <div class="card">
                            
                            
                                <div class="card-body">
                                    <h2 class="card-title h6 font-weight-normal ">Accounting & Information Systems</h2>
                                </div>
                            
                        </div>
                        </router-link>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12 pb-3 ">
                        <router-link to="/DepartmentFaculty" class="card-department">
                        <div class="card">
                            
                            <div class="card-body">
                                <h2 class="card-title h6 font-weight-normal ">African Studies</h2>
                            </div>
                        </div>
                        </router-link>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12 pb-3 ">
                        <router-link to="/DepartmentFaculty" class="card-department">
                        <div class="card">
                                <a href="#"></a>
                                <div class="card-body">
                                    <h2 class="card-title h6 font-weight-normal ">Civil Engineering & Construction Management</h2>
                                </div>
                            </div>
                            </router-link>
                        </div>
                    <div class="col-lg-4 col-sm-6 col-12 pb-3 ">
                        <router-link to="/DepartmentFaculty" class="card-department">
                        <div class="card">
                            <a href="#"></a>
                            <div class="card-body">
                                <h2 class="card-title h6 font-weight-normal ">Collection Access and Management Services</h2>
                            </div>
                        </div>
                        </router-link>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12 pb-3 ">
                        <router-link to="/DepartmentFaculty" class="card-department">
                        <div class="card">
                            <a href="#"></a>
                            <div class="card-body">
                                <h2 class="card-title h6 font-weight-normal ">Art</h2>
                            </div>
                        </div>
                        </router-link>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12 pb-3">
                        <router-link to="/DepartmentFaculty" class="card-department">
                    <div class="card">
                                <a href="#"></a>
                                <div class="card-body">
                                    <h2 class="card-title h6 font-weight-normal">Academic First Year Experiences</h2>
                                </div>
                            </div>
                            </router-link>
                        </div>
                    <div class="col-lg-4 col-sm-6 col-12 pb-3 ">
                        <router-link to="/DepartmentFaculty" class="card-department">
                        <div class="card">
                            <a href="#"></a>
                            <div class="card-body">
                                <h2 class="card-title h6 font-weight-normal">Accounting & Information Systems</h2>
                            </div>
                        </div>
                        </router-link>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12 pb-3 ">
                        <router-link to="/DepartmentFaculty" class="card-department">
                        <div class="card">
                            <a href="#"></a>
                            <div class="card-body">
                                <h2 class="card-title h6 font-weight-normal">African Studies</h2>
                            </div>
                        </div>
                        </router-link>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12 pb-3 ">
                        <router-link to="/DepartmentFaculty" class="card-department">
                    <div class="card">
                                <a href="#"></a>
                                <div class="card-body">
                                    <h2 class="card-title h6 font-weight-normal">Civil Engineering & Construction Management</h2>
                                </div>
                            </div>
                            </router-link>
                        </div>
                    <div class="col-lg-4 col-sm-6 col-12 pb-3 ">
                        <router-link to="/DepartmentFaculty" class="card-department">
                        <div class="card">
                            <a href="#"></a>
                            <div class="card-body">
                                <h2 class="card-title h6 font-weight-normal">Collection Access and Management Services</h2>
                            </div>
                        </div>
                        </router-link>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12 pb-3 ">
                        <router-link to="/DepartmentFaculty" class="card-department">
                        <div class="card">
                            <a href="#"></a>
                            <div class="card-body">
                                <h2 class="card-title h6 font-weight-normal">Art</h2>
                            </div>
                        </div>
                        </router-link>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12 pb-3">
                        <router-link to="/DepartmentFaculty" class="card-department">
                    <div class="card">
                                <a href="#"></a>
                                <div class="card-body">
                                    <h2 class="card-title h6 font-weight-normal">Academic First Year Experiences</h2>
                                </div>
                            </div>
                            </router-link>
                        </div>
                    <div class="col-lg-4 col-sm-6 col-12 pb-3 ">
                        <router-link to="/DepartmentFaculty" class="card-department">
                        <div class="card">
                            <a href="#"></a>
                            <div class="card-body">
                                <h2 class="card-title h6 font-weight-normal">Accounting & Information Systems</h2>
                            </div>
                        </div>
                        </router-link>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12 pb-3 ">
                        <router-link to="/DepartmentFaculty" class="card-department">
                        <div class="card">
                            <a href="#"></a>
                            <div class="card-body">
                                <h2 class="card-title h6 font-weight-normal">African Studies</h2>
                            </div>
                        </div>
                        </router-link>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12 pb-3 ">
                        <router-link to="/DepartmentFaculty" class="card-department">
                    <div class="card">
                                <a href="#"></a>
                                <div class="card-body">
                                    <h2 class="card-title h6 font-weight-normal">Civil Engineering & Construction Management</h2>
                                </div>
                            </div>
                            </router-link>
                        </div>
                    <div class="col-lg-4 col-sm-6 col-12 pb-3 ">
                        <router-link to="/DepartmentFaculty" class="card-department">
                        <div class="card">
                            <a href="#"></a>
                            <div class="card-body">
                                <h2 class="card-title h6 font-weight-normal">Collection Access and Management Services</h2>
                            </div>

                        </div>
                        </router-link>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12 pb-3 ">
                        <router-link to="/DepartmentFaculty" class="card-department">
                        <div class="card">
                            <a href="#"></a>
                            <div class="card-body">
                                <h2 class="card-title h6 font-weight-normal">Art</h2>
                            </div>
                        </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'SearchByDept'
}
</script>
<style>
</style>

