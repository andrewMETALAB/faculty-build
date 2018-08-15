<template>
    <div> 
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-5">
                        <div class="row">
                            <div class="col-12 col-md-3">
                                <img class="FACcsunEmblem" src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/CSUNS.svg/1200px-CSUNS.svg.png" alt="csun logo">
                            </div>
                            <div class="col-12 col-md-9">
                                <h6>META+LAB </h6><div class="FAC-footer__text">© California State University, Northridge <br> 18111 Nordhoff Street, Northridge, CA 91330 <br>Phone: (818) 677-1200 / Contact Us</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-7">
                        <div class="row">
                            <div class="col-12 col-md-4">
                                <div class="FAC-footer__text"><a href="#">Emergency Information</a><br> <a href="#">University Policies & Procedures</a></div>

                            </div>
                            <div class="col-12 col-md-4">
                                <div class="FAC-footer__text"><a href="#">Terms and Conditions for Use</a><br><a href="#">Privacy Policy</a>  <br><a href="#">Document Reader</a></div>

                            </div>
                            <div class="col-12 col-md-4">
                                <div class="FAC-footer__text"><a href="#">California State University</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="FAC-metaLabFooter mt-3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="FAC-metaLabLogo">META<span>+</span>LAB</div>
                            <div class="FAC-metaLabLink"><a href="#">metalab.csun.edu</a></div>
                        </div>
                        <div class="offset-md-6 col-md-4 align-self-center">
                            <div class="FAC-metaLabMotto">Explore. Learn. Go Beyond.</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>


    export default {
        name: 'Footer'
    }
</script>
<style lang="scss">
   @import '../sass/main.scss';



    footer{
        height:175px;
        background:white;
        width:100%;
        margin-top:3rem;
        font-size:12px;
        a{
            color:black;
            &:hover{
                color:black;
            }
        }
        .FACcsunEmblem{
            width:75px;
        }
        .FAC-metaLabFooter{
            height: auto;
            background:rgb(39, 39, 39);
            color:rgb(235, 235, 235);
            padding-top:15px;
            padding-bottom:15px;
            padding-left:10px;
            .FAC-metaLabLogo{
                font-size:1rem;
                padding-bottom:3px;
                letter-spacing:2px;
                span{
                    color:red;
                    font-size:1.4rem;
                    font-weight:100;
                }
            }
            .FAC-metaLabLink a{
                color:rgb(167, 167, 167);
                font-weight:100;
                font-size:.9rem;
            }
            .FAC-metaLabMotto{
                color:rgb(114, 114, 114);
                font-size:.9rem;
                font-weight:200;
                float:right;
            }
        }
    }

//************* MEDIA QUERIES ******************

    @include media-breakpoint-down(sm){
        footer{
            text-align: center;
            .FACcsunEmblem{
                width:100px;
                
            }
            padding-bottom:300px;
            .col-12{
                padding-bottom:15px;
            }
            .FAC-metaLabFooter{
                .FAC-metaLabMotto{
                    color:rgb(80, 80, 80);
                    font-size:.9rem;
                    padding-top:20px;
                    float:none;
                }
            } 
        }
    }
</style>


