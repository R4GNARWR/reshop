<template>
    <div class="card sales-card" v-if="product">
        <div class="card-img">
            <PhotoChange :photo="product.photo" :photo-array="product.photosPreview" />
            <div class="card-sign" v-if="product.condition">{{ product.condition }}</div>
            <div class="card-actions card-actions--purchase">
                <div class="card-actions-right">
                    <a href="#" class="card-actions-icon card-actions-icon--purchase">
                        Удалить
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
</template>
<script>
import PhotoChange from "@/components/PhotoChange";
import {useSessionStore} from "@/store/session";
import {useShopStore} from "@/store/shop";

export default {
    name: 'CardCategory',
    components: { PhotoChange},
    props: ['cardData'],
    computed:{
        sessionStore(){return useSessionStore()},
        product(){return useShopStore().products[this.cardData]}
    },
    created() {
        useShopStore().getProduct(this.cardData)
    }
}
</script>

<style>

</style>