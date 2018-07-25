<template>
<div>
    
        <!-- header is white bar at top -->
        <!-- <header></header> -->
        <!-- for now keep this div that contains the image element, since its placeholder, later just make the class part of the image so the properties will apply to it directly. -->
        
        
        <section class="FAC-banner">
            <div id="FAC-banner__overlay"></div>
            <div class="container">
                <div class="row align-items-center pt-3">
                    <!-- I STAYED AT 3 AND 8 COLUMNS, BECAUSE THAT'S HOW THE MOCKUP WAS.. STILL WANT ME TO CHANGE? IT LOOKS WEIRD WHEN CHANGED -->
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

        <!-- flex-column is default and flex-md-row for all else after md≈ -->
        <div class="tab-container">
            <div class="container">
              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link active" href="#">HOME</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">CLASSES</a>
                </li>
              </ul>
              
            </div>
        </div>
        <div class="container pt-4">
            <div class="row">                 
                <div class="col-4">
                    <div class="FAC-contact FACborder-line-wrapper">
                        <h6>CONTACT</h6>
                        <ul>
                            <li> <i class="far fa-envelope fa-lg pr-2"></i><a href="#">steven.fitzgerald@csun.edu</a></li>
                            <li> <i class="fas fa-globe-americas fa-lg pr-2"></i><a href="#">http://www.csun.edu/~steve</a></li>
                            <li> <i class="fas fa-phone fa-lg pl-2"></i><a href="#">818-677-4655</a></li>
                            <li> <i class="fas fa-map-marker-alt fa-lg px-1"></i> <a href="#">META+LAB: 9423 Reseda Blvd</a></li>
                        </ul>
                    </div>
                    <div class="FACborder-line-wrapper">
                        <h6>DEGREES</h6>
                        <ul class="timeline">
                            <li class="timeline__header pb-3"><strong>D.Sc. Computer Science</strong> 1995, University of Massachusetts Lowell</li>
                            <li class="timeline__header pb-3"><strong>M.S. Computer Science</strong> 1990, University of Massachusetts Lowell</li>
                            <li class="timeline__header pb-3"><strong>B.S. Computer Science</strong> 1986, Lowell University</li>
                        </ul>
                    </div>
                    <div class="FACborder-line-wrapper ">
                        <h6>INTERESTS</h6>
                        <a class="badge py-2 px-2 my-1" href="#">Cloud Computing (laas)</a>
                        <a class="badge py-2 px-2 my-1" href="#">Web Technology</a>
                        <a class="badge py-2 px-2 my-1" href="#">Compilers</a>
                        <a class="badge py-2 px-2 my-1" href="#">Web Development</a>
                        <a class="badge py-2 px-2 my-1" href="#">Programming Languages</a>
                        <a class="badge py-2 px-2 my-1" href="#">Parallel and Distributed Programming</a>
                    </div>
                </div>
                <div class="col-8 pr-3">
                    <div class="FAC-contact-sm FACborder-line-wrapper">
                        <h6>CONTACT</h6>
                        <ul>
                            <li> <i class="far fa-envelope fa-lg pr-2"></i><a href="#">steven.fitzgerald@csun.edu</a></li>
                            <li> <i class="fas fa-globe-americas fa-lg pr-2"></i><a href="#">http://www.csun.edu/~steve</a></li>
                            <li> <i class="fas fa-phone fa-lg pl-2"></i><a href="#">818-677-4655</a></li>
                            <li> <i class="fas fa-map-marker-alt fa-lg px-1"></i> <a href="#">META+LAB: 9423 Reseda Blvd</a></li>
                        </ul>
                    </div>
                    
                    <h2>Overview</h2>
                    <div class="FAC-Overview__content">
                        <p>Steven Fitzgerald is a Professor of Computer Science at California State University, Northridge, and his teaching focus is on operating systems, compilers, and networking. During his tenure, Steve has also held several administrative positions including: Information Security Officer, Director of Academic Technology, and Chief Technology Officer.</p>

                        <p>Steve's research interests include high performance computing, identity management, grid computing, and cloud computing. Steve has participated in a number of research projects associated with Lawrence Livermore National Laboratory and the University of Southern California's Information Sciences Institute. During Steve's recent sabbatical, he worked for Eucalyptus Systems, a startup company producing Cloud Computing software. Eucalypus Systems was subsequenlty purchased by Hewlett Packard Enterprise, and is now refer to as HPE Helion Eucalyptus . Steve was responsible for developing and expanding their customer support services and for building out their IT infrastructure.</p>
                        
                        <p>In his current role, Steve also serves as the Faculty Co-Director of the Matador Emerging Technology and Arts Laboratory (META+LAB). This group is composed of a team of students, mentored by faculty members, that develop web applications and engages in other activities to improve campus services via the use of leading-edge technologies.</p>
                    </div>
                    <h2>Badges & Awards</h2>

                    <div class="container">
                        <div class="row pt-2">
                            <div class="col-lg-4 col-12 pl-0">
                                 <div class="media">
                                    <div class="media-left pr-3 pb-3">
                                        <img src="http://via.placeholder.com/50x65" class="media-object " style="width:60px">
                                    </div>
                                    <div class="media-body align-self-center">
                                        <p>Probationary<br>Faculty Grant (2014)</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-12 pl-0">
                                 <div class="media">
                                    <div class="media-left pr-3 pb-3">
                                        <img src="http://via.placeholder.com/50x65" class="media-object" style="width:60px">
                                    </div>
                                    <div class="media-body align-self-center">
                                        <p>Probationary<br>Faculty Grant (2014)</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-12 pl-0">
                                 <div class="media">
                                    <div class="media-left pr-3 pb-3">
                                        <img src="http://via.placeholder.com/50x65" class="media-object" style="width:60px">
                                    </div>
                                    <div class="media-body align-self-center">
                                        <p>Probationary<br>Faculty Grant (2014)</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-12 pl-0">
                                 <div class="media">
                                    <div class="media-left pr-3 pb-3">
                                        <img src="http://via.placeholder.com/50x65" class="media-object" style="width:60px">
                                    </div>
                                    <div class="media-body align-self-center">
                                        <p>Teaching Conference<br>Grant (2015)</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-12 pl-0">
                                 <div class="media">
                                    <div class="media-left pr-3 pb-3">
                                        <img src="http://via.placeholder.com/50x65" class="media-object" style="width:60px">
                                    </div>
                                    <div class="media-body align-self-center">
                                        <p>Teaching Conference<br>Grant (2015)</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-12 pl-0">
                                 <div class="media">
                                    <div class="media-left pr-3 pb-3">
                                        <img src="http://via.placeholder.com/50x65" class="media-object" style="width:60px">
                                    </div>
                                    <div class="media-body align-self-center">
                                        <p>Teaching Conference<br>Grant (2015)</p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    <footer>
        <div class="container">
            <div class="row pt-5">
                <div class="col-5">
                    <div class="row">
                        <div class="col-3">
                            <img class="FACcsunEmblem" src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/CSUNS.svg/1200px-CSUNS.svg.png" alt="csun logo">
                        </div>
                        <div class="col-9">
                            <h6>META+LAB </h6><div style="font-size:12px;">© California State University, Northridge <br> 18111 Nordhoff Street, Northridge, CA 91330 <br>Phone: (818) 677-1200 / Contact Us</div>
                        </div>
                    </div>
                </div>
                <div class="col-7">
                    <div class="row">
                        <div class="col-4">
                            <div> Emergency Information <br> University Policies & Procedures</div>

                        </div>
                        <div class="col-4">
                            <div>Emergency Information <br> University Policies & Procedures</div>

                        </div>
                        <div class="col-4">
                            <div>Emergency Information <br> University Policies & Procedures</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style lang="scss">
   @import '../sass/main.scss'
</style>

