var btnHamburger = document.getElementById('button-hamburger');
var navListServices = document.getElementById('navlist-services');

btnHamburger.addEventListener('click', function() {
    if ( !this.classList.contains('button-hamburger_open') ) {
        this.classList.add('button-hamburger_open');
        navListServices.classList.add('navlist-services_open');
        return;
    } 
    if ( this.classList.contains('button-hamburger_open') ) {
        this.classList.remove('button-hamburger_open');
        navListServices.classList.remove('navlist-services_open');
        return;    
    }   
})