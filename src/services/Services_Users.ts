import { User } from "../types/User";

const urlUser = 'https://662bb9d2de35f91de1594809.mockapi.io/api/test'


const getTryLogin = async (email: string, password: string) => {
    try {
        const response = await fetch(urlUser + '/Test', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password,
            })
        })
        if (!response.ok) {
            throw new Error('Login failed');
        }
    } catch (error) {
        console.log("Error en getTryLogin:", error);
        throw error;
    }

}

/*nst getTryLogin = async (email: string, password: string) => {
    try {
        const response = await fetch(urlUser + '/Test', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password,
            })

        })
            if(response.ok){

            }
    } catch (error) {

    } */

/*const url = new URL('https://662bb9d2de35f91de1594809.mockapi.io/api/test/Test');
        url.searchParams.append('UserEmail', email)
        url.searchParams.append('password', password)

        
    const response = await fetch(url);
    if (!response.ok) {

        throw new Error('Error en la solicitud de login');
    }
    const result = await response.json();
    const token = result[0].token;
    localStorage.setItem('authToken', token); */
const createUser = async (data: User) => {
    const response = await fetch(urlUser + '/NewUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error('Error al crear Usuario');
    }
    const result = await response.json();
    return result;
}


export { getTryLogin, createUser }
