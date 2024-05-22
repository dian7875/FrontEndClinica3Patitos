import { User } from "../types/User";

const urlUser = 'https://662bb9d2de35f91de1594809.mockapi.io/api/test'


const getTryLogin = async (email: string, password: string) => {
    try {
        const response = await fetch(urlUser + '/Login', {
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
        console.log("Error en Login:", error);
        throw error;
    }

}


const createUser = async (data: User) => {
    try{
        const response = await fetch(urlUser + '/SingUp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    
    if (response.ok) {
        console.log("User Create")
        console.log(response)
    }
    }catch(error){
        console.log("Fail into create new user")
        throw error
    }
}


export { getTryLogin, createUser }
