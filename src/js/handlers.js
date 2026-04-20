import { STORAGE_KEYS } from "./constans";
import { refs } from "./refs";

export function onNameInput(event) {
    const userName = event.target.value.trim();
    refs.welcomeText.textContent = `Привіт, ${userName}`;
    localStorage.setItem(STORAGE_KEYS.USER_NAME, JSON.stringify(userName));
    if (userName === '') {
        refs.welcomeText.textContent = 'Привіт, гість!';
    }
} 

export function initWelcomeTaskPage(event) {
    try {
        const storageUserName = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_NAME));
        refs.welcomeText.textContent = storageUserName
            ? `Привіт, ${storageUserName}`
            : 'Привіт, гість!';
        refs.nameInput.value = storageUserName;
    } catch (error) {
        console.log(error);
        
    }
}