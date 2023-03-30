import axios from 'axios'

class LoginService{
    getByUsernameAndPassword(staffMember)
    {
      const login_base_URL=`http://localhost:8080/hospital/staff/login/${staffMember.email}/${staffMember.password}`;
      return axios.get(login_base_URL);
    }


    getByEmail(email)
    {
      const email_base_URL=`http://localhost:8080/hospital/staff/login/${email}`;
      return axios.get(email_base_URL);
    }
}

export default new LoginService();