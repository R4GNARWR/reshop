<template>
  <section class="why">
    <div class="container">
        <h1 class="main-title why__title">
        Почему мы берем комиссию с продавца?
        </h1>
        <div class="flex-block">
        <div class="flex-block__img">
          <img v-if="mainPage.CommisionPicture" :src="mainPage.CommisionPicture" alt="" />
          <img v-else src="@/assets/images/slide-img.svg" alt="" />
        </div>
        <div class="flex-block__info">
            <p>{{ mainPage.WhyCommision }}</p>
            <div v-html="mainPage.CommisionDescription"></div>
        </div>
        </div>
    </div>
    </section>
</template>

<script>
import {useSessionStore} from "@/store/session";
export default {
  computed:{
    mainPage(){return useSessionStore().mainPage},
  }
}
</script>

<style>

</style>
