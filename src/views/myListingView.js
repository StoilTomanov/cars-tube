import { main } from '../app.js'
import { getMyItem } from '../crud.js'
import { html, render } from '../lib.js'

export async function showMyListing() {
    const data = await getMyItem(sessionStorage.userId)
    console.log(data);
    const template = html `
        <section id="my-listings">
            <h1>My car listings</h1>
            <div class="listings">

                <!-- Display all records -->
                ${data.length != 0 ? html`${data.map(item=> html`
                <div class="listing">
                    <div class="preview">
                        <img src=${item.imageUrl}>
                    </div>
                    <h2>${item.brand} ${item.model}</h2>
                    <div class="info">
                        <div class="data-info">
                            <h3>Year: ${item.year}</h3>
                            <h3>Price: ${item.price} $</h3>
                        </div>
                        <div class="data-buttons">
                            <a href='details/${item._id}' class="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>
                `)}` : html`<p class="no-cars"> You haven't listed any cars yet.</p>`}
                

                <!-- Display if there are no records -->
                
            </div>
        </section>
    `
    render(template, main)


}

/*
<div class="listing">
    <div class="preview">
        <img src="/images/audia3.jpg">
    </div>
    <h2>Audi A3</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: 2018</h3>
            <h3>Price: 25000 $</h3>
        </div>
        <div class="data-buttons">
            <a href="#" class="button-carDetails">Details</a>
        </div>
    </div>
</div>
*/