/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: [],
	theme: {
		extend: {
			screens: {
				xs: '414px',
				...defaultTheme.screens,
				md: '992px',
			},
			fontFamily: {
				sans: ["'Inter'", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'blue-primary': '#00426A',
				'blue-forth': '#CBF6FF',
				'blue-fifth': '#B5F1F4',
				'blue-100': '#DBEAFE',
				'blue-400': '#60A5FA',
				'gray-50': '#F9FAFB',
				'gray-100': '#F3F4F6',
				'gray-200': '#E5E7EB',
				'gray-300': '#D1D5DB',
				'gray-400': '#9CA3AF',
				'gray-500': '#6B7280',
				'gray-600': '#4B5563',
				'gray-800': '#1F2937',
				'gray-900': '#111827',
				'green-50': '#F0FDF4',
				'green-100': '#DCFCE7',
				'green-200': '#BBF7D0',
				'green-400': '#4ADE80',
				'emerald-50': '#ECFDF5',
				'emerald-400': '#34D399',
				'emerald-500': '#10B981',
				red: '#FA0000',
				'red-50': '#FEF2F2',
				'red-100': '#FEE2E2',
				'red-400': '#F87171',
				'red-500': '#EF4444',
				'yellow-forth': '#FFF4CB',
				'orange-primary': '#FF770D',
				'orange-secondary': '#FFA800',
				'pink-primary': '#FFE8ED',
				'pink-secondary': '#F06988',
				'pink-third': '#FF8DA7',
				'amber-50': '#FFFBEB',
				'amber-100': '#FEF3C7',
				'amber-400': '#FBBF24',
				'amber-600': '#D97706',
				'teal-50': '#F0FDFA',
				'cyan-400': '#22D3EE',
				'swiper-button-gray': 'rgba(45,45,45,0.3)',
				'sky-50': '#F0F9FF',
				'sky-100': '#E0F2FE',
				'sky-200': '#BAE6FD',
				'sky-300': '#7DD3FC',
				'sky-400': '#38BDF8',
			},
			backgroundImage: {
				  'member-menu': 'url(/images/member-menu.png)',
				  'member-card': 'url(/images/member-card.png)',
			//   'arrow-right': 'url(/icons/arrow-right.svg)',
			//   'member-point': 'url(~assets/images/pic-points@3x.png)',
			//   'member-point-pc': 'url(~assets/images/pic-background-points@3x.png)',
			//   'prev-step': 'url(/icons/arrow-green-left.svg)'
			},
			// backgroundSize: {
			//   'size-5%': '5%'
			// },
			// backgroundPosition: {
			//   'right-6px': 'right 6px top 50%'
			// },
			// gridTemplateColumns: {
			//   'find-main': '200px 1fr',
			//   'member-collection': '20px 105px 1fr',
			//   'collection-action': '25px 25px',
			//   'auto-1fr': 'auto 1fr',
			//   'auto-1fr-auto': 'auto 1fr auto',
			//   point: '100px 1fr 150px 100px',
			//   'point-expire': '100px 1fr 150px 150px',
			//   return2: '70px 1fr',
			//   return3: '70px 1fr 0.5fr',
			//   'return-address': '70px 1fr 1fr',
			//   login: '3.5rem 1fr',
			//   register: '4.5rem 1fr',
			//   verify: '4rem 1fr',
			//   info: ' 8rem 1fr',
			//   'info-address': '8rem 1fr 1fr',
			//   '11rem-1fr': '11rem 1fr',
			//   recipient: '6rem 1fr',
			//   'recipient-tel': '6rem 1fr 0.5fr',
			//   'recipient-address': '6rem 1fr 1fr',
			//   'cart-detail': '3rem 1fr',
			//   'order-summary': '100px 1fr',
			//   'order-title': '1fr 1fr 200px',
			//   'oreder-detail': '100px 1fr 200px',
			//   'order-list': '150px 1fr',
			//   '1fr-150': '1fr 150px',
			//   '1fr-auto': '1fr auto',
			//   '200-1fr': '200px 1fr',
			//   'cart-order-address-pc': '3rem 0.4fr 0.5fr 1fr',
			//   'cart-order-address': '2.5rem 1fr 1.5fr',
			//   'cart-order-input': '2.5rem 1fr',
			//   '1fr-1fr': '1fr 1fr',
			//   '1fr-1fr-auto': '1fr 1fr auto',
			//   '100-2repeat': '100px 1fr 1fr',
			//   '135-1fr': '135px 1fr',
			//   '5rem-1fr': '5rem 1fr',
			//   '5rem-10rem-1fr': '5rem 10rem 1fr',
			//   16: 'repeat(16, minmax(0, 1fr))',
			//   20: 'repeat(20, minmax(0, 1fr))',
			//   ...defaultTheme.gridTemplateColumns
			// },
			// spacing: {
			//   base: '0.375rem',
			//   base2: '0.625rem',
			//   ...defaultTheme.spacing
			// },
			// fontSize: {
			//   15: '0.9375rem',
			//   17: '1.0625rem',
			//   ...defaultTheme.fontSize
			// },
			// animation: {
			//   'ease-forwards': '0.2s ease-out forwards'
			// },
			// boxShadow: {
			//   'product-float-view': '0 0 4px -1px rgba(0,0,0,0.4)',
			//   'member-center': '0 0 10px -5px rgba(0, 0, 0, 0.2)',
			//   modal: '0px 3px 20px rgba(0, 0, 0, 0.15)'
			// }
		},
	},
	plugins: [],
};
