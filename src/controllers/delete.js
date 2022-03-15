import { deleteItem } from "../crud.js";
import { page } from '../lib.js';


export async function onDelete(ev) {
    await deleteItem(ev.target.dataset.id);
    page.redirect('/alllistings');
}