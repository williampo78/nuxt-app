export interface Message {
    id: number
    subject: string
    content: string
    category: string
    categoryId: number
    bgColor: string
    type: string
    channel: string
    imageUrl: string
    link: string
    createdAt: string
    isRead: boolean
}