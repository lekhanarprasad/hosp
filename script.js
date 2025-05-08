// Patient Management
document.getElementById("patientForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("patientName").value;
    const age = document.getElementById("patientAge").value;
    const disease = document.getElementById("patientDisease").value;
    
    const patient = { name, age, disease };
    addPatientToTable(patient);
    resetForm("patientForm");
  });
  
  function addPatientToTable(patient) {
    const table = document.getElementById("patientList").getElementsByTagName("tbody")[0];
    const row = table.insertRow();
    row.innerHTML = `<td>${patient.name}</td><td>${patient.age}</td><td>${patient.disease}</td><td><button onclick="deleteRow(this)">Delete</button></td>`;
  }
  
  function resetForm(formId) {
    document.getElementById(formId).reset();
  }
  
  function deleteRow(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  
  // Doctor Management
  document.getElementById("doctorForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("doctorName").value;
    const specialty = document.getElementById("doctorSpecialty").value;
    
    const doctor = { name, specialty };
    addDoctorToTable(doctor);
    resetForm("doctorForm");
  });
  
  function addDoctorToTable(doctor) {
    const table = document.getElementById("doctorList").getElementsByTagName("tbody")[0];
    const row = table.insertRow();
    row.innerHTML = `<td>${doctor.name}</td><td>${doctor.specialty}</td><td><button onclick="deleteRow(this)">Delete</button></td>`;
  }
  
  // Disease Management
  function addDiseaseToTable(disease) {
    const table = document.getElementById("diseaseList").getElementsByTagName("tbody")[0];
    const row = table.insertRow();
    row.innerHTML = `<td>${disease.name}</td><td>${disease.description}</td><td><button onclick="deleteRow(this)">Delete</button></td>`;
  }
  