import { loginUrl, registerUrl, logoutUrl } from './endpoints.js'
import { deleteUserData, setUserData } from './session.js'

export async function login(credentials) { // credentials expect to receive at least email and password
    try {
        const response = await fetch(loginUrl, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials),
        })
        if (response.status == 403) {
            const error = await response.json();
            throw new Error(error.message);
        }
        if (response.ok == false || response.status != 200) {
            const error = await response.json();
            throw new Error(error.message);
        }
        const data = await response.json();
        console.log(data);
        setUserData(data.username, credentials.password, data.accessToken, data._id)

    } catch (err) {
        alert(err.message);
    }
}

export async function logout() {
    try {
        const response = await fetch(logoutUrl, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.accessToken
            },
        })
        if (response.status == 403) {
            const error = await response.json();
            throw new Error(error.message);
        }
        if (response.ok == false && response.status != 203) {
            const error = await response.json();
            throw new Error(error.message);
        }
        deleteUserData();
    } catch (err) {
        alert(err.message);

    }
}

export async function register(credentials) { // credentials expect to receive at least email and password
    try {
        const response = await fetch(registerUrl, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials),
        })
        if (response.status == 403) {
            const error = await response.json();
            throw new Error(error.message);
        }
        if (response.ok == false || response.status != 200) {
            const error = await response.json();
            throw new Error(error.message);
        }
        const data = await response.json();
        console.log(data);
        setUserData(data.username, credentials.password, data.accessToken, data._id)

    } catch (err) {
        alert(err.message);
    }
}

export async function getAllItems() {
    try {
        const response = await fetch('http://localhost:3030/data/cars?sortBy=_createdOn%20desc');
        if (response.ok == false || response.status != 200) {
            const error = await response.json();
            throw new Error(error.message);
        }
        return response.json();
    } catch (err) {
        alert(err.message);
    }
}

export async function getItem(id) {
    const url = `http://localhost:3030/data/cars/${id}`
    try {
        const response = await fetch(url);
        if (response.ok == false || response.status != 200) {
            const error = await response.json();
            throw new Error(error.message);
        }
        return await response.json();
    } catch (err) {
        alert(err.message);
    }
}

export async function createItem(details) {
    const url = 'http://localhost:3030/data/cars'
    try {
        const response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.accessToken
            },
            body: JSON.stringify(details)

        })
        if (response.status == 403) {
            const error = await response.json();
            throw new Error(error.message);
        }
        if (response.ok == false && response.status != 203) {
            const error = await response.json();
            throw new Error(error.message);
        }
        const result = await response.json()
        console.log(result);
    } catch (err) {
        alert(err.message);
    }
}

export async function editItem(details, id) {
    const url = `http://localhost:3030/data/cars/${id}`
    try {
        const response = await fetch(url, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.accessToken
            },
            body: JSON.stringify(details)

        })
        if (response.status == 403) {
            const error = await response.json();
            throw new Error(error.message);
        }
        if (response.ok == false && response.status != 203) {
            const error = await response.json();
            throw new Error(error.message);
        }
        const result = await response.json()
    } catch (err) {
        alert(err.message);
    }
}

export async function deleteItem(id) {
    const url = `http://localhost:3030/data/cars/${id}`
    try {
        const response = await fetch(url, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.accessToken
            },
        })
        if (response.status == 403) {
            const error = await response.json();
            throw new Error(error.message);
        }
        if (response.ok == false && response.status != 203) {
            const error = await response.json();
            throw new Error(error.message);
        }
        const result = await response.json()
        console.log(result);
    } catch (err) {
        alert(err.message);
    }
}

export async function getMyItem(userId) {
    const url = `http://localhost:3030/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
    try {
        const response = await fetch(url);
        if (response.ok == false || response.status != 200) {
            const error = await response.json();
            throw new Error(error.message);
        }
        return await response.json();
    } catch (err) {
        alert(err.message);
    }
}