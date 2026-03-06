import './style.scss';

import Swal from 'sweetalert2'

const btns = document.querySelectorAll(".buyTicketBtns");

btns.forEach(btn => {
    btn.addEventListener("click", () => {

        Swal.fire({
            title: "Замовлення квитка",

            html: `
      <input id="swal-name" class="swal2-input" placeholder="Ваше ім'я">
      <input id="swal-email" class="swal2-input" type="email" placeholder="Email">
      <input id="swal-count" class="swal2-input" type="number" placeholder="Кількість квитків" min="1">
    `,

            background: "#242833",
            color: "#ffffff",

            confirmButtonText: "Купити",
            cancelButtonText: "Скасувати",

            showCancelButton: true,

            preConfirm: () => {
                return {
                    name: document.getElementById("swal-name").value,
                    email: document.getElementById("swal-email").value,
                    count: document.getElementById("swal-count").value
                }
            }

        }).then((result) => {

            if (result.isConfirmed) {

                const data = result.value;

                Swal.fire({
                    title: "Успіх 🎉",
                    text: `Дякуємо ${data.name}! Ви замовили ${data.count} квиток(и).`,
                    icon: "success",
                    background: "#242833",
                    color: "#fff"
                });

            }

        });

    });

}
)

const contactsForm = document.querySelector('.contactsForm');

contactsForm.addEventListener('submit', event => {
    event.preventDefault();
    const inpName = event.target.elements[0];
    const inpGmail = event.target.elements[1];
    const message = event.target.elements[2];
    console.log(inpName);


    if (inpName.value && inpGmail.value.includes('@') && inpGmail.value.includes('.')) {
        console.log(inpName, inpGmail, message);

        let toStorage = [];
        toStorage.push({
            name: inpName.value,
            comment: message.value,
            email: inpGmail.value,
        })
        localStorage.setItem(`userId${localStorage.length}`, JSON.stringify(toStorage));

        inpName.value = '';
        inpGmail.value = '';
        message.value = '';
    }

});
