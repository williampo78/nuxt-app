export interface RecipientData {
    id?: number | null
    note_type?: string
    name: string
    mobile: string
    telephone: string
    telephone_ext: string
    email: string
    zip_code: string
    city_name: string
    city_id: number
    district_name: string
    district_id: number
    address: string
    cvs_type: string
    cvs_store_no: string
    is_default: boolean | number
}
