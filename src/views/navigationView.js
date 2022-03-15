import { onLogout } from '../controllers/logout.js'
import { html } from '../lib.js'

export function guestNav() {
    return html `
        <nav class="navbar">
                <a class="active" href="/home">Home</a>
                <a href="/alllistings">All Listings</a>
                <a href="/byyear">By Year</a>
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
        </nav>
    `
}

export function loggedNav() {
    return html `
    <header id="site-header">
        <nav class="navbar">
                <a class="active" href="/home">Home</a>
                <a href="/alllistings">All Listings</a>
                <a href="/byyear">By Year</a>
                <div id="profile">
                    <a>Welcome ${sessionStorage.username}</a>
                    <a href="/mylistings">My Listings</a>
                    <a href="/create">Create Listing</a>
                    <a href="javascript:void(0)" @click=${onLogout}>Logout</a>
                </div>
        </nav>
    </header>`
}