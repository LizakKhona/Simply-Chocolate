(() => {
    const refs = {
        openModalBtn: document.querySelector("[lr-data-modal-open]"),
        closeModalBtn: document.querySelector("[lr-data-modal-close]"),
        modal: document.querySelector("[lr-data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");
    }
})();