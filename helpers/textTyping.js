let i = 0;
let index = 0;

export function textTyping(values, target) {
    const text = values[i];
    
    const typing = () => {
        if (index <= text.length) {
            target.innerHTML = text.slice(0, index) + '<span class="cursor"></span>';
            index++;
            setTimeout(typing, 100);
        } else {
            const cursor = document.querySelector('.cursor');
            cursor.classList.add('blink');
            setTimeout(clearText, 3000);
        }
    }
    
    const clearText = () => {
        if (index >= 0) {
            target.innerHTML = text.slice(0, index) + '<span class="cursor"></span>';
            index--;
            setTimeout(clearText, 100);
        } else {
            const cursor = document.querySelector('.cursor');
            cursor.classList.add('blink')
            i < 2 ? i++ : i = 0;
            setTimeout(() => textTyping(values, target), 1000);
        }
    }

    setTimeout(typing, 3000);
}

