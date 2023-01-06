import { http } from '../util/http'

// 获取用户信息
export const getUserInfo = () => http.get('/me')
