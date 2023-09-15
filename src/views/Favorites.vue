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
            <Card v-for="product of sessionStore.favorites" :card-data="product" :key="product"/>
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
                </div>
                <div class="sales__right">
                    <p class="sales__right-text">Сортировать по:</p>
                    <a href="#" class="sales__sort sales__sort--mob active">Цене</a>
                    <a href="#" class="sales__sort">Скидке</a>
                    <a href="#" class="sales__sort">Дате</a>
                </div>
                </div>
                <CardFavoriteMob v-for="product of sessionStore.favorites" :card-data="product" :key="product"/>
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
import Card from "@/components/Card";
import CardFavoriteMob from "@/components/CardFavoriteMob";

export default {
    name: 'Cart',
  components: {Card, CardFavoriteMob},
  computed:{
    sessionStore(){return useSessionStore()}
  }
  // computed: {
    //     ...mapGetters({
    //       cartProducts: 'cart/cartItems',
    //       totalPrice: 'cart/totalPrice',
    //       totalDiscount: 'cart/totalDiscount',
    //       totalQuantity: 'cart/totalQuantity',
    //     })
    // },

    // methods: {
    //   ...mapMutations({
    //       deleteFromCart: 'cart/deleteFromCart',
    //   })
    // }

}
</script>
<style src="@/assets/css/cart.css"></style>
<style src="@/assets/css/empty-cart.css"></style>
