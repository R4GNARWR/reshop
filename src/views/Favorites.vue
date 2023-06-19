<template>
    <main>
      <section class="cart">
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
      </section>
    </main>
</template>

<script>
import {useSessionStore} from '@/store/session';
import Card from "@/components/Card";

export default {
    name: 'Cart',
  components: {Card},
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
