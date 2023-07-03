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
    sets() {
      if (useSessionStore().settings.find(el=>el.setting_type==="sets")){
        let sets  = JSON.parse(useSessionStore().settings.find(el=>el.setting_type==="sets").setting_json)
        this.currentTab = sets[0].title
        return sets
      } else return null
    }
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
      if (this.sets && this.currentTab)
        return this.sets.find(el=>el.title === this.currentTab).look
    }
  }

}
</script>

<style>

</style>
