
const getTryLogin = async (email: string, password: string) => {
    const url = new URL('https://662bb9d2de35f91de1594809.mockapi.io/api/test/Test');
        url.searchParams.append('UserEmail', email)
        url.searchParams.append('password', password)
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error en la solicitud de login');
    }
    const result = await response.json();
    const token = result.token;
    localStorage.setItem('authToken', token);
}
export {
    getTryLogin
}
