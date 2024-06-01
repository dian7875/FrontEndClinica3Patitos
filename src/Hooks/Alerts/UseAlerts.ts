import Swal from 'sweetalert2'
import './AlertStyle.css';

const confirmActionEdit = async ( )=> {
    const result = await Swal.fire({
       icon: "info",
       title: `Are you sure to save changes?`,
       showCancelButton: true,
       confirmButtonText: "Yes",
       cancelButtonText: "No",
       width:"20%",
       customClass: {
         cancelButton: "custom-cancel-button",
         confirmButton: "custom-confirm-button",
         popup: "custom-popup",
       },
     });
   
     return result.isConfirmed;
     
   }

   
const confirmActionReserve = async ( )=> {
    const result = await Swal.fire({
       icon: "info",
       title: `Are you sure to do this reservation?`,
       showCancelButton: true,
       confirmButtonText: "Yes",
       cancelButtonText: "No",
       customClass: {
        popup: "custom-popup",
         cancelButton: "custom-cancel-button",
         confirmButton: "custom-confirm-button",
       },
     });
   
     return result.isConfirmed;
     
   }

   const DeleteAction = async ( )=> {
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