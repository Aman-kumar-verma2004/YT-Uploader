export function saveToken(token){
    return localStorage.setItem('token', token);
}

export function getToken(){
    return localStorage.getItem('token')
}

export function removeToken(){
    return localStorage.removeItem('token')
}