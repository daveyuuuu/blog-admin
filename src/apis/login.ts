import request from './request';

export function userLogin(params: unknown): Promise<unknown> {
  return request('/user/login', params);
}

export default {
  userLogin
};
