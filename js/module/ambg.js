export default function Ambg() {
    const ambg = document.querySelector('.ambg');
    const menu = document.querySelector('.list-mobile');
    
    ambg.addEventListener('click', function(){
        menu.classList.toggle('active');
    })
}    