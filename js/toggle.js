

const mainMenu = document.querySelector('.nav-links');

const openMenu = document.querySelector('.toggle-button');
const closeMenu = document.querySelector('.close-toggle');

const menu_items = document.querySelectorAll('.nav-links');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

     function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
   
