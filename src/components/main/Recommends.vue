<template>
  <section class="recommend">
    <div class="container">
      <div class="recommend__tabs">
        <div class="recommend__tab" :class="{'active': currentTab === set.title}"
             v-for="set of sets" :key="set.title"
             @click="changeRecommends(set.title)">{{ set.title }}</div>
      </div>
      <div class="recommend__body cards">
        <Card v-for="pId in getReccomendCategoryProducts()" :cardData="pId" :key="pId" />
      </div>
    </div>
  </section>
</template>

<script>
import {useSessionStore} from "@/store/session";
import Card from '../Card.vue'
export default {
  components: { Card },
  computed:{
    sets(){
      this.currentTab=useSessionStore().mainPage.sets?useSessionStore().mainPage.sets[0].title:""
      return useSessionStore().mainPage.sets}
  },
  data() {
    return {
      currentTab: ''

    }
  },

  methods: {
    changeRecommends(category) {
        this.currentTab = category
    },
    getReccomendCategoryProducts() {
      if (this.sets)
        return this.sets.find(el=>el.title === this.currentTab).look
    }
  }

}
</script>

<style>

</style>
