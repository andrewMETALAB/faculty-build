<template>


<div>
    
        <!-- header is white bar at top -->
        <header></header> 
        <!-- for now keep this div that contains the image element, since its placeholder, later just make the class part of the image so the properties will apply to it directly. -->
        <div class="homeimg"> 
            <img src="#" alt="currently placeholder, but will be image of csun or other."> 
        </div>

        <div class="tab-container">
            <div class="container">
                <nav class="nav">
                    <a class="nav-link active" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                </nav>
            </div>
        </div>
        <div class="container">
            <div class="wrapper">
                <div class="row">
                        
                    <div class="col-3">
                        <div class="border-line-wrapper">
                            <h6>CONTACT</h6>
                            <ul>
                                <li> <a href="#"></a>steven.fitzgerald@csun.edu</li>
                                <li> <a href="#"></a>http://www.csun.edu/~steve</li>
                                <li> <a href="#"></a>818-677-4655</li>
                                <li> <a href="#"></a>META+LAB: 9423 Reseda Blvd</li>
                            </ul>
                        </div>
                        <div class="border-line-wrapper">
                            <h6>DEGREES</h6>
                            <ul class="timeline">
                                <li class="timeline__header"><strong>D.Sc.</strong> 1995, Cool University</li>
                                <li class="timeline__header"><strong>M.S.</strong> 1990, Coolest University</li>
                                <li class="timeline__header"><strong>B.S.</strong> 1986, Coolio University</li>
                            </ul>
                        </div>
                        <div class="border-line-wrapper">
                            <h6>EXPERTISE</h6>
                            <h6><span class="badge badge-secondary">New</span></h6>
                            <h6><span class="badge badge-secondary">New</span></h6>
                            <h6><span class="badge badge-secondary">New</span></h6>
                            <h6><span class="badge badge-secondary">New</span></h6>
                        </div>
                        <h6>CONNECTIONS</h6>
                        <!-- did you want cards? -->
                        <div class="card" style="width: 18rem;">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Computer Science</li>
                                <li class="list-group-item">META+LAB</li>
                                <li class="list-group-item">Advancing Technology Laboratory @Techlab</li>
                            </ul>
                        </div>

                    </div>

                        
                    <div class="col-8">
                            <h1>Overview</h1>
                            <p>Steven Fitzgerald is a Professor of Computer Science at California State University, Northridge, and his teaching focus is on operating systems, compilers, and networking. During his tenure, Steve has also held several administrative positions including: Information Security Officer, Director of Academic Technology, and Chief Technology Officer.</p>

                            <p>Steve's research interests include high performance computing, identity management, grid computing, and cloud computing. Steve has participated in a number of research projects associated with Lawrence Livermore National Laboratory and the University of Southern California's Information Sciences Institute. During Steve's recent sabbatical, he worked for Eucalyptus Systems, a startup company producing Cloud Computing software. Eucalypus Systems was subsequenlty purchased by Hewlett Packard Enterprise, and is now refer to as HPE Helion Eucalyptus . Steve was responsible for developing and expanding their customer support services and for building out their IT infrastructure.</p>
                            
                            <p>In his current role, Steve also serves as the Faculty Co-Director of the Matador Emerging Technology and Arts Laboratory (META+LAB). This group is composed of a team of students, mentored by faculty members, that develop web applications and engages in other activities to improve campus services via the use of leading-edge technologies.</p>

                            <h1>Team Environment</h1>
                            <h2>Team Rules</h2>

                    </div>
                </div>
            </div>
        </div>
    <footer></footer>
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
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
