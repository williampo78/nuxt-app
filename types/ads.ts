export interface ImageSlot {
    campaign_url_code: null | string
    desktop_applicable: number
    img_abstract: null | string
    img_action: 'X' | 'U' | 'P' | 'C'
    img_alt: null | string
    img_path: string | null
    img_title: null | string
    mobile_applicable: number
    see_more_action: 'X' | 'U' | 'C'
    see_more_cate_hierarchy_id: null | string
    see_more_target_blank: 0 | 1
    see_more_url: null | string
    slot_color_code: string
    slot_icon_name: null | string
    slot_title: null | string
    slot_title_color: null | string
    target_blank: 0 | 1
    target_campaign: null | string
    target_cate_hierarchy: null | number
    url: null | string
}

export interface TextSlot {
    campaign_url_code: null | string
    desktop_applicable: 0 | 1
    img_action: 'X' | 'U' | 'P' | 'C'
    mobile_applicable: 0 | 1
    name: string
    target_blank: 0 | 1
    target_campaign: null | string
    target_cate_hierarchy: null | string
    url: null | string
}