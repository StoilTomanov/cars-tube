import { main } from '../app.js'
import { onLogin } from '../controllers/login.js'
import { html, render } from '../lib.js'

export function showLogin() {
    const template = html `
        <section id="login">
            <div class="container">
                <form id="login-form" action="#" method="post" @submit=${onLogin}>
                    <h1>Login</h1>
                    <p>Please enter your credentials.</p>
                    <hr>

                    <p>Username</p>
                    <input placeholder="Enter Username" name="username" type="text">

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn" value="Login">
                </form>
                <div class="signin">
                    <p>Dont have an account?
                        <a href="/register">Sign up</a>.
                    </p>
                </div>
            </div>
        </section>
    `
    render(template, main)


}