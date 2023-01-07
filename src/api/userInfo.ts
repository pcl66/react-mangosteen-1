import { http } from '../util/http'

// 登录
export const login = (data: { email: string; code: string }) => http.post('/session', data)
// 获取用户信息
export const getUserInfo = () => http.get('/me')
// 获取code
export const getCode = (data: { email: string }) => http.post('/validation_codes', data)
