import { textTyping } from "./helpers/textTyping.js";
import { redirectToEmailApp } from "./helpers/sendEmail.js";

const Headlines = ["Usama | Web Developer","Grow Your Business", "Your Vision, My Code", "Empowering Your Online Presence"];

const header = document.getElementById('header');
const body = document.getElementById('custom-body');
const ownerName = document.getElementById('owner-name');

const HiringForm = document.getElementById('hiring-form');

const typingBox = document.getElementById('typing-box');

// Variables of quick email section
const quickContactForm = document.getElementById('quickContactForm');
const quickEmailField = document.getElementById('quickEmailField');
const contcatEmail =  document.getElementById('contactEmail');

textTyping(Headlines, typingBox);

body.addEventListener('scroll', () => {
    if(body.scrollTop > 20){
        header.classList.remove('mt-lg-2');
        ownerName.innerHTML = "Usama | Web Developer"
    }else{
        ownerName.innerHTML = "Usama"
        header.classList.add('mt-lg-2');
    }
})

HiringForm.addEventListener('submit', (event) => {
    
    if(!HiringForm.checkValidity()){
        event.preventDefault();
        event.stopPropagation();
    }else{
        event.preventDefault();
        let subject = document.getElementById('hiringFormSubject');
        redirectToEmailApp(subject.value);
    }
    HiringForm.classList.add('was-validated')
});

quickContactForm.addEventListener('submit', (evt) => {
    
    if(!quickContactForm.checkValidity()){
        evt.preventDefault();
        evt.stopPropagation();
    }else{
        evt.preventDefault();
        window.location = '#contactSection'
        contcatEmail.value = quickEmailField.value;

    }
    quickContactForm.classList.add('was-validated')
})
