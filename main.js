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
<<<<<<< HEAD
        document.getElementById('theme-style').href = 'default.css'
    }
    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'dark.css'
    }
    if(mode == 'green'){
        document.getElementById('theme-style').href = 'green.css'
    }
    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
=======
        document.getElementById('theme-style').href = 'css/style.css'
    }
    if(mode == 'dark'){
        document.getElementById('theme-style').href = 'css/dark.css'
>>>>>>> d91827c6174f4e5208c5cf324fa9bfdc538edbc8
    }
    
    localStorage.setItem('theme', mode)
}