import axios, { AxiosResponse } from 'axios'

interface Response {
  code: number;
  message: string;
  data: unknown;
}

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

function handleError(err: unknown) {
  console.log(err);
}

axios.interceptors.response.use(
  (res: AxiosResponse<Response>) => {
    const { data } = res;
    switch (data.code) {
      case 0:
        Promise.resolve(data.data);
        break;
      case -1:
        Promise.reject(data.message);
        break;
      default:
        break;
    }
  },
  err => {
    handleError(err)
    return Promise.reject(err)
  }
)

function request(url: string, data: unknown): Promise<unknown> {
  return service.request({
    url,
    data
  })
}

export default request
