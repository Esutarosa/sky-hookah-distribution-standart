/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
             nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')

        toggle.classList.toggle('show-icon')
    })
}
showMenu('nav-toggle', 'nav-menu')

/*=============== REMOVE MENU MOBILE ON CLICK ===============*/
const navLink = document.querySelectorAll('.nav__link, .dropdown__link')

function linkAction() {
    const navMenu    = document.getElementById('nav-menu')
    const toggleMenu = document.getElementById('nav-toggle')

    toggleMenu.classList.toggle('show-icon')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: true,

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SHOW CART ===============*/
const cart      = document.getElementById('cart'),
      cartShop  = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')

if (cartShop) {
    cartShop.addEventListener('click', () =>{
        cart.classList.toggle('show-cart')
    })
}

if (cartClose) {
    cartClose.addEventListener('click', () =>{
        cart.classList.remove('show-cart')
    })
}