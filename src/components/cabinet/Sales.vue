<template>
    <div>
        <div class="cabinet__body">
            <div class="sales">
                <div class="sales__top">
                    <div class="sales__left">
                        <h1 class="sales__title">Продажи</h1>
                        <BtnAddProduct/>
                        <div class="sales__categories">
                            <button class="sales__category" :class="{'active': activeType === 'sale'}" @click="changeType('sale')">В продаже</button>
                            <button class="sales__category" :class="{'active': activeType === 'offer'}" @click="changeType('offer')">Предложенные</button>
                            <button class="sales__category" :class="{'active': activeType === 'deny'}" @click="changeType('deny')">Отклоненные</button>
                            <button class="sales__category" :class="{'active': activeType === 'sold'}" @click="changeType('sold')">Проданные</button>
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
                <div class="sales__cards cards" v-if="products && products.lenght > 0">
                    <CardCategory v-for="product in products" :cardData="product" :key="product"/>
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
                                <option value="sale">В продаже</option>
                                <option value="offer">Предложенные</option>
                                <option value="deny">Отклоненные</option>
                                <option value="sold">Проданные</option>
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
                <div class="sales__cards cards">
                    <div class="card sales-card">
                        <div class="card-img">
                            <img src="@/assets/images/product.svg" alt="" />
                            <p class="sales__card-mark">Продано</p>
                            <div class="card-sign card-sign--sales">Отличное</div>
                            <div class="card-actions card-actions--sales">
                                <div class="card-actions-right">
                                    <a href="#" class="card-actions-icon card-actions-icon--sales">
                                        <img src="@/assets/images/eye.svg" alt="" />
                                        <p>12 чел.</p>
                                    </a>
                                    <a href="#" class="card-actions-icon card-actions-icon--sales">
                                        <img src="@/assets/images/like.svg" alt="" />
                                        <p>3 чел.</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <p class="card-name">Мужская рубашка Mustang</p>
                        <div class="card-prices">
                            <div class="card-newprice">1500 руб</div>
                            <div class="card-oldprice">4500 руб</div>
                        </div>
                    </div>
                    
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
export default {
    data() {
        return {
            products: [],
            activeType : 'sold',
            sortType: 'price',
            sortDirection: 'asc'
        }
    },
    computed() {

    },
    methods: {
        changeType(type) {
            this.activeType = type
        }
    },
    components: {
        BtnAddProduct
    },
    created() {
        if(useSessionStore().user_info.id) {
            API.getUserProducts(useSessionStore().user_info.id).then((res) => {
                this.products = res.data
            })
        }
        
    }
    
}
</script>

<style>

</style>
