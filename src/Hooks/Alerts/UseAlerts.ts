import Swal from 'sweetalert2'
import './AlertStyle.css';


const warningIcon = "https://cdn-icons-png.flaticon.com/128/3922/3922179.png"

const confirmActionEdit = async ()=> {

    const result = await Swal.fire({
      
      iconHtml: `<img src="${warningIcon}" class="custom-icon-image" />`,
      
       title: `Are you sure to save changes?`,
       showCancelButton: true,
       confirmButtonText: "Yes",
       cancelButtonText: "No",
       width:"250px",
       heightAuto: false,
       position: "center",
       customClass: {
        
        container: "custom-container",
         cancelButton: "custom-cancel-button",
         confirmButton: "custom-confirm-button",
         popup: "custom-popup",
         icon: "custom-icon",
         title: "custom-title",
         
       },
     });
   
     return result.isConfirmed;
     
   }

   
const confirmActionReserve = async ( )=> {
    const result = await Swal.fire({
      iconHtml: `<img src="${warningIcon}" class="custom-icon-image" />`,
      
       title: `Are you sure to save changes?`,
       showCancelButton: true,
       confirmButtonText: "Yes",
       cancelButtonText: "No",
       width:"250px",
       heightAuto: false,
       position: "center",
       customClass: {
        
        container: "custom-container",
         cancelButton: "custom-cancel-button",
         confirmButton: "custom-confirm-button",
         popup: "custom-popup",
         icon: "custom-icon",
         title: "custom-title",
       },
     });
   
     return result.isConfirmed;
     
   }

   const DeleteAction = async ( )=> {
    const result = await Swal.fire({
        title: "Are you sure delete this appoiment?",
        text: "You wont be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        customClass: {
            popup: "custom-popup",
             cancelButton: "custom-cancel-button",
             confirmButton: "custom-confirm-button",
           },
        
      });
      return result.isConfirmed;
   }

   const CancelAction = async ( )=> {
    const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        customClass: {
            popup: "custom-popup",
             cancelButton: "custom-cancel-button",
             confirmButton: "custom-confirm-button",
           },
        
      });
      return result.isConfirmed;
   }

   export{confirmActionEdit, confirmActionReserve,CancelAction,DeleteAction}