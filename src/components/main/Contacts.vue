<template>
  <section class="contacts">
    <Swiper class="container"
      :modules="modules"
      :autoplay="{delay: 2500, disableOnInteraction: false,}"
    >
      <SwiperSlide
        v-for="contact of contacts" :key="contact.title"
      >
        <div>
          <h1 class="main-title contacts__title">Наш магазин в <span>{{ contact.title }}</span></h1>
          <div class="contacts__inner">
            <div class="contacts__map">
              <PhotoChange :photo-array="contact.photos" class="the__img" />
<!--              <img v-if="contact." src="@/assets/images/slide-img.svg" alt="" />-->
<!--              <img src="@/assets/images/slide-img.svg" alt="" />-->
            </div>
            <div class="contacts__info">
              <a :href="'tel:'+contact.phone" class="contacts__phone">{{ contact.phone }}</a>
              <p class="contacts__address">
                {{contact.address}} {{contact.time}}
              </p>
              <div class="contacts__social-wrap">
                <div class="contacts__social">
                <p class="contacts__social-text">
                  Готовые образы, подобраные стилистом в телеграм-канале:
                </p>
                <a :href="'https://t.me/'+'arsenii_v_v'"
                   target="_blank"
                   class="contacts__social-icon contacts__telegram"
                ><svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_16_166)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M32 16C32 24.836 24.836 32 16 32C7.164 32 0 24.836 0 16C0 7.164 7.164 0 16 0C24.836 0 32 7.164 32 16ZM16.5733 11.812C15.0173 12.4587 11.9067 13.7987 7.24267 15.8307C6.48533 16.132 6.088 16.4267 6.052 16.7147C5.99067 17.2027 6.60133 17.3947 7.43067 17.6547C7.544 17.6907 7.66133 17.7267 7.78133 17.7667C8.59867 18.032 9.69733 18.3427 10.268 18.3547C10.7867 18.3653 11.3653 18.152 12.004 17.7147C16.3613 14.772 18.6107 13.2853 18.752 13.2533C18.852 13.2307 18.9907 13.2013 19.084 13.2853C19.1773 13.368 19.168 13.5253 19.1587 13.568C19.0973 13.8253 16.7053 16.0507 15.4653 17.2027C15.0787 17.5613 14.8053 17.816 14.7493 17.8747C14.624 18.004 14.496 18.128 14.3733 18.2467C13.6133 18.9773 13.0453 19.5267 14.4053 20.4227C15.0587 20.8533 15.5813 21.2093 16.1027 21.564C16.672 21.952 17.24 22.3387 17.976 22.8213C18.1627 22.944 18.3413 23.0707 18.516 23.1947C19.1787 23.668 19.7747 24.092 20.5107 24.0253C20.9373 23.9853 21.38 23.584 21.604 22.3853C22.1333 19.5507 23.176 13.412 23.4173 10.8813C23.432 10.6712 23.4231 10.4601 23.3907 10.252C23.3713 10.0839 23.2894 9.92924 23.1613 9.81867C22.9707 9.66267 22.6747 9.62933 22.5413 9.632C21.94 9.64267 21.0173 9.964 16.5733 11.812Z"
                      fill="#C4C4C4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_16_166">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                </a>
              </div>
              <div class="contacts__social">
                <p class="contacts__social-text">Задайте вопрос в Whats’app:</p>
                <a :href="'https://api.whatsapp.com/send?phone='+contact.wa" class="contacts__social-icon contacts__whatsapp"
                   target="_blank"
                ><svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.6068 7.39981C24.82 -0.000244619 15.047 -2.20026 7.46785 2.39977C0.0881831 6.99981 -2.30522 16.9999 2.48159 24.3999L2.88049 24.9999L1.28489 31L7.2684 29.4L7.86675 29.8C10.4596 31.2 13.2519 32 16.0442 32C19.036 32 22.0277 31.2 24.6206 29.6C32.0002 24.7999 34.1942 14.9999 29.6068 7.39981ZM25.4184 22.7999C24.6206 23.9999 23.6233 24.7999 22.2272 24.9999C21.4294 24.9999 20.4321 25.3999 16.4431 23.7999C13.0525 22.1999 10.2602 19.5999 8.26565 16.5999C7.06895 15.1999 6.4706 13.3999 6.27115 11.5998C6.27115 9.99983 6.8695 8.59982 7.86675 7.59981C8.26565 7.19981 8.66455 6.99981 9.06345 6.99981H10.0607C10.4596 6.99981 10.8585 6.99981 11.058 7.79982C11.4569 8.79982 12.4541 11.1998 12.4541 11.3998C12.6536 11.5998 12.6536 11.9998 12.4541 12.1999C12.6536 12.5999 12.4541 12.9999 12.2547 13.1999C12.0552 13.3999 11.8558 13.7999 11.6563 13.9999C11.2574 14.1999 11.058 14.5999 11.2574 14.9999C12.0552 16.1999 13.0525 17.3999 14.0497 18.3999C15.2464 19.3999 16.4431 20.1999 17.8393 20.7999C18.2382 20.9999 18.6371 20.9999 18.8365 20.5999C19.036 20.1999 20.0332 19.1999 20.4321 18.7999C20.831 18.3999 21.0305 18.3999 21.4294 18.5999L24.6206 20.1999C25.0195 20.3999 25.4184 20.5999 25.6178 20.7999C25.8173 21.3999 25.8173 22.1999 25.4184 22.7999Z"
                    fill="#C4C4C4"
                  />
                </svg>
                </a>
              </div>
              </div>

            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';
import {useSessionStore} from "@/store/session";
import PhotoChange from "@/components/PhotoChange";

export default {
  components: {
    PhotoChange,
    Swiper,
    SwiperSlide
  },
  computed:{
    contacts(){
      if(useSessionStore().settings.find(el=>el.setting_type==="contacts"))
        return JSON.parse(useSessionStore().settings.find(el=>el.setting_type==="contacts").setting_json)}
  },
  setup() {
    return {
      modules: [Autoplay, Navigation],
    };
  }
}
</script>

<style>

</style>
