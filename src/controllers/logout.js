import { logout } from "../crud.js";
import { page } from "../lib.js";
import { showNav } from "./navigation.js";

export async function onLogout() {
    await logout();
    page.redirect('/');
    showNav();
}