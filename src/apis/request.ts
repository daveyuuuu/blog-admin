import axios, { AxiosResponse } from 'axios';

interface Response {
  code: number;
  message: string;
  data: unknown;
}

const service = axios.create({
  baseURL: 'http://127.0.0.1/api/',
  timeout: 5000
});

function handleError(err: unknown) {
  console.log(err);
}

service.interceptors.response.use(
  (res: AxiosResponse<Response>) => {
    const { data } = res;
    switch (data.code) {
      case 0:
        return Promise.resolve(data);
        break;
      case -1:
        return Promise.reject(data.message);
        break;
      default:
        return Promise.resolve(data);
        break;
    }
  },
  err => {
    handleError(err);
    return Promise.reject(err);
  }
);

function request(url: string, data: unknown): Promise<unknown> {
  return service.request({
    url,
    data,
    method: 'post'
  });
}

export default request;
