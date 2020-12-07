export function saveToken(token) {
    localStorage.setItem("token", token)
}
export function getToken(token) {
    return localStorage.getItem("token")
}