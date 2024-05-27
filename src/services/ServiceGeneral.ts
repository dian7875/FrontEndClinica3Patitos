
const urlBase = `https://localhost:7066/api`;


const getListType = async () =>{
    const response = await fetch(`${urlBase}/AppoitmentType`,);
    const result = await response.json();
    return result;
    
}

const getListBranch = async () =>{
    const response = await fetch(`${urlBase}/Clinic_Branches`,);
    const result = await response.json();
    return result;
}

export {
    getListBranch,
    getListType

}