const header=document.getElementsByClassName("header")[0];
const Topo=header.offsetTop;

window.onscroll=function(){
    FixarNoTopo();
}

function FixarNoTopo(){
    if(window.pageYOffset>=Topo){
        header.classList.add("main-header");
    }
    else{
        header.classList.remove("main-header")
    }
}


