import axios from 'axios'

// axios.defaults.baseURL = 'http://121.196.236.94:8080/api/v1'
axios.defaults.baseURL = 'https://mock.apifox.cn/m1/2162389-0-default/api/v1'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 10000

export const http = {
  get: <T extends {}>(path: string) => {
    return axios.get<T>(path, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token') ? localStorage.getItem('token') : 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMDI2MywiZXhwIjoxNjY5MzI3NDc1fQ.-SbZ0-4J1rvUNQAazZ-IHH5cUS-s8gu7lkGWhFJD8gE'}`,
      },
    })
  },
  post: () => { },
  patch: () => { },
  delete: () => { },
}
