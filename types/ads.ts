export interface ImageSlot {
    campaign_url_code: string
    desktop_applicable: number
    img_abstract: null | string
    img_action: 'X' | 'U' | 'P' | 'C' | 'M'
    img_alt: null | string
    img_path: string | null
    img_title: string
    mobile_applicable: number
    see_more_action: 'X' | 'U' | 'C'
    see_more_cate_hierarchy_id: number | null
    see_more_target_blank: 0 | 1
    see_more_url: null | string
    slot_color_code: string
    slot_icon_name: null | string
    slot_title: null | string
    slot_title_color: null | string
    target_blank: 0 | 1
    target_campaign: string
    target_cate_hierarchy: null | number
    url: string
}

export interface TextSlot {
    campaign_url_code: string
    desktop_applicable: 0 | 1
    img_action: 'X' | 'U' | 'P' | 'C' | 'M'
    mobile_applicable: 0 | 1
    name: string
    target_blank: 0 | 1
    target_campaign: string
    target_cate_hierarchy: null | string
    url: string
}

export interface ProductSlot {
    slot_color_code: string
    slot_title_color: string
    slot_icon_name: string
    slot_titl: string
    mobile_applicable: 0 | 1
    desktop_applicable: 0 | 1
    see_more_action: string
    see_more_url: string
    see_more_cate_hierarchy_id: number | null
    see_more_target_black: boolean
    products: Product[]
}

export interface ProdctImageSlot {
    see_more_action: string
    see_more_url: string
    see_more_cate_hierarchy_id: number | null
    see_more_target_blank: boolean
    images: Image[]
    products: Product[]
}

export interface Image {
    img_path: string
    img_alt: string
    img_title: string
    img_abstract: string
    img_action: 'X' | 'U' | 'P' | 'C' | 'M'
    url: string
    target_blank: 0 | 1
    target_campaign: string
    campaign_url_code: string
    target_cate_hierarchy: number
    mobile_applicable: 0 | 1
    desktop_applicable: 0 | 1
}

export interface Product {
    product_id: number
    product_no: string
    product_name: string
    product_unit: string
    list_price: number
    selling_price: number
    product_photo: string
    promotion_desc: string
    promotion_label: any[]
    collection: boolean
    selling_channel: string
    start_selling: string | Date
}