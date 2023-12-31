/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [],
  theme: {
    extend: {
      screens: {
        xs: '414px',
        ...defaultTheme.screens,
        md: '992px'
      },
      colors: {
        green: '#00BE96',
        'light-green': '#F7FFFD',
        'dark-green': '#01a17f',
        'menu-light-green': '#e2fff9',
        'article-title-green': '#00B58F',
        'top-menu-green': '#00deb0',
        'cart-green': '#e6f6f2',
        'member-green': '#06a583',
        active: '#00BE96',
        gray: '#707070',
        'menu-item-gray': '#e9e9e9',
        'disabled-gray': '#f2f2f2',
        'product-price-gray': '#a0a0a0',
        'collapse-gray': '#ebebeb',
        'product-description-gray': '#878787',
        'card-border-gray': '#f0f0f0',
        'light-gray': '#f5f5f5',
        'brand-gray': '#5f5f5f',
        'brand-divider-gray': '#ececec',
        'menu-divider-gray': '#dedede',
        'search-divider-gray': '#ececec',
        'search-record-gray': '#bfbfbf',
        'article-bg-gray': '#f7f7f7',
        'dot-gray': '#fefefe',
        'desktop-dot-gray': '#a7a7a7',
        'activity-dot-gray': '#cdcdcd',
        'frame-gray': '#cccccc',
        'cart-th-gray': '#f1f1f1',
        'cart-title-gray': '#999999',
        'hightlight-red': '#fa0000',
        'select-gray': '#fafafa',
        'menu-border-gray': '#ebebeb',
        'find-panel-gray': '#f9f9f9',
        silver: '#cccccc',
        'brand-red': '#e05959',
        'product-tag-red': '#e55e5e',
        'product-loved-red': '#f55959',
        'product-price': '#c31b1b',
        'product-tag': '#f06988',
        'product-title': '#575757',
        copyright: '#00725a',
        'product-btn': '#ff7400',
        'banner-bg': 'var(--banner-bg)',
        'header-banner-bg': 'var(--headerBannerBg)',
        'sp-banner-bg': 'var(--sp-banner-bg)',
        'sub-title-yellow': '#fff500',
        'discount-pink': '#fff9fa',
        'pink-gray': '#edebeb',
        'gift-pink-dark': '#fbe2e8',
        'gift-pink': '#fdf0f3',
        'postive-blue': '#00a0ff',
        'order-orange': '#ea8605',
        'checked-orange': '#ff7f00'
      },
      // backgroundImage: {
      //   'arrow-right': 'url(/icons/arrow-right.svg)',
      //   'member-point': 'url(~assets/images/pic-points@3x.png)',
      //   'member-point-pc': 'url(~assets/images/pic-background-points@3x.png)',
      //   'prev-step': 'url(/icons/arrow-green-left.svg)'
      // },
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
    }
  },
  plugins: [],
}

