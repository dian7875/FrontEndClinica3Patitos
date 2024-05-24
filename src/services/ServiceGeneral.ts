
const urlType = `https://66456d5ab8925626f891d5c2.mockapi.io/Pacientes/test/Type_Appointment`;


const gettAllypeAppo = async () =>{
    const response = await fetch(urlType);
    const result = await response.json();
    return result;
}

const getAllBranch = async () =>{
    const response = await fetch(urlBranch);
    const result = await response.json();
    return result;
}

//Lista De usuario