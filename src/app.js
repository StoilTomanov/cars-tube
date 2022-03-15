import { showNav } from './controllers/navigation.js';
import { page } from './lib.js';
import { showAllListings } from './views/allListingsView.js';
import { showByYear } from './views/byYearView.js';
import { showCreate } from './views/createView.js';
import { showDetails } from './views/detailsView.js';
import { showEdit } from './views/editView.js';
import { showHome } from './views/homeView.js';
import { showLogin } from './views/loginView.js';
import { showMyListing } from './views/myListingView.js';
import { showRegister } from './views/registerView.js';

export const navigation = document.getElementById('navBar');
export const main = document.getElementById('site-content');

showNav()

page.redirect('/', '/home');
page('/home', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/alllistings', showAllListings);
page('/edit/:id', showEdit);
page('/details/:id', showDetails);
page('/create', showCreate);
page('/mylistings', showMyListing);
page('/byyear', showByYear);

page.start();


console.log('test');