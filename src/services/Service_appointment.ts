import { NewAppointment } from "../types/Appointments";

const UrlBaseAppo = 'https://localhost:7066/api/Appoitment';

//Get appointment of user
const getAppointments = async (user_Id: number) => {
  const token = localStorage.getItem('UserToken');
  if (!token) {
    throw new Error('No token found. Please log in.');
  }

  const response = await fetch(`${UrlBaseAppo}/user/${user_Id}`, {
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
const createAppointment = async (Data: NewAppointment) => {
  const token = localStorage.getItem('UserToken');

  if (!token) {
    throw new Error('No token found. Please log in.');
  }
  const response = await fetch(`${UrlBaseAppo}`, {
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
};

// Patch a citas
const updateAppointment = async (updatedData: Partial<NewAppointment>, id_Appointment:number) => {
  const token = localStorage.getItem('UserToken');
  if (!token) {
    throw new Error('No token found. Please log in.');
  }

  const response = await fetch(`${UrlBaseAppo}/${id_Appointment}`, {
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
  return response.status
};
//Cancelar cita Patch
const cancelAppoiment = async (id_Appointment: number) => {
  const token = localStorage.getItem('UserToken');

  if (!token) {
    throw new Error('No token found. Please log in.');
  }

  const response = await fetch(`${UrlBaseAppo}/cancel/${id_Appointment}`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`Failed to update appointment: ${errorMessage}`);
  }
  return response.ok
};
//Admin
//delete to appoinment
const deleteAppointment = async (id_Appointment: number) => {
  const token = localStorage.getItem('UserToken');

  if (!token) {
    throw new Error('No token found. Please log in.');
  }

  const response = await fetch(`${UrlBaseAppo}/${id_Appointment}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`Failed to delete appointment: ${errorMessage}`);
  }
  return response.ok
};

const getDayAppoiments = async () => {
  const token = localStorage.getItem('UserToken');
  if (!token) {
    throw new Error('No token found. Please log in.');
  }

  const response = await fetch(`${UrlBaseAppo}/today`, {
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

export {
  getAppointments,
  cancelAppoiment,
  createAppointment,
  updateAppointment,
  deleteAppointment,
  getDayAppoiments
}
