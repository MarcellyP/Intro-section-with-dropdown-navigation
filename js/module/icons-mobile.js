export default function icon2 () {
    const btn = document.querySelector('.icons');
    const menu = document.querySelector('.liste');
    
    btn.addEventListener('click', function(){
        menu.classList.toggle('ativo');
    })
    
    const btn1 = document.querySelector('.icons1');
    const menu1 = document.querySelector('.liste1');
    
    btn1.addEventListener('click', function(){
        menu1.classList.toggle('ativo');
    })
    
}
    