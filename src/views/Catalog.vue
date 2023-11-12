<template>
      <section class="catalog" v-if="cats">
        <div class="container">
          <div class="catalog__tabs">
            <button type="button" class="catalog__tab" :class="{'active': currentGender === 'female'}" @click="changeGender">Для неё</button>
            <button type="button" class="catalog__tab" :class="{'active': currentGender === 'male'}" @click="changeGender">Для него</button>
          </div>
          <div class="catalog__body">
            <div class="catalog__categories">
              <router-link :to="`/search/asos%20boss%20h&m`" class="catalog__categories-item">
                <img src="@/assets/images/catalog__catigory.svg" alt="" />
                <p class="catalog__categories-text">Популярные бренды</p>
              </router-link>
              <div v-for="cat of computedCats.slice(0,5)" :key="cat.id">
                <router-link :to="`/category/${cat.id}`" class="catalog__categories-item"
                >
                  <img v-if="cat.photo" :src="cat.photo" :alt="cat.name" class="the__img"/>
                  <img v-else src="@/assets/images/catalog__catigory.svg" :alt="cat.name" />
                  <p class="catalog__categories-text">{{ cat.name }}</p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
import {useShopStore} from "@/store/shop";

export default {
  data() {
    return {
      currentGender : 'female'
    }
  },
  computed: {
    cats() {
      if (useShopStore().categoriesTree.length>0) {
        return useShopStore().categoriesTree
      } else {
        return []
      } 
    },
    computedCats() {
      let cats = []
      if(this.currentGender === 'male') {
        cats = this.cats.filter(obj => {
          const name = obj.name.toLowerCase();
          return name.includes('мужская') || name.includes('мужские') || name.includes('мужской');
        });
      } else {
        cats = this.cats.filter(obj => {
          const name = obj.name.toLowerCase();
          return name.includes('женская') || name.includes('женские') || name.includes('женский');
        });
      }
      if (cats.length < 5) {
        const remainingItems = this.cats.filter(obj => !cats.includes(obj));
        const uniqueItems = [...new Set(remainingItems)];
        const additionalItems = uniqueItems.slice(0, 5 - cats.length);
        cats.push(...additionalItems);
      }
      return cats
    }
  },
  methods: {
    changeGender() {
      this.currentGender === 'female' ?  this.currentGender = 'male' : this.currentGender = 'female'
    }
  }
}
</script>

<style src="@/assets/css/catalog.css"></style>
