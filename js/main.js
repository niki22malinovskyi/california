const clickMenu = document.querySelector(".menu-btn");
const menuList = document.querySelector(".header__menu");

clickMenu.addEventListener("click", () => {
    clickMenu.classList.toggle("active");
    menuList.classList.toggle("active");
    document.body.classList.toggle("fix");
});

function getBodyScrollTop() {
  let offset = self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
  if (offset > 100) {
    document.querySelector('.navbar').classList.add("navbar-scroll");
  }
  if (offset <= 100) {
    document.querySelector('.navbar').classList.remove("navbar-scroll");
  }
}
window.addEventListener("scroll", getBodyScrollTop);

const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});
