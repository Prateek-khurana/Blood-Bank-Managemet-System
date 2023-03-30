import axios from 'axios'

class DonorService{
    getDonorIdByNameAndEmail(donor)
    {
        const Donor_Base_URL=`http://localhost:8080/hospital/donor-id/${donor.donorName}/${donor.donorEmail}`;
        return axios.get(Donor_Base_URL);
    }

    getDonorById(id)
    {
        const donor_by_id_url=`http://localhost:8080/hospital/donor-list/${id}`;
        return axios.get(donor_by_id_url);
    }

    adddonor(donor)
    {
        const add_donor_url= `http://localhost:8080/hospital/addDonor`;
        return axios.post(add_donor_url,donor);
    }

}

export default new DonorService();