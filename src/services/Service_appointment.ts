import { NewAppointment } from "../types/Appointments";

const urlCoursesBase = `https://66456d5ab8925626f891d5c2.mockapi.io/Pacientes/test/Appointment`;
const UrlBaseAppo ='https://localhost:7066/api/Appoitment';
const getAllAppo = async () => {
  const response = await fetch(urlCoursesBase);
  const result = await response.json();
  return result;
}
//Get appointment of user
const getAppointments = async (user_Id:number) => {
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
  console.table(Data)
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

//delete to appoinment
const deleteAppointment = async (appointmentId: number) => {
  const token = localStorage.getItem('authToken');

  if (!token) {
    throw new Error('No token found. Please log in.');
  }

  const response = await fetch(`${UrlBaseAppo}/${appointmentId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`Failed to delete appointment: ${errorMessage}`);
  }
};

// Patch a citas
const updateAppointment = async (updatedData: Partial<NewAppointment>) => {
  const token = localStorage.getItem('UserToken');

  if (!token) {
    throw new Error('No token found. Please log in.');
  }

  const response = await fetch(`${UrlBaseAppo}/${updatedData.id_Appointment}`, {
    method: 'PUT',
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
};

const cancelAppoiment = async (id_Appointment:number) => {
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
};

export {
  getAllAppo, getAppointments, deleteAppointment, createAppointment, updateAppointment, cancelAppoiment
}
