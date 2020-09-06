export const slide_settings = {
  mobileFirst: true,
  arrows: true,
  centerMode: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 460,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
  ]
}