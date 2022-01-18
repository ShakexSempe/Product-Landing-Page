let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log("clicked:", mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'css/style.css'
    }
    if(mode == 'dark'){
        document.getElementById('theme-style').href = 'css/dark.css'
    }
    
    localStorage.setItem('theme', mode)
}


date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();


// HAMBURGER
const navLinks = document.querySelectorAll('.nav-link');
const sidebar = document.getElementById("sidebar");
const toggle = document.getElementById("toggle");
toggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            sidebar.classList.remove("active");
        })
    })
})


// INTERSECTION OBSERVER
const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

window.addEventListener('DOMContentLoaded', (event) => { 

    const sections =Array.from(document.getElementsByClassName('section'));
    
    for (let section of sections) {
      observer.observe(section);
    }
    
    });

