const navbarNav = document.querySelector(".navbar-nav");

// togle menu
document.querySelector("#hamburger-menu").onclick = () =>{
    navbarNav.classList.toggle("active")
}

// mengilangkan menu
const hamburger = document.querySelector("#hamburger-menu")
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove("active")
    }
})
