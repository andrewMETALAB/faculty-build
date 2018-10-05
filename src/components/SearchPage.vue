<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12 order-last order-md-first">
                <section class="searchBanner my-5 py-5">
                    <div class="container">
                        <h2 class="searchBanner__title text-center pb-3">
                            Start Discovering Faculty At CSUN.
                        </h2>
                        <hr class="hr-metaphor w-50 w-md-25 mx-auto mb-5">
                        <div class="row justify-content-center">
                            <div class="col-lg-6 col-md-8 col-sm-8 col-7 pr-0">
                                <input type="text" placeholder="Search by Name..." class="form-control d-inline">
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-5">
                                <button type="button" class="btn btn-primary btn-rounded btn-block">Search</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 pt-5 text-center" >
                                <router-link to="/SearchByDept">Browse By Department</router-link> 
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div class="col-sm-12 order-first order-md-last bg-light">
                <section>
                    <div class="container py-5">
                        <div class="row">
                            <div class="col-sm-12 text-center text-md-left">
                                <h4 class="mb-4">Results: <span class="font-weight-normal">18 people</span></h4>
                            </div>
                        </div>
                        <div class="row text-center py-2">
                            <div class="col-lg-4 col-sm-6 col-12 py-2 mb-4" >
                                <router-link to="/FacultyProfile/" class="card profile-card">
                                    <img class="profile-card__img d-block mx-auto mt-4"  src="https://cdn.metalab.csun.edu/media/faculty/steven.fitzgerald/avatar.jpg" alt="Card image cap">
                                    <div class="card-body">
                                        <h5 class="card-title">Steven Fitzgerald</h5>
                                        <div class="card-text">Professor</div>
                                        <div>Computer Science</div>
                                    </div>
                                </router-link>
                            </div>

                            <div class="col-lg-4 col-sm-6 col-12 py-2 mb-4" >
                                <router-link to="/FacultyProfile/" class="card profile-card">
                                    <img class="profile-card__img d-block mx-auto mt-4"  src="https://cdn.metalab.csun.edu/media/faculty/steven.fitzgerald/avatar.jpg" alt="Card image cap">
                                    <div class="card-body">
                                        <h5 class="card-title">Cheryl Spector</h5>
                                        <div class="card-text">Professor</div>
                                        <div>English</div>
                                    </div>
                                </router-link>
                            </div>

                            <div class="col-lg-4 col-sm-6 col-12 py-2 mb-4" >
                                <router-link to="/FacultyProfile/" class="card profile-card">
                                    <img class="profile-card__img d-block mx-auto mt-4"  src="https://cdn.metalab.csun.edu/media/faculty/steven.fitzgerald/avatar.jpg" alt="Card image cap">
                                    <div class="card-body">
                                        <h5 class="card-title">Nerces Kevork Kazandjian</h5>
                                        <div class="card-text">Faculty</div>
                                        <div>Computer Science</div>
                                    </div>
                                </router-link>
                            </div>


                            <div class="col-lg-4 col-sm-6 col-12 py-2 mb-4" >
                                <router-link to="/FacultyProfile/" class="card profile-card">
                                    <img class="profile-card__img d-block mx-auto mt-4"  src="https://cdn.metalab.csun.edu/media/faculty/steven.fitzgerald/avatar.jpg" alt="Card image cap">
                                    <div class="card-body">
                                        <h5 class="card-title">Bobbie (Roberta) Emetu</h5>
                                        <div class="card-text">Assistant Professor</div>
                                        <div>Health Sciences</div>
                                    </div>
                                </router-link>
                            </div>

                            <div class="col-lg-4 col-sm-6 col-12 py-2 mb-4" >
                                <router-link to="/FacultyProfile/" class="card profile-card">
                                    <img class="profile-card__img d-block mx-auto mt-4"  src="https://cdn.metalab.csun.edu/media/faculty/steven.fitzgerald/avatar.jpg" alt="Card image cap">
                                    <div class="card-body">
                                        <h5 class="card-title">Cati Acevedo-Torres</h5>
                                        <div class="card-text">Lecturer</div>
                                        <div>Finance, Financial Planning, and Insurance</div>
                                    </div>
                                </router-link>
                            </div>

                            <div class="col-lg-4 col-sm-6 col-12 py-2 mb-4" >
                                <router-link to="/FacultyProfile/" class="card profile-card">
                                    <img class="profile-card__img d-block mx-auto mt-4"  src="https://cdn.metalab.csun.edu/media/faculty/steven.fitzgerald/avatar.jpg" alt="Card image cap">
                                    <div class="card-body">
                                        <h5 class="card-title">Thomas J Abraham</h5>
                                        <div class="card-text">Lecturer</div>
                                        <div>Educational Leadership & Policy Studies</div>
                                    </div>
                                </router-link>
                            </div>
                        </div>

                        <div class="row justify-content-center my-3 my-md-5">
                            <div class="col-4">
                                <nav aria-label="Page navigation example">
                                <ul class="pagination pagination-lg justify-content-center">
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

            <!-- <div>
                <a class="btn--feedback" href="https://www.csun.edu/faculty/scholarship/feedback" target="_blank">Give Feedback</a>
            </div> -->

        </div>
    </div>
</template>

<script>
export default {
    name:'SearchPage'
}
</script>

<style>
</style>
