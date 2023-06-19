<template>
  <div class="recommend__card card" v-if="product && product.id">
    <div class="recommend__card-img card-img">
      <PhotoChange :photo="product.photo" :photo-array="previews" @click="$router.push('/product/'+product.id)"/>
      <div class="recommend__card-sign card-sign" v-if="condition"> {{ condition }} </div>
      <div class="recommend__actions card-actions">
        <div class="recommend__actions-left" @click.prevent="sessionStore.toCart(product.id)">{{sessionStore.cart.includes(product.id)?"Уже в корзине":"В корзину"}}</div>
        <div class="recommend__actions-right card-actions-right">
          <a :href="product.photo" target="_blank" class="recommend__actions-icon card-actions-icon"><img src="@/assets/images/eye.svg" alt="" /></a>
          <div class="recommend__actions-icon card-actions-icon">
            <TheHeart :p-id="product.id" />
          </div>

        </div>
      </div>
    </div>
    <p class="recommend__card-name">{{ product.name }}</p>
    <div class="recommend__card-prices">
      <div class="recommend__card-newprice">{{ product.price}} руб</div>
      <div class="recommend__card-oldprice" v-if="product.oldPrice">{{ product.oldPrice }} руб</div>
    </div>
  </div>
</template>

<script>
import API from '../api.js'
import PhotoChange from "@/components/PhotoChange";
import {useSessionStore} from "@/store/session";
import TheHeart from "@/components/TheHeart";

export default {
  name: 'Card',
  components: {TheHeart, PhotoChange},
  props: ['cardData'],
  computed:{
    sessionStore(){return useSessionStore()}
  },
  data(){return{product:{}, condition:"", previews:[]}},
  beforeMount() {
    API.getProductById(this.cardData).then(value => {
      if (value.data.success) {
        this.product = value.data.response.product
        if (value.data.response.attributes.find(el=>el.attributeTitle==='condition'))
          this.condition = value.data.response.attributes.find(el=>el.attributeTitle==='condition').attributeValueText
        this.previews = value.data.response.fullPhotos
        this.$emit('childData', value.data.response.attributes);
      }
    })
  }
}
</script>

<style>

</style>
