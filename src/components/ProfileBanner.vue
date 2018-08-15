<template>
    <div><section class="FAC-banner">
            <div id="FAC-banner__overlay"></div>
            <div class="container">
                <div class="row align-items-center pt-3">
                    <div class="col-12 col-md-4">
                        <h1 class="FAC-banner__name--sm">Steven Fitzgerald</h1>
                        <div class="FAC-banner__department--sm">PROFESSOR | <a href="#">Computer Science</a></div>
                         <img class="FAC-banner__image" src="https://cdn.metalab.csun.edu/media/faculty/steven.fitzgerald/avatar.jpg" alt="Steve Fitzgerald">
                    </div>
                    <div class="col-12 col-md-8">
                        <div id="FAC-banner__content">
                            
                            <div class="FAC-banner__department">PROFESSOR | <a href="#">Computer Science</a><a class="FAC-banner__badge badge px-2 ml-2" href="#">CSUN Alum<i class="fas fa-graduation-cap ml-2"></i></a></div>
                            
                            <h1 class="FAC-banner__name">Steven Fitzgerald</h1> 
                            
                            <div class="FAC-banner__title">Faculty Director - META+LAB</div>
                            
                            <div class="FAC-banner__badge--sm"><a class="badge px-2" href="#">CSUN Alum<i class="fas fa-graduation-cap ml-2"></i></a></div>
                            
                            <ul class="FAC-banner__icons">
                                <li class="list-inline-item">
                                    <a href="#"><i class="fab fa-twitter-square fa-lg"></i></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#"><i class="fab fa-facebook fa-lg"></i></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#"><i class="fab fa-linkedin fa-lg"></i></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#"><i class="fab fa-github-square fa-lg"></i></a>
                                </li>
                            </ul>                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="tab-container">
            <div class="container">
              <ul class="nav">
                <li class="nav-item"> <router-link class="nav-link" to="/FacultyProfile">HOME</router-link> </li>
                <li class="nav-item"> <router-link class="nav-link" to="/FacultyProfileClasses">CLASSES</router-link> </li>
              </ul>
              
            </div>
        </div></div>
</template>
<script>
export default {
    name: 'ProfileBanner'
}
</script>

