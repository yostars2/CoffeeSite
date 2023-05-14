
const user = document.querySelector('.user_icon '),
        closeX = document.querySelector('.close'),
        shadow = document.querySelector('.shadow'),
        coffeLogin = document.querySelector('.coffe_login'),
        nav = document.querySelector('.nav'),
        header = document.querySelector('.header')

user.addEventListener('click', function () {
        shadow.style = `display:block`
        setTimeout(() => {
                shadow.style.opacity = "1"
                coffeLogin.classList.add('actv')
        }, 200);
})

closeX.addEventListener('click', function () {
        coffeLogin.classList.remove('actv')
        setTimeout(() => {
                shadow.style = `display:none`
        }, 250);

})
window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
                nav.classList.add('navactive')
        } else {
                nav.classList.remove('navactive')
        }
})



let nol = 0
const bars = document.querySelector('.bars i'),
        list = document.querySelector('.list'),
        coffeeLogo = document.querySelector('.coffee_logo')

bars.addEventListener('click', function () {
        list.classList.toggle('aktiv')
})


const hotCoffee = document.querySelector('.hot_coffee'),
        cofeimg = document.querySelector('.cofe_img'),
        popularMenu = document.querySelector('.popular_menu'),
        menuItem = document.querySelectorAll('.menu_item')



window.addEventListener('scroll', function scroll() {
        if (scrollY > popularMenu.offsetTop - popularMenu.clientHeight / 3.7) {
                menuItem.forEach(menuItems => {
                        setTimeout(() => {
                                menuItems.style.opacity = "1"
                        }, 400);
                });
        }
})
hotCoffee.addEventListener('mousemove', (e) => {
        let speed = cofeimg.getAttribute('data-speed')
        let x = (window.innerWidth - e.pageX * speed) / 30
        let y = (window.innerHeight - e.pageY * speed) / 40

        cofeimg.style.transform = `translate(${x}px,${y}px)`
})

const reviewsItem = document.querySelectorAll('.reviews_item'),
        reviews = document.querySelector('.reviews')

window.addEventListener('scroll', function scoll() {
        if (scrollY > reviews.offsetTop - reviews.clientHeight / 2) {
                reviewsItem.forEach(reviewsItems => {
                        reviewsItems.style.transform = `translate(${nol}px)`
                        reviewsItems.style.opacity = "1"

                });
        }
})


const color = document.querySelector('.user_color '),
        moloko = document.querySelector('.moloko'),
        black = document.querySelector('.black'),
        root = document.querySelector(':root')

color.addEventListener('click', function () {
        color.classList.toggle('active')
        moloko.classList.toggle('active')
        black.classList.toggle('active')
})

moloko.addEventListener('click', function () {
        root.style.setProperty('--coffee', 'burlywood')
        gallery.style.background = "burlywood"
        posts.style.background = "burlywood"

})

const gallery = document.querySelector('.gallery'),
        posts = document.querySelector('.posts')
black.addEventListener('click', function () {
        root.style.setProperty('--coffee', '#512a10')
        gallery.style.background = "White"
        posts.style.background = "#eee"
})






const galleryItem = document.querySelectorAll('.gallery_item'),
        galleryItemTexts = document.querySelectorAll('.gallery_item_texts'),
        galleryimg = document.querySelector('.gallery_img'),
        galleryBox = document.querySelector('.gallery_box')





galleryItem.forEach(item => {
        item.addEventListener('click', () => {
                let text = item.querySelector('.gallery_item_texts')

                for (let i = 0; i < galleryItemTexts.length; i++) {
                        galleryItemTexts[i].classList.remove('active')
                }

                text.classList.add('active')
        })
});

