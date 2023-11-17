<template>
    <div>
        <div class="cabinet__body ">
            <div class="sales">
                <div class="sales__top">
                    <div class="sales__left">
                        <h1 class="sales__title">Покупки</h1>
                    </div>
                    <div class="sales__right">
                        <p class="sales__right-text">Сортировать по:</p>
                        <a href="#" class="sales__sort sales__sort--mob active">Цене</a>
                        <a href="#" class="sales__sort">Скидке</a>
                        <a href="#" class="sales__sort">Дате</a>
                    </div>
                </div>
                <div class="sales__cards cards">
                    <CardSales v-for="product in orderedProducts" :cardData="product.id" :key="product.id"></CardSales>
                </div>
            </div>
        </div>
        <!-- Мобильный Личный Кабинет -> Покупки-->
        <div class="mob-purchase mob-cabinet__body ">
            <h1 class="mob-cabinet__title">Личный кабинет</h1>
            <div class="mob-cabinet__tabs">
                <a href="#" class="mob-cabinet__tab active" @click.prevent="$emit('close')">Покупки</a>
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
                    <div class="sales__cards cards">
                        <CardSales v-for="product in orderedProducts" :cardData="product.id" :key="product.id"></CardSales>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import API from '@/api'
import {useSessionStore} from "@/store/session"
import CardSales from '@/components/CardSales.vue'

export default {
    components: {
        CardSales,
    },
    computed: {
        orders() {
            if(useSessionStore().userOrders) {
                return useSessionStore().userOrders
            }
        },
        orderedProducts() {
            if(useSessionStore().userOrderedProducts) {
                return useSessionStore().userOrderedProducts
            }
        }
    },
    created() {
        useSessionStore().getUserOrders();
        useSessionStore().getUserOrderedProducts();
        
    }
}
</script>

<style>

</style>
