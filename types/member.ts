export interface MemberInfo {
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

export interface PointInfo {
    currentPage: number
    expiringPoints: null | number
    list: object[]
    totalPages: number
    totalPoints: number
    totalRows: number
}
export interface MemberGroupItem {
    color_code: string
    identification: null | string
    name:string
}