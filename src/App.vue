<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

*{box-sizing: border-box;}
header{
    background:white;
    width:100%;
    height:45px;
}
.homeimg{
    height:297px;
    width:100%;
    background-color:#D22030;
}
.container{
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}
.tab-container{
    border-bottom:solid 0.3px rgb(236, 236, 236);
}

.border-line-wrapper{
    border-bottom:solid 0.3px rgb(236, 236, 236);
    padding-bottom: 1rem;
    margin-bottom:1rem;
}
.wrapper{
    padding-top:40px;
}
h1{
    font-size: 30px;
    font-weight:300;
    color:rgb(75, 75, 75);
}
h2{
    font-size:20px;
    font-weight:300;
    color:rgb(75, 75, 75);
}
h6{
    /* font-size:15px; */
    font-weight:500;
    color:rgb(75, 75, 75);

}
.nav-link{
    padding: .5rem 1.4rem;
    color:grey;
}
ul{
    text-decoration: none;
    list-style-type: none;
    margin:0;
    padding:0;
    color:grey;
    font-weight:300;
}
p{
    color:grey;
    font-weight:300;
}
.card{
    text-align:center;
}

footer{
    height:100px;
    background:silver;
    width:100%;
    margin-top:5rem;
}
.connection-links a{
    border:solid 1px grey;
    padding:1rem 2rem;
    margin:0;
    
    
    text-align: center;
    color:grey;
    margin:10px 0;
    display: inline-block;
}
</style>
