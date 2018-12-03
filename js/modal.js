function setModalMessage(message) {
    modalMessage.innerHTML = message;
}

export function hideModal() {
    modal.style.top = '-100px';
    modal.style.opacity = 0;
}

export function setModal(message) {
    setModalMessage(message);
    modal.style.top = '50px';
    modal.style.opacity = 1;

    setTimeout(() => {
        hideModal();
    }, 3800);

}