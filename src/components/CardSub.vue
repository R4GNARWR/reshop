<template>
    <div class="card sales-card">
        <div class="card sales-card" v-if="product && product.id">
            <div class="card-img">
                <PhotoChange :photo="product.photo" :photo-array="product.photosPreview" @click="$router.push('/product/'+product.id)"/>
                <div class="card-sign" v-if="product.condition">{{ product.condition }}</div>
                <div class="card-actions">
                    <a href="" class="card-actions-left" @click.prevent="sessionStore.toCart(product.id)">{{sessionStore.cart.find(el=>el.id === product.id)?"Уже в корзине":"В корзину"}}</a>
                    <div class="card-actions-right">
                        <a href="#" class="card-actions-icon">
                            <img src="@/assets/images/eye.svg" alt="" />
                        </a>
                        <a href="#" class="card-actions-icon">
                            <img src="@/assets/images/like.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            
            <p class="card-name">{{ product.name }}</p>
            <div class="card-prices">
                <div class="card-newprice">{{product.price}}</div>
                <div class="card-oldprice" v-if="product.oldPrice">{{ product.oldPrice }} руб</div>
            </div>
        </div>
    </div>
</template>

<script>
import PhotoChange from "@/components/PhotoChange";
import {useSessionStore} from "@/store/session";
import TheHeart from "@/components/TheHeart";
import {useShopStore} from "@/store/shop";

export default {
    name: 'CardSub',
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
