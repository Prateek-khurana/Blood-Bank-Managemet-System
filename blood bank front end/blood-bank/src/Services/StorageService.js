import axios from 'axios';

const Storage_Base_URL="http://localhost:8080/hospital/blood";

class StorageService {
    getAllBlood(){
     return axios.get(Storage_Base_URL);
    }
    
    getBloodByBloodGroup(blood_group)
    {
        return axios.get(`http://localhost:8080/hospital/blood/${blood_group}`);
    }
}

export default new StorageService();