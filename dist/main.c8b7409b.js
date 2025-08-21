document.addEventListener("DOMContentLoaded", ()=>{
    const openButtons = document.querySelectorAll("[data-modal-open]");
    const closeButtons = document.querySelectorAll("[data-modal-close]");
    const modals = document.querySelectorAll("[data-modal]");
    openButtons.forEach((btn, i)=>{
        btn.addEventListener("click", ()=>toggleModal(modals[i]));
    });
    closeButtons.forEach((btn, i)=>{
        btn.addEventListener("click", ()=>toggleModal(modals[i]));
    });
    function toggleModal(modal) {
        if (!modal) return;
        modal.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");
    }
});

//# sourceMappingURL=main.c8b7409b.js.map
