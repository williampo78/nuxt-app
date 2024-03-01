export interface ProductInfo {
    brand: string
    cart_type: string
    delivery: string[]
    list_price: number
    payment: string[]
    product_discount: number
    product_id: number | string
    product_name: string
    promotion_label: string
    selling_channel: string
    selling_price: number
    start_selling: string | Date
}

export interface ShippingFee {
    fee: number
    fee_threshold: number
    notice: string
    notice_detail: string
}

export interface Spec {
    spec_1: string[]
    spec_2: string[]
    spec_dimension: number
    spec_info: SpecInfo[]
    spec_title: string[]
}

export interface SpecInfo {
    item_id: number
    item_no: string
    item_spec1: string
    item_spec2: string
    stock_qty: number
}

