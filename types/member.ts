export interface MemberInfo {
    name: string
    mobile: string
    email: string
    sex: string
    sexName: string
    birthday: string
    zipCode: string
    cityId: number | null
    cityName: string
    districtId: number | null
    districtName: string
    address: string
}

export interface PointInfo {
    currentPage: number
    expiringPoints: null | number
    list: PointDetail[]
    totalPages: number
    totalPoints: number
    totalRows: number
}

export interface PointDetail {
    callFrom: string
    createdAt: string
    description: string | null
    expiresAt: string | Date
    id: number
    orderId: string
    point: number
    type: string
}
export interface MemberGroupItem {
    color_code: string
    identification: null | string
    name: string
}