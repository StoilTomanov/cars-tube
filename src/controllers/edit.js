import { editItem } from "../crud.js";
import { formHandler } from "../formHandler.js";
import { page } from "../lib.js";

export async function onEdit(ev) {
    ev.preventDefault();
    const editForm = document.getElementById('edit-form');
    const data = formHandler(editForm);
    data.year = Number(data.year)
    data.price = Number(data.price)

    const values = Object.values(data).map(v => {
        if (v == false) {
            throw new Error('Empty fields in the form!');
        }
    })

    await editItem(data, ev.target.dataset.id);
    page.redirect(`/details/${ev.target.dataset.id}`);
}