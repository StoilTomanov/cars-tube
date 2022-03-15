export function getUserData() {
    return sessionStorage;
}

export function setUserData(username, password, token, id) {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);
    sessionStorage.setItem('accessToken', token);
    sessionStorage.setItem('userId', id);
}

export function deleteUserData() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('userId');
}