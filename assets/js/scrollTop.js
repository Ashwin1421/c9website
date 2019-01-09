window.onscroll = function(){
    scrollFunction();
};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("scroll-to-top").style.display = "block";
    } else {
        document.getElementById("scroll-to-top").style.display = "none";
    }
}

function returnToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}