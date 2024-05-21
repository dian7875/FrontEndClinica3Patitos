

const urlCoursesBase = `https://66456d5ab8925626f891d5c2.mockapi.io/Pacientes/test/Appointment`;


const getAllAppo = async () =>{
    const response = await fetch(urlCoursesBase);
    const result = await response.json();
    return result;
    
}

export {
    getAllAppo
}
