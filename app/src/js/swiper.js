import Swiper from "swiper"
import 'swiper/swiper-bundle.css'

const mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },

  loop: true,  //ループ可能（ループモードを有効に）
  slidesPerView: 2,  //スライドを2つ（分）表示
  spaceBetween: 30,
  centeredSlides: true,  //アクティブなスライドを中央に表示
  // レスポンシブブレーポイント（画面幅による設定）
})
