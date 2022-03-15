import { main } from '../app.js'
import { onDelete } from '../controllers/delete.js'
import { getItem } from '../crud.js'
import { html, render } from '../lib.js'

export async function showDetails(ctx) {
    const data = await getItem(ctx.params.id)
    console.log(data);
    const template = html `
        <section id="listing-details">
            <h1>Details</h1>
            <div class="details-info">
                <img src=${data.imageUrl}>
                <hr>
                <ul class="listing-props">
                    <li><span>Brand:</span>${data.brand}</li>
                    <li><span>Model:</span>${data.model}</li>
                    <li><span>Year:</span>${data.year}</li>
                    <li><span>Price:</span>${data.price}$</li>
                </ul>

                <p class="description-para">${data.description}</p>

                ${data._ownerId == sessionStorage.userId ? html`
                <div class="listings-buttons">
                    <a href="/edit/${ctx.params.id}" class="button-list">Edit</a>
                    <a href="javascript:void(0)" data-id=${ctx.params.id} @click=${onDelete} class="button-list">Delete</a>
                </div>
                ` : null}
            </div>
        </section>
    `
    render(template, main)
}