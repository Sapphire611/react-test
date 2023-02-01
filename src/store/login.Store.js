// 登录模块
import { makeAutoObservable } from "mobx"
import { setToken, getToken, http } from '@/utils'

class LoginStore {
    token = getToken() || ''
    constructor() {
        makeAutoObservable(this)
    }
    // 登录
    login = async ({ mobile, code }) => {
        const res = await http.post('https://www.fastmock.site/mock/45cd8a8a15199fc0a7b872227ace0796/react_test/login', {
            mobile,
            code
        })
        console.log(res.data);
        this.token = res.data.token;
        setToken(res.data.token);
    }
}

export default LoginStore