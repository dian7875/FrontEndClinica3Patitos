import { User } from "../types/User";

const urlUser = 'https://localhost:7066/api/Users'


const getTryLogin = async (email: string, password: string) => {
    try {
        const response = await fetch(`${urlUser}/Login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password,
            })
        });

        if (!response.ok) {
            throw new Error(`Login failed: ${response.status} ${response.statusText}`);
        }
        const authToken = await response.text();
        localStorage.setItem('UserToken', authToken)
    } catch (error) {
        console.error("Error en Login:", error);
        throw error;
    }
};


const createUser = async (data: User) => {
    console.table(data)
    try {
        const response = await fetch(`${urlUser}/Register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            console.log("User Create")

        }
    } catch (error) {
        console.log("Fail into create new user")
        throw error
    }
}


export { getTryLogin, createUser }
