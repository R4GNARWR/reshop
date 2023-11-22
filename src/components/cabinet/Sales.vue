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
                            <button class="sales__category" :class="{'active': activeType === 6}" @click="changeType(6)">Отклоненные</button>
                            <button class="sales__category" :class="{'active': activeType === 3}" @click="changeType(3)">Проданные</button>
                        </div>
                    </div>
                    <div class="sales__right">
                        <p class="sales__right-text">Сортировать по:</p>
                        <button class="sales__sort sales__sort--mob"
                        :class="{'active': sortType === 'price', 'asc': sortDirection === 'asc'}"
                        @click="changeSort('price')">Цене</button>
                        <button class="sales__sort"
                        :class="{'active': sortType === 'discounts', 'asc': sortDirection === 'asc'}"
                        @click="changeSort('discounts')">Скидке</button>
                        <button  class="sales__sort"
                        :class="{'active': sortType === 'date', 'asc': sortDirection === 'asc'}"
                        @click="changeSort('date')">Дате</button>
                    </div>
                </div>
                <div class="sales__cards cards" v-if="products && Object.keys(products).length > 0">
                    <CardSales v-for="product in products" :cardData="product.id" :key="product.id"/>
                </div>
                <div class="sales__cards cards" v-else>
                    <div class="empty">
                        <span v-if="activeType === 1">Вы еще не предложили ни одного товара</span>
                        <span v-if="activeType === 2">У вас нет товаров в продаже</span>
                        <span v-if="activeType === 3">У вас нет проданных товаров</span>
                        <span v-if="activeType === 6">Вы еще нет отклоненных товаров</span>
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
                                <option :value="6">Отклоненные</option>
                                <option :value="3">Проданные</option>
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
            const sessionStore = useSessionStore();
            if (sessionStore.userProducts) {
                let products = { ...sessionStore.userProducts };
                if (this.activeType) {
                    products = Object.fromEntries(
                    Object.entries(products).filter(([key, product]) => product.active === this.activeType)
                    );
                }
                switch(this.sortType) {
                    case 'price':
                        products = Object.fromEntries(
                            Object.entries(products).sort((a,b) => {
                                if(this.sortDirection === 'asc') {
                                    return a.name - b.name
                                } else {
                                    return b.price - a.price
                                }
                            })
                        );
                    break;
                }
                return products;
            }
        }
    },
    methods: {
        changeType(type) {
            this.activeType = type
        },
        changeSort(type) {
            if(this.sortType === type) {
                if(this.sortDirection === 'asc') {
                    this.sortDirection = 'desc'
                } else {
                    this.sortDirection = 'asc'
                }
            } else {
                this.sortType = type
                this.sortDirection = 'asc'
            }
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
