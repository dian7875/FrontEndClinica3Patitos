import Swal from 'sweetalert2'
import './AlertStyle.css';


const warningIcon = "https://cdn-icons-png.flaticon.com/128/3922/3922179.png"
const deleteIcon ="https://cdn-icons-png.flaticon.com/128/11155/11155549.png"
const AddIcon = "https://cdn-icons-png.flaticon.com/128/5667/5667215.png"
const CancelIcon ="https://cdn-icons-png.flaticon.com/128/15198/15198750.png"
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
      iconHtml: `<img src="${AddIcon}" class="custom-icon-image" />`,
      
       title: `Are you sure to add this appoiment?`,
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
      iconHtml: `<img src="${deleteIcon}" class="custom-icon-image" />`,
      
      title: `Are you sure to delete this appoiment?`,
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it!",
      width:"350px",
      heightAuto: false,
      position: "center",
      customClass: {
       container: "custom-container",
        cancelButton: "custom-cancel-delete-button",
        confirmButton: "custom-confirm-delete-button",
        popup: "custom-popup",
        icon: "custom-icon",
        title: "custom-title",
          },
        
      });
      return result.isConfirmed;
   }

   const CancelAction = async ( )=> {
    const result = await Swal.fire({
      iconHtml: `<img src="${CancelIcon}" class="custom-icon-image" />`,
      title: `Are you sure to cancel this appoiment?`,
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

   export{confirmActionEdit, confirmActionReserve,CancelAction,DeleteAction}