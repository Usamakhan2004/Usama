emailjs.init('NrD8nkU-guwsBWMcy');

const form = document.getElementById('contactForm');

const modal = new bootstrap.Modal(document.getElementById('successModal'));
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalBtn = document.getElementById('modalBtn');

const emailBtnSpinner = document.getElementById('emailBtnSpinner');
const contactFormSendingIcon = document.getElementById('contactFormSendingIcon');
const contactFormBtn = document.getElementById('contactFormBtn');

form.addEventListener('submit', async (evt) => {
    if (!form.checkValidity()) {
        evt.preventDefault();
        evt.stopPropagation();
    } else {
        evt.preventDefault();
        emailBtnSpinner.classList.remove('d-none');
        contactFormSendingIcon.classList.add('d-none');
        contactFormBtn.disabled = true;
        await emailjs.sendForm('service_9e5ki86', 'template_o3unocg', '#contactForm').then(function () {
            showDailogBox("assets/icons/success.png","Email has been sent successfully.", true)
        }, function (error) {
            showDailogBox("assets/icons/failure.png","Failed to send the email.", false)
        });
        emailBtnSpinner.classList.add('d-none');
        contactFormSendingIcon.classList.remove('d-none');
        contactFormBtn.disabled = false;
    }
    form.classList.add('was-validated');
});

function showDailogBox(icon, title, status) {
    if (status) {
        modalImage.src = icon;
        modalTitle.innerHTML = title;
        modalBtn.innerHTML = "Open email app";
        modalBtn.href = 'mailto:usamauk0931307@gmail.com';
        modal.toggle();
    }else{
        modalImage.src = icon;
        modalTitle.innerHTML = title;
        modalBtn.innerHTML = "Try Again";
        modalBtn.setAttribute('data-bs-dismiss','modal');
        modal.toggle();
    }
}