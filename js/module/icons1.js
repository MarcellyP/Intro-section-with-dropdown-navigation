export default function icon() {
const btn = document.querySelector('.icon');
const menu = document.querySelector('.list-inb');

btn.addEventListener('click', function(){
    menu.classList.toggle('ativo');
})

const btn1 = document.querySelector('.icon2');
const menu1 = document.querySelector('.list-inb2');

btn1.addEventListener('click', function(){
    menu1.classList.toggle('ativo');
})

}
