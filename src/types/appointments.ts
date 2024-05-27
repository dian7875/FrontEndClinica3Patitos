
export type Appointment = {
    id_Appointment:number;
    name_type: string;
    id_Appoitment_Type: number,
    branch_Name: string;
    id_ClinicBranch: number;
    status: boolean;
    date: Date;
    user_Name: string;
  }
export type NewAppointment ={
  id_Appointment:number;
  status:boolean;
  date: Date;
  id_ClinicBranch:number;
  id_Appoitment_Type:number;
  id_User:number
}
