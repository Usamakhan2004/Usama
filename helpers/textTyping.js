let currentTextIndex = 0;
let charIndex = 0;

export function textTyping(values, target) {
    target.innerHTML = '<span class="cursor blink"></span>';
    charIndex = 0;

    const text = values[currentTextIndex];
    
    const typing = () => {

        target.innerHTML = text.slice(0, charIndex) + '<span class="cursor"></span>';
        charIndex++;
        
        if (charIndex <= text.length) {
            setTimeout(typing, 100);
        } else {
            document.querySelector('.cursor').classList.add('blink');
            setTimeout(clearText, 3000);
        }
    }
    
    const clearText = () => {
        target.innerHTML = text.slice(0, charIndex) + '<span class="cursor"></span>';
        charIndex--;
        
        if (charIndex >= 0) {
            setTimeout(clearText, 100);
        } else {
            document.querySelector('.cursor').classList.add('blink')
            currentTextIndex < 2 ? currentTextIndex++ : currentTextIndex = 0;
            setTimeout(textTyping, 1000, values, target);
        }
    }

    setTimeout(typing, 3000);
}

