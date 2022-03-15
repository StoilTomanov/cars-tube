import { main } from '../app.js'
import { onEdit } from '../controllers/edit.js'
import { getItem } from '../crud.js'
import { html, render } from '../lib.js'

export async function showEdit(ctx) {
    const data = await getItem(ctx.params.id)
    const template = html `
        <section id="edit-listing">
            <div class="container">

                <form id="edit-form" data-id=${ctx.params.id} @submit=${onEdit}>
                    <h1>Edit Car Listing</h1>
                    <p>Please fill in this form to edit an listing.</p>
                    <hr>

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand" value=${data.brand}>

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model" value=${data.model}>

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description" value=${data.description}>

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year" value=${data.year}>

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl" value=${data.imageUrl}>

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price" value=${data.price}>

                    <hr>
                    <input type="submit" class="registerbtn" value="Edit Listing">
                </form>
            </div>
        </section>
    `
    render(template, main)
}