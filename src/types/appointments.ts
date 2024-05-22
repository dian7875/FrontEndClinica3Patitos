
export type Appointment = {
    id:string;
    Branch_Name: string;
    Status: boolean;
    Date: Date;
    Pat_Name: string;
    Name_Type: string;
  }
 
export type NewAppointment ={
  Date: Date;
  Branch_Name: string;
  Name_Type: string;
  //Status: boolean;
 // Pat_Name: string;
}
