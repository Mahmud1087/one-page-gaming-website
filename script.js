// MENU BUTTON SCRIPT

const btn = document.querySelector('#btn');
const nav = document.querySelector('.nav');
const lists = document.querySelectorAll('.list');

btn.addEventListener('click', function(){
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
})

lists.addEventListener('click', () => {
    for(let i = 0; i < lists.length; i++) {
        lists.style.display = 'none';
    }
})