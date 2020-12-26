import Swiper from "swiper/bundle"
import 'swiper/swiper-bundle.css'

const mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 0,
    disableOnInteraction: false
  },
  scrollbar: {
    el: '.swiper-scrollbar',  //スクロールバーの要素のセレクタ
    draggable: true,  //スクロールバーをドラッグ可能にする
  },

  loop: true,  //ループ可能（ループモードを有効に）
  slidesPerView: 2,  //スライドを2つ（分）表示
  spaceBetween: 30,
  centeredSlides: true,  //アクティブなスライドを中央に表示
  // レスポンシブブレーポイント（画面幅による設定）
})
