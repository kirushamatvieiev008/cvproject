// import './style.scss';
// import Swal from 'sweetalert2'
const btns = document.querySelectorAll(".buyTicketBtns");
btns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        Swal.fire({
            title: "\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u0432\u0438\u0442\u043A\u0430",
            html: `
      <input id="swal-name" class="swal2-input" placeholder="\u{412}\u{430}\u{448}\u{435} \u{456}\u{43C}'\u{44F}">
      <input id="swal-email" class="swal2-input" type="email" placeholder="Email">
      <input id="swal-count" class="swal2-input" type="number" placeholder="\u{41A}\u{456}\u{43B}\u{44C}\u{43A}\u{456}\u{441}\u{442}\u{44C} \u{43A}\u{432}\u{438}\u{442}\u{43A}\u{456}\u{432}" min="1">
    `,
            background: "#242833",
            color: "#ffffff",
            confirmButtonText: "\u041A\u0443\u043F\u0438\u0442\u0438",
            cancelButtonText: "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
            showCancelButton: true,
            preConfirm: ()=>{
                return {
                    name: document.getElementById("swal-name").value,
                    email: document.getElementById("swal-email").value,
                    count: document.getElementById("swal-count").value
                };
            }
        }).then((result)=>{
            if (result.isConfirmed) {
                const data = result.value;
                Swal.fire({
                    title: "\u0423\u0441\u043F\u0456\u0445 \uD83C\uDF89",
                    text: `\u{414}\u{44F}\u{43A}\u{443}\u{454}\u{43C}\u{43E} ${data.name}! \u{412}\u{438} \u{437}\u{430}\u{43C}\u{43E}\u{432}\u{438}\u{43B}\u{438} ${data.count} \u{43A}\u{432}\u{438}\u{442}\u{43E}\u{43A}(\u{438}).`,
                    icon: "success",
                    background: "#242833",
                    color: "#fff"
                });
            }
        });
    });
});
const contactsForm = document.querySelector('.contactsForm');
contactsForm.addEventListener('submit', (event)=>{
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
            email: inpGmail.value
        });
        localStorage.setItem(`userId${localStorage.length}`, JSON.stringify(toStorage));
        inpName.value = '';
        inpGmail.value = '';
        message.value = '';
    }
});

//# sourceMappingURL=cvproject.816e7b21.js.map
