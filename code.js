var header = document.getElementById(Header)

window.addEventListener(scroll, ()=>{
    var scroll = window.scrollY
    if(scroll>10){
    header.style.backgroundColor = "#FFFAFA"
    }else {
        header.style.backgroundColor = transparent
    }
})