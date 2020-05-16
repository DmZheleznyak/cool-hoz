function openPopup(event) {
    const modalWindowServices = event.target.nextElementSibling

    modalWindowServices.classList.remove('modal-window-invisible')
    modalWindowServices.classList.add('modal-window')
} 