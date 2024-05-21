



const urlType = `https://66456d5ab8925626f891d5c2.mockapi.io/Pacientes/test/Type_Appointment`;


const getTAllype = async () =>{
    const response = await fetch(urlType);
    const result = await response.json();
    return result;
}
