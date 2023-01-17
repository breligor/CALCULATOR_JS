import { DISPLAY, MEM_VAL, SECOND_DISPLAY } from './content.js';

export default function SwitchMem(memory) {
    if (DISPLAY.value) {
        switch (memory) {
            case 'MS':
                sessionStorage.setItem('MS', DISPLAY.value);
                MEM_VAL.innerHTML = sessionStorage.getItem('MS');
                SECOND_DISPLAY.value = 0;
                break;

            case 'MC':
                sessionStorage.clear();
                MEM_VAL.textContent = '';
                break;

            case 'M+':
                sessionStorage.setItem(
                    'M+',
                    +MEM_VAL.textContent + +DISPLAY.value
                );
                MEM_VAL.textContent = sessionStorage.getItem('M+');
                break;

            case 'M-':
                sessionStorage.setItem(
                    'M-',
                    +MEM_VAL.textContent - +DISPLAY.value
                );
                MEM_VAL.textContent = sessionStorage.getItem('M-');
                break;

            case 'MR':
                DISPLAY.value = MEM_VAL.textContent;
                SECOND_DISPLAY.value = DISPLAY.value;
                break;
        }
    }
}
