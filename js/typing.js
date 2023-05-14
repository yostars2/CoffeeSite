// class Typing {
//     constructor(key) {
//         this.el = document.querySelector(key.el)
//         this.time = key.interval || 500
//         this.delay = key.delay == undefined ? 1000 : key.delay
//         this.text = this.el.innerHTML.trim()
//         this.el.innerHTML = ''
//         setTimeout(() => {
//             this.write()
//         }, this.delay);
//     }
//     write(i = 0) {
//         this.el.innerHTML += this.text[i]
//         i++
//         if (this.text.length > i) {
//             setTimeout(() => {
//                 this.write(i)
//             }, this.time);
//         }
//     }
// }
// new Typing({
//     el: '.header__content h1',
//     interval: 300,
//     delay: 500
// })
// new Typing({
//     el: '.header__content p',
//     delay: 500
// })
// new Typing({
//     el: '.info__scroll-desc',
//     interval: 100,
//     delay: 0

// })
// const title = document.querySelector('.header__content p')
// let text = title.innerHTML
// title.innerHTML = ''

// function letter(i = 0) {
//     title.innerHTML += text[i]
//     i++
//     if (text.length > i) {
//         setTimeout(() => {
//             letter(i)
//         }, 300);
//     }
// }
// letter()
// const paralax = document.querySelector('.paralax'),
//         parallaxImg = paralax.querySelector('.parallax_img')

// window.onmousemove = (el) => {
//  let ong = el.pageX;
//  let tepa = el.pageY;
//  parallaxImg.style.transform = `translate(${ong}px,${tepa}px)`

// }

// paralax.querySelectorAll('.parallax_text').forEach(parallax_text =>{
//         parallax_text.onmousemove = () =>{
//            parallaxImg.src = parallax_text.getAttribute('data-src')    
//         }
// })
