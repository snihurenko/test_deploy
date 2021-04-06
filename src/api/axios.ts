import axios from 'axios';


const instance = axios.create({
  baseURL: 'http://192.168.0.148:3000'
});

instance.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');

  if (token) {
    req.headers = {
      'Authorization': `Bearer ${token}`
    }
  }
  return req;
})

instance.interceptors.response.use(
  (res) => { return res; },
  async (err) => {
    const refresh = localStorage.getItem('refresh_token');
    if (refresh) {
      // await refreshToken();
      // instance(err.config);
    } else if (err.response.status === 401) {
      window.location.replace('/login');
    }
    console.log(err.response);
    return Promise.reject(err);
  }
);

export default {
  instance
}
