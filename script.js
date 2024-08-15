function url() {
    fbq("track", "Purchase");
    fbq("track", "SubmitApplication");
    location.href = "https://chat.whatsapp.com/DEwTmeThw93BqGjowUxCfE";
  }

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  breakpoints: {
    200: {
      slidesPerView: 1.4,
      spaceBetween: 10
    },

    768: {
      slidesPerView: 1.8,
      spaceBetween: 10
    }
  }
  });