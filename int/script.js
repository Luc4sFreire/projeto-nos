let icon = document.querySelector('#menu')

icon.addEventListener('click', function mostrar(){
    let nav = document.querySelector('#nave')
    if(nav.style.display === 'none'){
        nav.style.display = 'block'
    }else{
        nav.style.display = 'none'
    }
})