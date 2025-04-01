emailjs.init('NrD8nkU-guwsBWMcy');

const form = document.getElementById('contactForm');


const modal = new bootstrap.Modal(document.getElementById('emailModal'));
const modalTitle = document.getElementById('modalTitle');
const modalIcon = document.getElementById('modalIcon');
const modalBtn = document.getElementById('modalBtn');
const message = document.getElementById('message');
const modalBody = document.getElementById('modal-body');

const emailBtnSpinner = document.getElementById('btnSpinner');
const contactFormBtn = document.getElementById('contactFormBtn');

form.addEventListener('submit', async (evt) => {
    if (!form.checkValidity()) {
        evt.preventDefault();
        evt.stopPropagation();
    } else {
        console.log("OK");
        evt.preventDefault();
        emailBtnSpinner.classList.remove('d-none');
        contactFormBtn.disabled = true;
        await emailjs.sendForm('service_9e5ki86', 'template_o3unocg', '#contactForm').then(function () {
            showDailogBox(true);
        }, function (error) {
            console.log(error);
            showDailogBox(false);
        });
        emailBtnSpinner.classList.add('d-none');
        contactFormBtn.classList.add('p-0')
        contactFormBtn.disabled = false;
    }
    form.classList.add('was-validated');
});

function showDailogBox(status) {
    modalTitle.innerHTML = status ? "Message Sent!" : "Oops!";
    modalBtn.innerHTML = status ? "Done" : "Try Again";
    modalTitle.style.color = status ? "#28a745" : "#dc3545";
    modalBody.classList.remove("border-success", "border-danger");
    modalBody.classList.add(status ? "border-success" : "border-danger");    
    if (status) {
        message.innerHTML = "I got your message and will get back to you soon. Thanks for reaching out!"
        modalIcon.innerHTML = '<span class="bg-success px-4 py-4 rounded-circle"><i class="fa-solid fa-check fa-2xl text-white"></i></span>'
    } else {
        message.innerHTML = "Looks like there was a small issue. Check your connection and try again!";
        modalIcon.innerHTML = '<span class="bg-danger px-4 py-4 rounded-circle"><i class="fa-solid fa-xmark fa-2xl text-white"></i></span>'
    }
    modal.show();
}

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email);
}