<template>
<div>
    
        <!-- header is white bar at top -->
        <!-- <header></header> -->
        <!-- for now keep this div that contains the image element, since its placeholder, later just make the class part of the image so the properties will apply to it directly. -->
        
        
        <section class="FAC-banner">
            <div id="FAC-banner__overlay"></div>
            <div class="container">
                <div class="row pt-3">
                    <!-- I STAYED AT 3 AND 8 COLUMNS, BECAUSE THAT'S HOW THE MOCKUP WAS.. STILL WANT ME TO CHANGE? IT LOOKS WEIRD WHEN CHANGED -->
                    <div class="col-12 col-lg-3">
                        <h1 class="FAC-banner__nameVertical">Steve Fitzgerald</h1>
                         <img class="FAC-banner__image mt-3" src="https://cdn.metalab.csun.edu/media/faculty/steven.fitzgerald/avatar.jpg" alt="Steve Fitzgerald">
                    </div>
                    <div class="col-12 col-lg-9 ">
                        <div id="FAC-banner__content">
                            <div class="FAC-banner__department">PROFESSOR | <a href="#">Computer Science</a></div>
                            <h1 class="FAC-banner__name">Steve Fitzgerald</h1>
                            <div class="FAC-banner__title">Faculty Director - META+LAB</div>
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
        <div class="container pt-4">
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
                        <!-- I put them in a div, because the display:block would take up the whole space. -->
                            <div><a class="badge py-1 px-2 my-1" href="#">Cloud Computing (laas)</a></div>
                            <div><a class="badge py-1 px-2 my-1" href="#">Web Technology</a></div>
                            <div><a class="badge py-1 px-2 my-1" href="#">Web Development</a></div>
                            <div><a class="badge py-1 px-2 my-1" href="#">Programming Languages</a></div>
                            <div><a class="badge py-1 px-2 my-1" href="#">Compilers</a></div>
                            <div><a class="badge py-1 px-2 my-1" href="#">Parallel and Distributed Programming</a></div>
                    </div>
                    <h6>CONNECTIONS</h6>
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
                    <h2>Overview</h2>
                    <p>Steven Fitzgerald is a Professor of Computer Science at California State University, Northridge, and his teaching focus is on operating systems, compilers, and networking. During his tenure, Steve has also held several administrative positions including: Information Security Officer, Director of Academic Technology, and Chief Technology Officer.</p>

                    <p>Steve's research interests include high performance computing, identity management, grid computing, and cloud computing. Steve has participated in a number of research projects associated with Lawrence Livermore National Laboratory and the University of Southern California's Information Sciences Institute. During Steve's recent sabbatical, he worked for Eucalyptus Systems, a startup company producing Cloud Computing software. Eucalypus Systems was subsequenlty purchased by Hewlett Packard Enterprise, and is now refer to as HPE Helion Eucalyptus . Steve was responsible for developing and expanding their customer support services and for building out their IT infrastructure.</p>
                    
                    <p>In his current role, Steve also serves as the Faculty Co-Director of the Matador Emerging Technology and Arts Laboratory (META+LAB). This group is composed of a team of students, mentored by faculty members, that develop web applications and engages in other activities to improve campus services via the use of leading-edge technologies.</p>

                    <h2>Team Environment</h2>
                    <h3 class="py-2">Team Rules</h3>
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

                    <h3 class="py-3">Team Tenets</h3>

                    <!-- ACCORDION HERE!!  using <h5> as accordion buttons if okay. --> 

                    <div id="accordion">
                        <!-- ******************   1   ************************ -->

                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Lead by example
                                    </button>
                                </h5>
                            </div>

                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                    Rather then telling others how to do things and complaining, we need to set an example: determine what needs to be done and help to get it done. This could be something as simple as "washing the dishes", setting a productive tone in meetings, or helping others to succeed. Our actions always say more about who we are than do our words!
                                </div>
                            </div>
                        </div>
                            <!-- *************************   2   ************************* -->

                        <div class="card">
                            <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Transform stress into productive forward movement (aka Venting)

                                </button>
                            </h5>
                            </div>

                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="card-body">
                                As we move forward, there will be challenges, and these challenges can induce tension. There is nothing wrong with some free expression to relieve some stress -- but over venting can be detrimental. Moreover, we need to make sure each of us knows when the other is venting. Once you relieved the stress, its time to figure out the best way to move forward in a productive way.
                            </div>
                            </div>
                        </div>

                        <!-- ***************************   3   ************************** -->


                        <div class="card">
                            <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Apply the 6Ps, even when adapting: (6Ps: Proper Planning Prevents Piss Poor Performance)
                                </button>
                            </h5>
                            </div>

                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div class="card-body">
                                We often find ourselves in a position where our plans need to change. These course corrections are often introduced by factors outside of our control. So as we plan, we must take steps to ensure that these plans are resilient. As necessary, we need to re-examine the original plan and adjust as quickly as possible to address the new situation. (I often hear quoted that its is not the strongest that survive but those that have the ability to adapt.)
                            </div>
                            </div>
                        </div>
                            <!-- **************************   4   ************************** -->


                        <div class="card">
                            <div class="card-header" id="headingFour">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Strive to be a LifeGuard as opposed to a FireFighter
                                </button>
                            </h5>
                            </div>

                            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                            <div class="card-body">
                                From time to time, there will be a crisis to which we will need to react. Both lifeguards and a firefighters are known to have the ability to jump into action to perform a rescue. An admirable skill that we must possess. The question is: "Which is better, to be a lifeguard or a firefighter?"
                            </div>
                            </div>
                        </div>
                            <!-- ****************************   5   ****************************** -->


                        <div class="card">
                            <div class="card-header" id="headingFive">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Take the High Road
                                </button>
                            </h5>
                            </div>

                            <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                            <div class="card-body">
                                In all interactions, we should presume that others are making good faith efforts to move forward in a positive way. We should act accordingly. <br><br>


                        There will be cases, however, that other's actions will work contrary to our goals and, furthermore, they may comport themselves inappropriately. Although we may obtain some satisfaction to respond in kind, we should continue to strive to live by our own high standards.<br><br>

                        We have zero control over the actions of others, and only we have control over our actions.
                            </div>
                            </div>
                        </div>
                            <!-- ***************************   6  ***************************** -->



                        <div class="card">
                            <div class="card-header" id="headingSix">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        Based upon the feedback that I have received, ...
                                </button>
                            </h5>
                            </div>

                            <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                            <div class="card-body">
                                It is important to obtain input from others. Their input can help inform our decisions and can help build consensus. We should, however, never fail to execute because we are waiting on input. Once you have provided sufficient time for others to provide feedback, you should use your best professional judgement to move forward.<br><br>

                        If you are waiting on my input, you should also proceed with your best judgement. You should "presume" you have my tacit approval. If I turns out that I am unhappy with the decision, the onus of the problem is mine -- for I am the one that should have been more timely in my feedback. We will learn from experience and move forward.
                            </div>
                            </div>
                        </div>
                            <!-- *************************   7   ************************* -->

                        <div class="card">
                            <div class="card-header" id="headingSeven">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        Act, don't react, ...
                                </button>
                            </h5>
                            </div>

                            <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                            <div class="card-body">
                                Many of times, some event will occur and we will want to react or we are expected to react. In this situation, the watchword is patience. Listen to what is being stated, but extract the underlying meaning of what is intended to be conveyed. (Remember the quote "It is not what I say, it is what I mean.") <br><br>

                        Once you have time to formulate an appropriate action plan... ACT!
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

