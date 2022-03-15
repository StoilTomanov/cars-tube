import { createItem, login } from "../crud.js";
import { formHandler } from "../formHandler.js";
import { page } from "../lib.js";
import { showNav } from "./navigation.js";

export async function onCreate(ev) {
    ev.preventDefault();
    const createForm = document.getElementById('create-form');
    const data = formHandler(createForm);
    data.year = Number(data.year)
    data.price = Number(data.price)

    const values = Object.values(data).map(v => {
        if (v == false) {
            throw new Error('Empty fields in the form!');
        }
    })

    await createItem(data)
    page.redirect('/alllistings');
    showNav();
}