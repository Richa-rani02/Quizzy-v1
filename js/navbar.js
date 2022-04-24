opennav=document.querySelector("#open-nav-menu");
closenav=document.querySelector("#close-nav-menu");
navList=document.querySelector(".nav-list");

closenav.style.display="none";

opennav.addEventListener('click', () => {
	navList.classList.add('nav-links-mobile');
    navList.classList.remove('nav-links');
    closenav.style.display="block";
    opennav.style.display="none";
});
closenav.addEventListener('click', () => {
	navList.classList.add('nav-links');
    navList.classList.remove('nav-links-mobile');
    closenav.style.display="none";
    opennav.style.display="block";
});
