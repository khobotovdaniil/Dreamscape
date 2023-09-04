function checkboxValidation () {
    const forms = document.querySelectorAll('.form');

    forms.forEach(element => {
        const checkbox = element.querySelector('.policy'),
              button = element.querySelector('.button');

        const changeStatus = () => {
            if (checkbox.checked) {
                checkbox.classList.remove('notValid'); 
                button.disabled = false;
            } else {
                checkbox.classList.add('notValid')
                button.disabled = true;
            }
        }

        changeStatus();

        checkbox.addEventListener('change', () => {
            changeStatus();
        })
    });
}

export default checkboxValidation;