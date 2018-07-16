<template>
<div>
    
        <!-- header is white bar at top -->
        <header></header> 
        <!-- for now keep this div that contains the image element, since its placeholder, later just make the class part of the image so the properties will apply to it directly. -->
        
        
        <section class="FAChome">
            <div id="FACoverlay"></div>
            <div class="container">
                <div class="row pt-5">
                    <div class="col-3">
                         <img class="FACprofileImage" src="https://cdn.metalab.csun.edu/media/faculty/steven.fitzgerald/avatar.jpg" alt="Steve Fitzgerald">
                    </div>
                    <div class="col-8 pt-5">
                        <div>
                            <div class="FACdepartment py-1">PROFESSOR | <a href="#">Computer Science</a></div>
                            <div class="FACfacultyname py-1">Steve Fitzgerald</div>
                            <div class="FACfacultytitle py-1">Faculty Director - META+LAB</div>
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
                  <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Classes</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Students</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Projects</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Publications</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Committees</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Misc</a>
                </li>
              </ul>
              
            </div>
        </div>
        <div class="container">
            <div class="wrapper">
                <div class="row">
                        
                    <div class="col-3">
                        <div class="FACborder-line-wrapper">
                            <h6>CONTACT</h6>
                            <ul>
                                <li> <a href="#">steven.fitzgerald@csun.edu</a></li>
                                <li> <a href="#">http://www.csun.edu/~steve</a></li>
                                <li> <a href="#">818-677-4655</a></li>
                                <li> <a href="#">META+LAB: 9423 Reseda Blvd</a></li>
                            </ul>
                        </div>
                        <div class="FACborder-line-wrapper">
                            <h6>DEGREES</h6>
                            <ul class="timeline">
                                <li class="timeline__header"><strong>D.Sc.</strong> 1995, Cool University</li>
                                <li class="timeline__header"><strong>M.S.</strong> 1990, Coolest University</li>
                                <li class="timeline__header"><strong>B.S.</strong> 1986, Coolio University</li>
                            </ul>
                        </div>
                        <div class="FACborder-line-wrapper ">
                            <h6>EXPERTISE</h6>
                            <h6><span class="badge badge-success py-1 px-2"><a href="#">Cloud Computing (laas)</a></span></h6>
                            <h6><span class="badge badge-success py-1 px-2"><a href="#">Web Technology</a></span></h6>
                            <h6><span class="badge badge-success py-1 px-2"><a href="#">Web Development</a></span></h6>
                            <h6><span class="badge badge-success py-1 px-2"><a href="#">Programming Languages</a></span></h6>
                            <h6><span class="badge badge-success py-1 px-2"><a href="#">Compilers</a></span></h6>
                            <h6><span class="badge badge-success py-1 px-2"><a href="#">Parallel and Distributed Programming</a></span></h6>
                        </div>
                        <h6>CONNECTIONS</h6>
                        <!-- did you want cards?  not a list :) class="card" class="card-body" 1 is 2 is not link-->
                        <div class="card text-center mb-3">
                            <div class="card-body p-3">
                                <div> <a href="#">Computer Science</a></div>
                            </div>
                        </div>
                        <div class="card text-center mb-3 ">
                            <div class="card-body p-3">
                                <div> <a href="#">META+LAB</a></div>
                            </div>
                        </div>
                        <div class="card text-center mb-3">
                            <div class="card-body p-3">
                                <div> <a href="#">Advancing Technology Laboratory @Techlab</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-9">
                        <h1>Overview</h1>
                        <p>Steven Fitzgerald is a Professor of Computer Science at California State University, Northridge, and his teaching focus is on operating systems, compilers, and networking. During his tenure, Steve has also held several administrative positions including: Information Security Officer, Director of Academic Technology, and Chief Technology Officer.</p>

                        <p>Steve's research interests include high performance computing, identity management, grid computing, and cloud computing. Steve has participated in a number of research projects associated with Lawrence Livermore National Laboratory and the University of Southern California's Information Sciences Institute. During Steve's recent sabbatical, he worked for Eucalyptus Systems, a startup company producing Cloud Computing software. Eucalypus Systems was subsequenlty purchased by Hewlett Packard Enterprise, and is now refer to as HPE Helion Eucalyptus . Steve was responsible for developing and expanding their customer support services and for building out their IT infrastructure.</p>
                        
                        <p>In his current role, Steve also serves as the Faculty Co-Director of the Matador Emerging Technology and Arts Laboratory (META+LAB). This group is composed of a team of students, mentored by faculty members, that develop web applications and engages in other activities to improve campus services via the use of leading-edge technologies.</p>

                        <h1>Team Environment</h1>
                        <h2 class="py-2">Team Rules</h2>
                        <ul class="list-group">
                            <li class="list-group-item py-2">In all discussions as a team, we are peers.</li>
                            <li class="list-group-item py-2">I will take 100% responsibility to make sure I understand what you mean, and I will take 100% responsibility for the clarity of my communication to you.</li>
                            <li class="list-group-item py-2">I will operate with integrity and candor at all times.</li>
                            <li class="list-group-item py-2">I will not shoot the messenger.</li>
                            <li class="list-group-item py-2">I will not criticize without making alternative recommendations.</li>
                            <li class="list-group-item py-2">I will focus on the results, not the problem.</li>
                            <li class="list-group-item py-2">I will help others live by the ground rules.</li>
                            <li class="list-group-item py-2">Once a decision is made, I will support it 100%.</li>
                        </ul>

                        <h2 class="py-3">Team Tenets</h2>

                        <!-- ACCORDION HERE!! -->
                        <div id="accordion">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>


                        <!-- <div class="accordion"></div> -->

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
