<template>
    <main>
      <section class="catalog" v-if="cats">
        <div class="container">
          <div class="catalog__tabs">
            <a class="catalog__tab active">Для неё</a>
            <a class="catalog__tab">Для него</a>
          </div>
          <div class="catalog__body">
            <div class="catalog__categories">
              <router-link :to="`/search/asos%20boss%20h&m`" class="catalog__categories-item">
                <img src="@/assets/images/catalog__catigory.svg" alt="" />
                <p class="catalog__categories-text">Популярные бренды</p>
              </router-link>
              <div v-for="cat of cats" :key="cat.id">
                <router-link :to="`/category/${cat.id}`" class="catalog__categories-item"
                >
                  <img v-if="cat.photo" :src="cat.photo" :alt="cat.name" class="the__img"/>
                  <img v-else src="@/assets/images/catalog__catigory.svg" :alt="cat.name" />
                  <p class="catalog__categories-text">{{ cat.name }}</p>
                </router-link>
              </div>
<!--              <a href="#" class="catalog__categories-item">-->
<!--                <img src="@/assets/images/catalog__catigory.svg" alt="" />-->
<!--                <p class="catalog__categories-text">Обувь</p>-->
<!--              </a>-->
<!--              <a href="#" class="catalog__categories-item">-->
<!--                <img src="@/assets/images/catalog__catigory.svg" alt="" />-->
<!--                <p class="catalog__categories-text">Верхняя одежда</p>-->
<!--              </a>-->
<!--              <a href="#" class="catalog__categories-item">-->
<!--                <img src="@/assets/images/catalog__catigory.svg" alt="" />-->
<!--                <p class="catalog__categories-text">Аксессуары</p>-->
<!--              </a>-->
<!--              <a href="#" class="catalog__categories-item">-->
<!--                <img src="@/assets/images/catalog__catigory.svg" alt="" />-->
<!--                <p class="catalog__categories-text">Распродажа</p>-->
<!--              </a>-->
            </div>
          </div>
        </div>
      </section>
    </main>
</template>

<script>
import {useShopStore} from "@/store/shop";

export default {
  computed:{
    cats(){
      if (useShopStore().categoriesTree.length>0) return useShopStore().categoriesTree.slice(0, 5)
      else return []
    }
  }
}
</script>

<style src="@/assets/css/catalog.css"></style>
