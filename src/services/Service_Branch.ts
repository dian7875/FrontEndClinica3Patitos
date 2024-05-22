
const urlBranch = "/Branchs"

const getAllBranch = async () =>{
    const response = await fetch(urlBranch);
    const result = await response.json();
    return result;
}
