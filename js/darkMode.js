

// Variables of dark mode switch button and some element that change with button
const body = document.getElementById('custom-body');
const switchBtn = document.getElementById("switch-btn");
const switchBtnCircle = document.getElementById("switch-btn-circle");
const customCard = document.querySelectorAll('.custom-card');
const inputs = document.getElementsByTagName('input');
const textArea = document.getElementsByTagName('textarea');

// Event Listener to dark mode switch button
switchBtn.addEventListener('click', () => {
    let active = switchBtn.dataset.bsActive === "true";
    switchBtn.dataset.bsActive = active ? "false" : "true"
    if(active){
        switchBtn.style.backgroundColor = "#fff" 
    }else{
        switchBtn.style.backgroundColor = "#0000ff"
    }

    // Change in main body
    body.classList.toggle('bg-light');
    body.classList.toggle('bg-dark');
    body.classList.toggle('text-white');

    // Change in card
    Object.values(customCard).forEach(card => {
        card.classList.toggle('dark-card');
    })

    Object.values(inputs).forEach(input => {
        input.classList.toggle('dark-input');
    })

    Object.values(textArea).forEach(textarea => {
        textarea.classList.toggle('dark-input');
    })
    
    switchBtnCircle.classList.toggle('switch-btn-active')
});