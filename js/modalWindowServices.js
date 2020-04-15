function openPopup(event) {
    const modalWindow = event.target.nextElementSibling

    modalWindow.classList.remove('modal-window-invisible')
    modalWindow.classList.add('modal-window')
} 