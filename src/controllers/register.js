import { register } from "../crud.js";
import { formHandler } from "../formHandler.js"
import { page } from "../lib.js";
import { showNav } from "./navigation.js";

export async function onRegister(ev) {
    ev.preventDefault()
    const registerForm = document.getElementById('register-form');
    const data = formHandler(registerForm);

    const values = Object.values(data).map(v => {
        if (v == false) {
            throw new Error('Empty fields in the form!');
        }
    })

    if (data.password != data.repeatPass) {
        alert('Passwords don\'t match!')
    } else {
        await register(data);
        page.redirect('/alllistings');
        showNav()
    }

}