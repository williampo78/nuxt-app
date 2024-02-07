export interface Area {
    districts: District[]
    id: number
    name: string
}

export interface District {
    id: number | null
    name: string
    zipCode: string
}

export interface City {
    id: number | null
    name: string
}

export interface AddressData {
    cityId: number | null
    districtId: number | null
    zipCode: string
    address: string
}