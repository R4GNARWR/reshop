<template>
  <div class="card category-card" v-if="product && product.id">
    <div class="recommend__card-img card-img">
      <PhotoChange :photo="product.photo" :photo-array="product.photosPreview" @click="$router.push('/product/'+product.id)"/>
      <div class="recommend__card-sign card-sign" v-if="product.condition"> {{ product.condition }} </div>
      <div class="recommend__actions card-actions">
        <div class="recommend__actions-left" @click.prevent="sessionStore.toCart(product.id)">{{sessionStore.cart.find(el=>el.id === product.id)?"Уже в корзине":"В корзину"}}</div>
        <div class="recommend__actions-right card-actions-right">
          <!--          <a :href="shop[this.cardData.toString()].photo" target="_blank" class="recommend__actions-icon card-actions-icon"><img src="@/assets/images/eye.svg" alt="" /></a>-->
          <div class="recommend__actions-icon card-actions-icon">
            <TheHeart :p-id="product.id" />
          </div>
          
        </div>
      </div>
    </div>
    <p class="recommend__card-name">{{ product.name }}</p>
    <div class="recommend__card-prices">
      <div class="recommend__card-newprice">{{product.price}} руб</div>
      <div class="recommend__card-oldprice" v-if="product.oldPrice">{{ product.oldPrice }} руб</div>
    </div>
  </div>
</template>

<script>
import PhotoChange from "@/components/PhotoChange";
import {useSessionStore} from "@/store/session";
import TheHeart from "@/components/TheHeart";
import {useShopStore} from "@/store/shop";

export default {
  name: 'CardCategory',
  components: {TheHeart, PhotoChange},
  props: ['cardData'],
  computed:{
    sessionStore(){return useSessionStore()},
    product(){return useShopStore().products[this.cardData]}
  },
  created() {useShopStore().getProduct(this.cardData)}
}
</script>

<style>

</style>
