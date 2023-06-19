<template>
  <section class="banner">
    <div class="container">
        <Swiper class="banner__slider"
                :navigation="true"
                :modules="modules"
                :autoplay="{
                   delay: 2500,
                    disableOnInteraction: false,
                }"
        >
          <SwiperSlide class="banner__slides"
          v-for="banner of banners" :key="banner.id"
          >
              <div class="banner__slide">
                <img :src="banner.img" alt="" style="opacity: 0.7;"/>
                <div class="banner__slide-left">
                  <h1 class="banner__slide-title">{{ banner.title }}</h1>
                  <a :href="banner.buttonLink" class="banner__slide-link"
                     v-if="banner.buttonTitle"
                  >{{ banner.buttonTitle }}
                    <img src="@/assets/images/Arrow3.svg" alt="" style="max-width: 26px; margin-left: 0"/></a>
                  {{banner.description}}
                </div>
              </div>
          </SwiperSlide>
<!--          <div class="banner__slider-prev">-->
<!--              <img src="@/assets/images/slide-prev.svg" alt="" />-->
<!--          </div>-->
<!--          <div class="banner__slider-next">-->
<!--              <img src="@/assets/images/slide-next.svg" alt="" />-->
<!--          </div>-->
        </Swiper>
    </div>
  </section>
</template>

<script>
import {useSessionStore} from "@/store/session";

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';


export default {
  components: {
    Swiper,
    SwiperSlide
  },
  computed:{
    banners(){return useSessionStore().mainPage.sliders}
  },
  setup() {
    return {
      modules: [Autoplay, Navigation],
    };
  }
}
</script>

<style>
.swiper-button-next{
  background-image: url('@/assets/images/slide-next.svg');
}
.swiper-button-next:after{content: none}
.swiper-button-prev{background-image: url('@/assets/images/slide-prev.svg');}
.swiper-button-prev:after{content:none;}
</style>
