<template>
      <section class="cart">
        <div class="cabinet__body active">
            <div class="sales">
        <div class="container">
          <div class="breadcrumb">
            <router-link to="/">Главная</router-link>
            <router-link to="/cart">Избранные товары</router-link>
          </div>
          <div class="cart__title">Вам понравились</div>
          <div class="category__products-cards cards">
            <Card v-for="product of favotiteProducts" :card-data="product" :key="product"/>
          </div>
        </div>
      </div>
        </div>
        <!-- Мобильный Личный Кабинет -> Избранное-->
        <div class="mob-liked mob-cabinet__body ">
            <h1 class="mob-cabinet__title">Личный кабинет</h1>
            <div class="mob-cabinet__tabs">
                <a href="#" class="mob-cabinet__tab active" @click.prevent="$emit('close')">Избранное</a>
            </div>
            <div class="sales">
                <div class="sales__top">
                <div class="sales__left">
                  Сортировать по:
                </div>
                <div class="sales__right">
                  <!-- todo: проверить метод getProductById и настроить сортировку по параметрам -->
                    <!-- <p class="sales__right-text">Сортировать по:</p>
                    <a href="#" class="sales__sort sales__sort--mob active"  @click="sortPrice">Цене</a>
                    <a href="#" class="sales__sort">Скидке</a>
                    <a href="#" class="sales__sort">Дате</a> -->
                </div>
                </div>
                <div class="wish__cards cards">
                  <CardFavoriteMob v-for="product of favotiteProducts" :card-data="product" :key="product"/>
                </div>
            
                <a href="#" class="wish__share">
                <p class="wish__share-text">Поделиться списком желаний</p>
                <img src="@/assets/images/share.svg" alt="">
                </a>
            </div>
        </div>
      </section>
      
</template>

<script>
import {useSessionStore} from '@/store/session';
import API from '../api.js';
import Card from "@/components/Card";
import CardFavoriteMob from "@/components/CardFavoriteMob";

export default {
    name: 'Cart',
  components: {Card, CardFavoriteMob},
  computed:{
    sessionStore(){return useSessionStore()}
  },
  data() {
    return {
      favotiteProducts: [],
      sortP: false,
    }
  },
  mounted() {
    this.favotiteProducts = this.sessionStore.favorites;
  },
  // computed: {
    //     ...mapGetters({
    //       cartProducts: 'cart/cartItems',
    //       totalPrice: 'cart/totalPrice',
    //       totalDiscount: 'cart/totalDiscount',
    //       totalQuantity: 'cart/totalQuantity',
    //     })
    // },

    methods: {
      sortPrice(){
          if (this.sortP === false) {
            this.favotiteProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
          } else {
            this.favotiteProducts.sort((b, a) => parseFloat(b.price) - parseFloat(a.price));
          }
          this.sortP = !this.sortP
        },
    }

}
</script>
<style src="@/assets/css/cart.css"></style>
<style src="@/assets/css/empty-cart.css"></style>
