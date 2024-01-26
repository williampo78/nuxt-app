import { defineStore } from 'pinia';
import { getMemberInfoApi } from '~/api/member';
import {MemberInfo,PointInfo,MemberGroupItem} from '~/types/member'

export const useMember = defineStore('member', {
    state: () => ({
        token: '',
        memberInfo: <MemberInfo>{
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
        memberLevel: {
            img: '',
            level: 1,
            name: ''
        },
        memberGroup: <MemberGroupItem[]>
            [{
                color_code: '',
                identification: '',
                name: ''
            }]
        ,
        pointInfo: <PointInfo>{
            currentPage: 1,
            expiringPoints: <null | number>null,
            list: <object[]>[],
            totalPages: <number>1,
            totalPoints: <number>0,
            totalRows: <number>1,
        }
    }),
    actions: {
        async setUserInfo() {
            const data = await getMemberInfoApi()
            this.memberInfo = data.result
            this.memberLevel = data.result.member_level
            this.memberGroup = data.result.member_group
            console.log(data);
        },
        setToken(payload: string) {
            this.token = payload
        },
        setPointInfo(payload: PointInfo) {
            this.pointInfo = payload
        }
    },
});
