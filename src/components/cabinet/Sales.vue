<template>
    <div>
        <div class="cabinet__body">
            <div class="sales">
                <div class="sales__top">
                    <div class="sales__left">
                        <h1 class="sales__title">Продажи</h1>
                        <BtnAddProduct/>
                        <div class="sales__categories">
                            <button class="sales__category" :class="{'active': activeType === 2}" @click="changeType(2)">В продаже</button>
                            <button class="sales__category" :class="{'active': activeType === 1}" @click="changeType(1)">Предложенные</button>
                            <button class="sales__category" :class="{'active': activeType === 3}" @click="changeType(3)">Отклоненные</button>
                            <button class="sales__category" :class="{'active': activeType === 4}" @click="changeType(4)">Проданные</button>
                        </div>
                    </div>
                    <div class="sales__right">
                        <p class="sales__right-text">Сортировать по:</p>
                        <button class="sales__sort sales__sort--mob"
                        :class="{'active': sortType === 'price', 'asc': sortDirection === 'asc'}">Цене</button>
                        <button class="sales__sort"
                        :class="{'active': sortType === 'discounts', 'asc': sortDirection === 'asc'}">Скидке</button>
                        <button  class="sales__sort"
                        :class="{'active': sortType === 'date', 'asc': sortDirection === 'asc'}">Дате</button>
                    </div>
                </div>
                <div class="sales__cards cards" v-if="products">
                    <CardSales v-for="product in products" :cardData="product.id" :key="product.id"/>
                </div>
                <div class="sales__cards cards" v-else>
                    <div class="empty" >
                        Вы еще не предложили ни одного товара
                    </div>
                </div>
            </div>
        </div>
        <!-- Мобильный Личный Кабинет -> Продажи-->
        <div class="mob-sales mob-cabinet__body ">
            <h1 class="mob-cabinet__title">Личный кабинет</h1>
            <div class="mob-cabinet__tabs">
                <a href="#" class="mob-cabinet__tab active" @click.prevent="$emit('close')">Продажи</a>
            </div>
            <div class="sales">
                <div class="sales__top">
                    <div class="sales__left">
                        <div class="sales__categories-select">
                            <select v-model="activeType" @change="changeType(activeType)">
                                <option :value="2">В продаже</option>
                                <option :value="1">Предложенные</option>
                                <option :value="3">Отклоненные</option>
                                <option :value="4">Проданные</option>
                            </select>
                        </div>
                        <a href="#" class="sales__btn btn btn-r">Предложить товар</a>
                        <div class="sales__categories">
                            <a href="#" class="sales__category">В продаже</a>
                            <a href="#" class="sales__category">Предложенные</a>
                            <a href="#" class="sales__category">Отклоненные</a>
                            <a href="#" class="sales__category active">Проданные</a>
                        </div>
                    </div>
                    <div class="sales__right">
                        <p class="sales__right-text">Сортировать по:</p>
                        <button class="sales__sort sales__sort--mob active">Цене</button>
                        <button class="sales__sort">Скидке</button>
                        <button  class="sales__sort">Дате</button>
                    </div>
                </div>
                <div class="sales__cards cards" v-if="products">
                    <CardSales v-for="product in products" :cardData="product.id" :key="product.id"/>
                </div>
                <a href="#" class="sales__btn sales__btn--mob btn btn-r">Предложить товар</a>
            </div>
        </div>
    </div>
</template>

<script>
import API from "@/api";
import {useSessionStore} from "@/store/session";
import BtnAddProduct from "@/components/BtnAddProduct";
import CardSales from "../CardSales.vue";

export default {
    data() {
        return {
            activeType : 1,
            sortType: 'price',
            sortDirection: 'asc'
        }
    },
    computed: {
        products() {
            if(useSessionStore().userProducts) {
                let products = useSessionStore().userProducts
                if(this.activeType) {
                    products = products.filter(product => product.active === this.activeType)
                }
                switch(this.sortType) {
                    case 'price':
                    if(this.sortDirection === 'asc') {
                        products = Object.fromEntries(
                            Object.entries(products).sort(([,a],[,b]) => a.price-b.price)
                        );
                    } else {
                        products = Object.fromEntries(
                            Object.entries(products).sort(([,a],[,b]) => b.price-a.price)
                        );
                    }
                    break
                }
                return products
            }
        }
    },
    methods: {
        changeType(type) {
            this.activeType = type
        }
    },
    components: {
    BtnAddProduct,
    CardSales
},
    created() {
        const userID = useSessionStore().user_info.id
        if(userID) {
            useSessionStore().getUserProducts(userID)
        }
        
    }
    
}
</script>

<style>

</style>
