function modals () {
    function bindModal (triggerSelector, modalSelector, closeSelector) {
        const overlay = document.querySelector('.overlay'),
              trigger = document.querySelectorAll(triggerSelector),
              modal = overlay.querySelector(modalSelector),
              close = overlay.querySelectorAll(closeSelector),
              windows = document.querySelectorAll('[data-modal]');

        const closeModal = () => {
            windows.forEach(item => {
                item.style.display = "none";
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            overlay.style.display = "none";
        }

        trigger.forEach((item) => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                document.body.style.overflow = "hidden";
                overlay.style.display = "block";

                windows.forEach(item => {
                    item.style.display = "none";
                });
    
                modal.style.display = "flex";
            });
        });

        close.forEach(item => {
            item.addEventListener('click', () => {
                closeModal();
            });
        })
        
        overlay.addEventListener('click', e => {    
            if (e.target === overlay) {
                closeModal();
            }
        });

        modal.addEventListener('click', e => {
            if (e.target.tagName === "A" || e.target.parentNode.tagName === "A") {
                closeModal();
            }
        });
    }

    bindModal('.hamburger', '.modal_menu', '.modal__close');
    bindModal('.button_contact', '.modal_contact', '.modal__close');
}

export default modals;