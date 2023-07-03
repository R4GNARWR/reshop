<template>
  <section class="benefits">
    <div class="container" v-if="mainPage">
        <h1 class="main-title benefits__title">
          {{mainPage.aboutHeader }}
        </h1>
        <div class="benefits__block">
          <div class="benefits__img" style="height: 360px">
            <img v-if="mainPage.aboutPics" :src="mainPage.aboutPics[0]" class="the__img" alt="" />
            <img v-else src="@/assets/images/slide-img.svg" alt="" />
        </div>
          <div class="benefits__items" v-if="mainPage.benefits">
            <div class="benefits__item">
              <div class="benefits__item-title">{{ mainPage.benefits[0].title }}</div>
              <p class="benefits__item-text">
                {{ mainPage.benefits[0].description }}
              </p>
            </div>
            <div class="benefits__item" v-if="mainPage.benefits[1]">
              <div class="benefits__item-title">{{ mainPage.benefits[1].title }}</div>
              <p class="benefits__item-text">{{ mainPage.benefits[1].description }}</p>
            </div>
          </div>
        </div>
        <div class="benefits__block" v-if="mainPage.benefits && mainPage.benefits.length>2">
          <div class="benefits__items">
            <div class="benefits__item" v-if="mainPage.benefits[2]">
              <div class="benefits__item-title">{{ mainPage.benefits[2].title }}</div>
              <p class="benefits__item-text">{{ mainPage.benefits[2].description }}</p>
            </div>
            <div class="benefits__item" v-if="mainPage.benefits[3]">
            <div class="benefits__item-title">{{ mainPage.benefits[3].title }}</div>
            <p class="benefits__item-text">{{ mainPage.benefits[3].description }}</p>
            </div>
            <div class="benefits__item">
            <div class="benefits__item-title">
                Осознанность
                <a class="hint__trigger"
                ><img src="@/assets/images/question.svg" alt="" />
                <div class="hint">
                    <p>
                    Для производства одежды тратится много пресной воды,
                    энергии, вредных красителей, побочных продуктов сырой
                    нефти и т.д.
                    </p>

                    <p>
                    Тренд экономики нового поколения - вторичное
                    использование вещей, призванное сократить пагубное
                    влияние производств на природу
                    </p>
                </div>
                </a>
            </div>
            <p class="benefits__item-text">
                Используя одежду вторично, мы спасаем экологию от вредных
                производств
            </p>
            </div>
        </div>
          <div class="benefits__img">
            <img v-if="mainPage.aboutPics && mainPage.aboutPics[1]" :src="mainPage.aboutPics[1]" alt="" />
            <img v-else src="@/assets/images/slide-img.svg" alt="" />
          </div>
        </div>
    </div>
    </section>
</template>

<script>
import {useSessionStore} from "@/store/session";
export default {
  computed:{
    mainPage(){
      if (useSessionStore().settings.find(el=>el.setting_type==="mainPage"))
        return JSON.parse(useSessionStore().settings.find(el=>el.setting_type==="mainPage").setting_json)
      else return null
    },

  }
}
</script>

<style>

</style>
