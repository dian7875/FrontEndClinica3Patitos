import { User } from "../types/User";

const urlUser = 'https://localhost:7066/api/Users'


const getTryLogin = async (email: string, password: string) => {
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
    if (response.ok) {
        const authToken = await response.text();
        localStorage.setItem('UserToken', authToken)
    }
    return response.status
};


const createUser = async (data: User) => {
    const response = await fetch(`${urlUser}/Register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to Register: ${errorMessage}`);
    }
    return response.status
}


export { getTryLogin, createUser }
