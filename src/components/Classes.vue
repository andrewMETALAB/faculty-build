<template>
    <div id="classes">
        <div class="container pt-4">
            <div class="row">                 
                <div class="col-md-4">
                    <div>
                        <h6>PAST COURSES</h6>
                        <ul>
                            <li class="pb-4 pt-3">
                                <strong>COMP 485 </strong>
                                <div>Human-Computer Interaction</div>
                                <div>Last Offered Sp'18</div>
                                <div>Taught 3 terms</div>
                            </li>
                            <li class="pb-4">
                                <strong>COMP 485 </strong>
                                <div>Human-Computer Interaction</div>
                                <div>Last Offered Sp'18</div>
                                <div>Taught 3 terms</div>
                            </li>
                            <li class="pb-4">
                                <strong>COMP 485 </strong>
                                <div>Human-Computer Interaction</div>
                                <div>Last Offered Sp'18</div>
                                <div>Taught 3 terms</div>
                            </li>
                            <li class="pb-4">
                                <strong>COMP 485 </strong>
                                <div>Human-Computer Interaction</div>
                                <div>Last Offered Sp'18</div>
                                <div>Taught 3 terms</div>
                            </li>
                            <li class="pb-4">
                                <strong>COMP 485 </strong>
                                <div>Human-Computer Interaction</div>
                                <div>Last Offered Sp'18</div>
                                <div>Taught 3 terms</div>
                            </li>
                            <li class="pb-4">
                                <strong>COMP 485 </strong>
                                <div>Human-Computer Interaction</div>
                                <div>Last Offered Sp'18</div>
                                <div>Taught 3 terms</div>
                            </li>
                            <li class="pb-4">
                                <strong>COMP 485 </strong>
                                <div>Human-Computer Interaction</div>
                                <div>Last Offered Sp'18</div>
                                <div>Taught 3 terms</div>
                            </li>
                        </ul>
                    </div>
                    
                  
                </div>
                <div class="col-md-8 pr-3">
                    <h2>My Academic Schedule</h2>
                    <div>
                        <h3 class="list-inline-item">Fall 2018</h3>
                        <!-- <button type="button" class="btn btn-outline-primary"><i class="fas fa-print fa-xs"></i> Printer Friendly Door Sign</button>
                        <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Choose Semester <span class="sr-only">Toggle Dropdown</span></button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div> -->
                        <select class="custom-select" id="inputGroupSelect01">
                            <option selected>Choose Semester</option> 
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <i class="fas fa-caret-down"></i>
                        </select>
                    </div>
                    
                    <hr class="FAC-semester-divider">

                    <!-- *************************  CLASSES ****************************** -->
                            <div class="FAC-downloadBtn">
                                <div class="FAC-downloadBtn__orientation">
                                    <button type="button" class="btn btn-outline-primary mt-2"><i class="fas fa-calendar-alt fa-xs"></i> Download Classes Schedule</button>
                                </div>
                            </div>
                    
                    
                    

                    <div><h3 class="list-inline-item">Classes</h3>
                        <div class="container">
                            <div class="row">
                                <div class="col-4 pl-0">DESCRIPTION</div>
                                <div class="col-1 pl-0">DAYS</div>
                                <div class="col-3">TIME</div>
                                <div class="col-2">LOCATION</div>
                                <div class="col-2 text-center">INFO</div>
                            </div>
                            <div class="row FAC-class-wrapper py-3">
                                <div class="col-4 ">
                                    <div><strong>CIT 160 </strong>(20433)</div> 
                                    <div class="FAC-italisized">Internet Technologies</div>
                                </div>
                                <div class="col-1 pl-0">M W</div>
                                <div class="col-3">1:00 p.m - 1:50 p.m.</div>
                                <div class="col-2"><a href="#"><i class="fas fa-map-marker-alt px-1 FAC-location-icons"></i>JD3520</a></div>
                                <div class="col-2 text-center"><i class="fas fa-file-pdf mr-2 FAC-info-icons"></i><i class="fas fa-book mr-2 FAC-info-icons"></i><i class="fas fa-calendar-alt FAC-info-icons"></i></div>
                            </div>
                        </div>
                    </div>

                    <!-- *************************  OFFICE HOURS ****************************** -->

                    
                    <div class="FAC-downloadBtn">
                        <div class="FAC-downloadBtn__orientation">
                            <button type="button" class="btn btn-outline-primary mt-4"><i class="fas fa-calendar-alt fa-xs"></i> Download Office Hours</button>
                        </div>
                    </div>
                    <div>
                        <!-- MOVE THE DESCRIPTION ONE TO 3 and MOVE THE REST OVER 1 -->
                        <h3 class="list-inline-item">Office Hours</h3>
                        <div class="container">
                            <div class="row">
                                <div class="col-4 pl-0">DESCRIPTION</div>
                                <div class="col-1 pl-0">DAYS</div>
                                <div class="col-3">TIME</div>
                                <div class="col-2">LOCATION</div>
                                <div class="col-2 text-center">iCAL</div>
                            </div>
                        </div>
                        <div class="container FAC-officeHours-wrapper">
                            <div class="row FAC-darkStriped py-3">
                              <div class="col-4 ">
                                    <div><strong>General Office Hours</strong></div> 
                                    <div class="FAC-italisized">Walk-In & Appointment</div>
                                </div>
                                <div class="col-1 pl-0">M T</div>
                                <div class="col-3">
                                    <div>1:00 p.m - 1:50 p.m.</div> 
                                    <div><a href="#">Book an Appointment</a></div>
                                </div>
                                <div class="col-2"><a href="#"><i class="fas fa-map-marker-alt px-1 FAC-location-icons"></i>META+LAB</a></div>
                                <div class="col-2 text-center"><i class="fas fa-calendar-alt FAC-info-icons"></i></div>
                            </div>
                            <div class="row FAC-whiteStriped py-3">
                                <div class="col-4 ">
                                    <div><strong>Graduate Advisement</strong></div> 
                                    <div class="FAC-italisized">Appointment Only</div>
                                </div>
                                <div class="col-1 pl-0">T R</div>
                                <div class="col-3">
                                    <div><a href="#">Book an Appointment</a></div>
                                </div>
                                <div class="col-2"><a href="#"><i class="fas fa-map-marker-alt px-1 FAC-location-icons"></i>JD3520</a></div>
                                <div class="col-2 text-center"><i class="fas fa-calendar-alt FAC-info-icons"></i></div>
                            </div>
                            <div class="row FAC-darkStriped py-3">
                                <div class="col-4 ">
                                    <div><strong>CIT 160</strong></div> 
                                    <div class="FAC-italisized">Walk-In & Appointment</div>
                                </div>
                                <div class="col-1 pl-0">W</div>
                                <div class="col-3">
                                    <div>2:00 p.m - 3:00 p.m.</div> 
                                    <div><a href="#"><i class="far fa-envelope pr-1 FAC-info-icons"></i>Request an Appointment</a></div>
                                </div>
                                <div class="col-2"><a href="#"><i class="fas fa-map-marker-alt px-1 FAC-location-icons"></i>META+LAB</a></div>
                                <div class="col-2 text-center"><i class="fas fa-calendar-alt FAC-info-icons"></i></div>
                            </div>
                            <div class="row FAC-whiteStriped py-3">
                                <div class="col-4 ">
                                    <div><strong>Appointment Only</strong></div> 
                                    <div class="FAC-italisized">Walk-In & Appointment</div>
                                </div>
                                <div class="col-1 pl-0">F</div>
                                <div class="col-3">
                                    <div>1:00 p.m - 1:50 p.m.</div> 
                                    <div><a href="#">Book an Appointment</a></div>
                                </div>
                                <div class="col-2"><a href="#"><i class="fas fa-map-marker-alt px-1 FAC-location-icons"></i>META+LAB</a></div>
                                <div class="col-2 text-center"><i class="fas fa-calendar-alt FAC-info-icons"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Classes'
}
</script>
<style lang="scss">
    .custom-select{
       background:red;
        width:20%;
        
    }
</style>
