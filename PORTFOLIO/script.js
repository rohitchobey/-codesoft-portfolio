let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active')
}
window.onscroll = () =>{
    menu.classList.remove('fa-times')
    header.classList.remove('active')

}

document.querySelectorAll('a').forEach(links =>{
    links.onmouseenter = ()=>{
        cursol1.classList.add('active');
        cursol2.classList.add('active');
    }
    links.onmouseleave = ()=>{
        cursol1.classList.remove('active');
        cursol2.classList.remove('active');
    }
})