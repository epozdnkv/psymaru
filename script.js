window.onload = function(){
    document.body.scrollTop = 0;
}
if(location.hash) history.replaceState({}, document.title, location.href.split('#')[0]);

const menuItems = document.querySelectorAll('.mmenu li');
const menuToggle = document.querySelector('#menu-toggle');
for(let i = 0; i < menuItems.length; i++){
    menuItems[i].onclick = function(){
        menuToggle.checked = false;
    }
}