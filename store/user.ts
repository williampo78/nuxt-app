import { defineStore } from 'pinia';
import { getUserInfoApi } from '~/api/user';

interface UserInfo {
    name: string
    mobile: string
    email: string
    sex: string
    sexName: string
    birthDay: string
    zipCode: string
    cityId: string
    cityName: string
    districtId: string
    districtName: string
    address: string
}
export const useUser = defineStore('user', {
    state: () => ({
        token: '',
        userInfo: <UserInfo>{
            name: '',
            mobile: '',
            email: '',
            sex: '',
            sexName: '',
            birthDay: '',
            zipCode: '',
            cityId: '',
            cityName: '',
            districtId: '',
            districtName: '',
            address: ''
        },
    }),
    actions: {
        async setUserInfo() {

            const data = await getUserInfoApi()
            this.userInfo = data.result
            console.log(data);
        },
        setToken(payload: string) {
            this.token = payload
        }
    },
});
