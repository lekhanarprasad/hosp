// This file is optional for storing mock data when the page loads
const diseases = [
    { name: "Flu", description: "Influenza is a viral infection." },
    { name: "COVID-19", description: "A respiratory illness caused by SARS-CoV-2." }
  ];
  
  const doctors = [
    { name: "Dr. Smith", specialty: "Cardiology" },
    { name: "Dr. Williams", specialty: "Neurology" }
  ];
  
  const patients = [
    { name: "John Doe", age: 30, disease: "Flu" },
    { name: "Jane Doe", age: 25, disease: "COVID-19" }
  ];
  
  window.onload = function() {
    diseases.forEach(disease => addDiseaseToTable(disease));
    doctors.forEach(doctor => addDoctorToTable(doctor));
    patients.forEach(patient => addPatientToTable(patient));
  };
  