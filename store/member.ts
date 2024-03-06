import { defineStore } from 'pinia';
import { getMemberInfoApi } from '~/api/member';
import { MemberInfo, PointInfo, MemberGroupItem, PointDetail } from '~/types/member'

interface Page {
    name: string;
    link: string;
    icon: string;
    hasMessage?: boolean;
}
export const useMember = defineStore('member', {
    state: () => ({
        token: '',
        memberInfo: <MemberInfo>{
            name: '',
            mobile: '',
            email: '',
            sex: '',
            sexName: '',
            birthday: '',
            zipCode: '',
            cityId: null,
            cityName: '',
            districtId: null,
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
            list: <PointDetail[]>[],
            totalPages: <number>1,
            totalPoints: <number>0,
            totalRows: <number>1,
        },
        expiringPointInfo: <PointInfo>{
            currentPage: 1,
            expiringPoints: <null | number>null,
            list: <PointDetail[]>[],
            totalPages: <number>1,
            totalPoints: <number>0,
            totalRows: <number>1,
        },

        pages: <Page[]>([
            {
                name: '會員中心',
                link: '/member/center',
                icon: 'house',
            },
            // {
            // 	name: '訂單查詢',
            // 	link: '/member/order-list',
            // 	icon: 'rectangle-list',
            // },
            {
                name: '我的點數',
                link: '/member/points',
                icon: 'coins',
            },
            {
                name: '我的收藏',
                link: '/member/collection',
                icon: 'heart',
            },
            {
                name: '我的資料',
                link: '/member/info',
                icon: 'user',
            },
            {
                name: '常用收件人',
                link: '/member/recipients',
                icon: 'address-book',
            },
            {
                name: '我的通知',
                link: '/member/notifications',
                icon: 'bell',
                hasMessage: true,
            },
            // {
            // 	name: '變更密碼',
            // 	link: '/member/account-password',
            // 	icon: 'gear',
            // },
            {
            	name: '常見問題',
            	link: '/customer-service/qa',
            	icon: 'circle-question',
            },
        ])
    }),
    actions: {
        // 更新使用者資訊
        async setUserInfo() {
            const data = await getMemberInfoApi()
            this.memberInfo = data.result
            this.memberLevel = data.result.member_level
            this.memberGroup = data.result.member_group
        },
        setToken(payload: string) {
            this.token = payload
        },
        setPointInfo(payload: PointInfo) {
            this.pointInfo = payload
        },
        setExpiringPointInfo(payload: PointInfo) {
            this.expiringPointInfo = payload
        }
    },
    getters: {
        currentPage: (state => {
            const route = useRoute()
            return state.pages.find((page) => {
                return route.path.includes(page.link);
            }) || state.pages[0]
        }
        )
    }
});
