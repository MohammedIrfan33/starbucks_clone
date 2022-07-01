function resize(){

}

$(document).ready(function(){
    let menuButton = document.getElementById("menu-btn");
    let nav = document.getElementById("menu");
    
    
    function navToggle(){
       menuButton.classList.toggle("open");
       nav.classList.toggle("hidden");
       document.body.classList.toggle("no-sroll")
    }
    
    menuButton.addEventListener("click",navToggle)
    resize();
});
  
$(window).resize(function(){
    resize();
});

$(window).on('load',function(){
    resize();
});


