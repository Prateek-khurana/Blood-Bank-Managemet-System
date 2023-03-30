import axios from 'axios';



class PatientService{
getPatientIdByNameAndEmail(patient)
    {
        const Patient_Base_URL=`http://localhost:8080/hospital/patient-id/${patient.name}/${patient.email}`;
        return axios.get(Patient_Base_URL);
    }


    
getPatientById(id)
{
    const patient_by_id_url=`http://localhost:8080/hospital/patient-list/${id}`;
    return axios.get(patient_by_id_url);
}

sendSms(sms)
{
    const sms_url=`http://localhost:8080/sms`;
    return axios.post(sms_url,sms);
}

addPatient(patient)
    {
        const add_patient_url= `http://localhost:8080/hospital/addPatient`;
        return axios.post(add_patient_url,patient);
    }


}


export default new PatientService();