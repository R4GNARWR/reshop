<template>
  <div v-if="photoArray && photoArray.length>1"
       class="cont" @mouseenter="changePhoto">
    <img :src="photoArray[i]">
  </div>
  <div v-else-if="photo || (photoArray && photoArray.length>0)"
       class="cont"
  >
    <img v-if="photo" :src="photo">
    <img v-else :src="photoArray[0]">
  </div>
  <div v-else class="cont">
    <img src="@/assets/images/slide-img.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "PhotoChange",
  props: ['photo', 'photoArray'],
  data(){return {i:0}},
  methods:{
    changePhoto(){
      if (this.i<this.photoArray.length-1) this.i++
      else this.i=0
    }
  }
}
</script>

<style scoped>

.cont img{
  display:block;
  margin-left:auto;
  margin-right:auto;
  object-fit: cover;
  width: 100%;
  height: 100%;

}
</style>
