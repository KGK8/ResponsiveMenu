const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const nava = document.querySelectorAll('.nav-links a');
    var navfix = document.getElementsByTagName("nav");
    console.log(navfix);
    console.log(nava);

    burger.addEventListener('click',() =>{
        nav.classList.toggle('nav-active');
        navLinks.forEach((link,index) =>{
        if (link.style.animation) {
            link.style.animation = ''
        }else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
        }
    });

    burger.classList.toggle('toggle');    
});

    window.addEventListener('scroll', () => {
        const pos = window.scrollY;
        const maxscroll = document.documentElement.scrollHeight - window.innerHeight;
        // console.log(pos);
        // console.log(maxscroll);// const maxscroll = 500;
        // if (Math.ceil(pos) > 350) {
            if (pos > 100) {
            navfix[0].classList.add("nav-fixed");
        }
        else{
            navfix[0].classList.remove("nav-fixed");
        }
    });
  
    

}


function menuClose() {
    if(document.querySelector('.nav-links').classList.toggle('nav-active')){
        document.querySelector('.nav-links').classList.remove('nav-active');
    }
    else{
        document.querySelector('.burger').classList.remove('toggle');
    }

    window.onload = function(){
        //hide the preloader
        document.querySelector('.preloader').style.display = 'none';
        document.getElementsByClassName('cont')[0].classList.remove('load');
    }
} 


navSlide();
menuClose();