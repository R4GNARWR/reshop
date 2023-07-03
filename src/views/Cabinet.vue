<template>
    <div>
        <main class="cabinet-main">
            <div class="container cabinet-container">
                <h1 class="cabinet__title">Личный кабинет</h1>
                <div class="cabinet">
                    <aside class="cabinet__menu">
                        <div class="cabinet__tabs">
                        <a href="#userData" class="cabinet__tab" :class="{'active': currentTab === 'userData'}" @click="currentTab = 'userData'">Данные пользователя</a>
                        <a href="#payment" class="cabinet__tab" :class="{'active': currentTab === 'payment'}" @click="currentTab = 'payment'">Платежные данные</a>
                        <a href="#subscriptions" class="cabinet__tab" :class="{'active': currentTab === 'subscriptions'}" @click="currentTab = 'subscriptions'">Подписка на товары</a>
                        <a href="#sales" class="cabinet__tab" :class="{'active': currentTab === 'sales'}" @click="currentTab = 'sales'">Продажи</a>
                        <a href="#purchases" class="cabinet__tab" :class="{'active': currentTab === 'purchases'}" @click="currentTab = 'purchases'">Покупки</a>
                        <a href="#favorites" class="cabinet__tab" :class="{'active': currentTab === 'favorites'}" @click="currentTab = 'favorites'">Избранное</a>
                        <a href="#messages" class="cabinet__tab" :class="{'active': currentTab === 'messages'}" @click="currentTab = 'messages'">Сообщения</a>
                          <a href="#messages" class="cabinet__tab" @click="logout()">Выйти</a>
                        </div>
                    </aside>
                    <div style="width: 100%">
                        <UserData v-if="currentTab === 'userData'" />
                        <Payment v-else-if="currentTab === 'payment'" />
                        <Subcriptions v-else-if="currentTab === 'subscriptions'" />
                        <Sales v-else-if="currentTab === 'sales'" />
                        <Purchases v-else-if="currentTab === 'purchases'" />
                        <Favorites v-else-if="currentTab === 'favorites'" />
                        <Messages v-else-if="currentTab === 'messages'" />
                    </div>
                </div>
            </div>
        </main>

        <!-- Мобильный Личный Кабинет -->
        <div class="mob-cabinet">
            <h1 class="mob-cabinet__title">Личный кабинет</h1>
            <div class="mob-cabinet__tabs">
                <a href="#" class="mob-cabinet__tab" @click="currentTab = 'userData'">Данные пользователя</a>
                <a href="#" class="mob-cabinet__tab" @click="currentTab = 'payment'">Платежные данные</a>
                <a href="#" class="mob-cabinet__tab" @click="currentTab = 'subscriptions'">Подписка на товары</a>
                <a href="#" class="mob-cabinet__tab" @click="currentTab = 'sales'">Продажи</a>
                <a href="#" class="mob-cabinet__tab" @click="currentTab = 'purchases'">Покупки</a>
                <a href="#" class="mob-cabinet__tab" @click="currentTab = 'favorites'">Избранное</a>
                <a href="#" class="mob-cabinet__tab" @click="currentTab = 'messages'">Сообщения</a>
            </div>
        </div>
        <div class="mob-wrapper">
            <UserData v-if="currentTab === 'userData'" @close="currentTab = ''" />
            <Payment v-else-if="currentTab === 'payment'" @close="currentTab = ''" />
            <Subcriptions v-else-if="currentTab === 'subscriptions'" @close="currentTab = ''" />
            <Sales v-else-if="currentTab === 'sales'" @close="currentTab = ''" />
            <Purchases v-else-if="currentTab === 'purchases'" @close="currentTab = ''" />
            <Favorites v-else-if="currentTab === 'favorites'" @close="currentTab = ''" />
            <Messages v-else-if="currentTab === 'messages'" @close="currentTab = ''" />
        </div>
    </div>
</template>

<script>
import Favorites from '../components/cabinet/Favorites.vue'
import Messages from '../components/cabinet/Messages.vue'
import Payment from '../components/cabinet/Payment.vue'
import Purchases from '../components/cabinet/Purchases.vue'
import Sales from '../components/cabinet/Sales.vue'
import Subcriptions from '../components/cabinet/Subcriptions.vue'
import UserData from '../components/cabinet/UserData.vue'
import API from "@/api";

export default {
  components: { UserData, Payment, Subcriptions, Sales, Purchases, Messages, Favorites },
    name: 'Cabinet',
    data() {
        return {
            currentTab: 'userData',
        }
    },
  methods:{
    logout(){
      API.logout()
      this.$router.push('/')
    }
  }
}
</script>

<style src="@/assets/css/cabinet.css"></style>

<style>
    .cabinet__main .mob-profile {
        display: none;
    }
    .mob-wrapper .cabinet__body {
        display: none;
    }
</style>
