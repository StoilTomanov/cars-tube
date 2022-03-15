import { login } from "../crud.js";
import { formHandler } from "../formHandler.js";
import { page } from "../lib.js";
import { showNav } from "./navigation.js";

export async function onLogin(ev) {
    ev.preventDefault();
    const loginForm = document.getElementById('login-form');
    const data = formHandler(loginForm);

    const values = Object.values(data).map(v => {
        if (v == false) {
            throw new Error('Empty fields in the form!');
        }
    })

    await login(data);
    if (sessionStorage.hasOwnProperty('password')) {
        page.redirect('/alllistings');
        showNav()
    }
}