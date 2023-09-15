<template>
      <section class="info">
        <div class="container">
          <div class="info--sm">
            <h1 class="info__title">Доставка и оплата</h1>
            <p class="info__text info__text">
              Мы не бронируем товары, поскольку каждая вещь в единственном
              экземпляре. Вы можете выкупить вещь онлайн и забрать ее позже из
              магазина.
            </p>
            <p class="info__text">
              Для этого просто оформите заказ на сайте - мы с вами свяжемся по
              указанному вами номеру телефона.
            </p>
            <div class="info__subtitle">Варианты доставки:</div>
            <div class="info__item" v-for="method of deliveries" :key="method.title">
              <div class="info__item-top">{{ method.title }}</div>
              <div class="info__item-bottom">
                {{ method.description}}
              </div>
              <p style="font-size: 13px;">Доставим {{method.period}}</p>
              <i style="font-size: 13px;">Стоимость: {{method.aboutPrice}}</i>
            </div>
            <div class="info__subtitle">Варианты оплаты:</div>
            <div class="info__item" v-for="method of payments" :key="method.title">
              <div class="info__item-top">{{ method.header }}</div>
              <div class="info__item-bottom">
                {{ method.description}}
              </div>
            </div>
            <img src="@/assets/images/visa.png" alt="" />
          </div>
        </div>
      </section>
</template>

<script>
import {useSessionStore} from "@/store/session";

export default {
  computed: {
    deliveries() {
      return JSON.parse(useSessionStore().settings.find(el => el.setting_type === "deliveries").setting_json)
    },
    payments() {
      return JSON.parse(useSessionStore().settings.find(el => el.setting_type === "payments").setting_json)
    },
  }
}
</script>

<style src="@/assets/css/info.css"></style>
