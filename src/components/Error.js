import {
    errorTextEl, 
    errorEl,
    DEFAULT_DISPLAY_TIME
} from "../common.js"

const renderError = (message = 'An error occured') => { 
    errorTextEl.textContent = 'Your search may not contain numbers';
    errorEl.classList.add('error--visible');
    setTimeout(() => {
        errorEl.classList.remove('error--visible');
    }, DEFAULT_DISPLAY_TIME);
}

export default renderError;