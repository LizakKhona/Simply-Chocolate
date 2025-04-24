(() => {
    const refs = {
        openModalBtn: document.querySelector("[h-data-modal-open]"),
        closeModalBtn: document.querySelector("[h-data-modal-close]"),
        modal: document.querySelector("[h-data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");
    }
})();