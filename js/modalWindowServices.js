const servicesItemButton = document.querySelectorAll('.services-item__button');

const openPopup = event => {
    const modalWindow = event.target.nextElementSibling;
    modalWindow.classList.remove('modal-window-invisible');
    modalWindow.classList.add('modal-window');
} 

servicesItemButton.forEach(serviceItemButton => {
    serviceItemButton.addEventListener('click', openPopup )
})