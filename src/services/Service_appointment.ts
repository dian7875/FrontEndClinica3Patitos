import { Appointment, NewAppointment } from "../types/Appointments";


const urlCoursesBase = `https://66456d5ab8925626f891d5c2.mockapi.io/Pacientes/test/Appointment`;


const getAllAppo = async () =>{
    const response = await fetch(urlCoursesBase);
    const result = await response.json();
    return result;
    
}
//Get to /appointments route
const getAppointments = async () => {
    const token = localStorage.getItem('authToken');
  
    if (!token) {
      throw new Error('No token found. Please log in.');
    }
  
    const response = await fetch('', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to fetch appointments: ${errorMessage}`);
    }
  
    return response.json();
  };
  
  // Post a Appointment 
 const createAppointment = async (Data:NewAppointment) => {
    const token = localStorage.getItem('authToken');
  
    if (!token) {
      throw new Error('No token found. Please log in.');
    }
  
    const response = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(Data),
    });
  
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to create appointment: ${errorMessage}`);
    }
  
    return response.json();
  };

  //delete to appoinment
const deleteAppointment = async (appointmentId: number) => {
    const token = localStorage.getItem('authToken');
  
    if (!token) {
      throw new Error('No token found. Please log in.');
    }
  
    const response = await fetch(`/${appointmentId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to delete appointment: ${errorMessage}`);
    }
  
    return response.json();
  };
  
  // Patch a citas
const updateAppointment = async (appointmentId: number, updatedData: Partial<Appointment>) => {
    const token = localStorage.getItem('authToken');
  
    if (!token) {
      throw new Error('No token found. Please log in.');
    }
  
    const response = await fetch(`/${appointmentId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
  
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to update appointment: ${errorMessage}`);
    }
  
    return response.json();
  };
  

export {
    getAllAppo, getAppointments, deleteAppointment, createAppointment, updateAppointment
}
