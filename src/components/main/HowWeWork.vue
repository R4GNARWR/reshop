<template>
  <section class="howwework">
    <div class="container">
        <h1 class="main-title howwework__titile">Как это работает?</h1>
        <div class="steps">
        <div class="steps__tabs">
            <a class="steps__tab" :class="{'active': currentTab === 'saller'}" @click="currentTab='saller'">Для продавцов</a>
            <a class="steps__tab" :class="{'active': currentTab === 'buyer'}" @click="currentTab='buyer'">Для покупателей</a>
        </div>
        <div class="steps__body" :class="{'active': currentTab === 'saller'}" >
            <div class="steps__card">
            <div class="steps__card-number">1</div>
            <div class="steps__card-text">
                У вас есть <span class="black">качественная вещь</span>, но вы
                не хотите её носить
            </div>
            </div>
            <div class="steps__card">
            <div class="steps__card-number">2</div>
            <div class="steps__card-text">
                Вместо того, чтобы выбросить вещь, или отправить навечно в
                шкаф, вы <span class="orange">предлагаете её нам</span>
            </div>
            </div>
            <div class="steps__card">
            <div class="steps__card-number">3</div>
            <div class="steps__card-text">
                Наш <span class="black">стилист оценивает</span> состояние,
                актуальность и цену. Вещь проходит обработку отпаривателем
            </div>
            </div>
            <div class="steps__card">
            <div class="steps__card-number">4</div>
            <div class="steps__card-text">
                Менеджер создает для вас
                <span class="black">личный кабинет</span>, где вы можете
                отслеживать статистику просмотров
            </div>
            </div>
            <div class="steps__card">
            <div class="steps__card-number">5</div>
            <div class="steps__card-text">
                Как только вещь выкупили, деньги переводятся на вашу карту
            </div>
            </div>
            <div class="steps__card">
            <div class="steps__card-number">6</div>
            <div class="steps__card-text">
                Магазин взимает 50% от стоимости
            </div>
            <img
                src="@/assets/images/question.svg"
                alt=""
                class="steps__card-img"
            />
            </div>
        </div>
        <div class="steps__body" :class="{'active': currentTab === 'buyer'}" >
            <div class="steps__card">
            <div class="steps__card-number">1</div>
            <div class="steps__card-text">
                Вы хотите приобрести трендовую и качественную вещь в хорошем
                или новом состоянии
            </div>
            </div>
            <div class="steps__card">
            <div class="steps__card-number">2</div>
            <div class="steps__card-text">
                Вы приходите в офлайн-магазин или покупаете вещь на сайте
            </div>
            </div>
            <div class="steps__card">
            <div class="steps__card-number">3</div>
            <div class="steps__card-text">
                Все вещи прошли отбор стилиста и термическую обработку
            </div>
            </div>
            <div class="steps__card">
            <div class="steps__card-number">4</div>
            <div class="steps__card-text">
                Вы можете забронировать товар, только оплатив его на сайте и
                забрав в магазине
            </div>
            </div>
            <div class="steps__card">
            <div class="steps__card-number">5</div>
            <div class="steps__card-text">
                Поздравляем с покупкой :) Надеемся, новая вещь будет долго вас
                радовать
            </div>
            </div>
        </div>
        <div class="steps__nav">
          <div class="steps__prev" :class="{'active': currentTab === 'saller'}" @click="currentTab='saller'">
            <img src="@/assets/images/slide-prev.svg" alt="" />
          </div>
          <div class="steps__next" :class="{'active': currentTab === 'buyer'}" @click="currentTab='buyer'">
            <img src="@/assets/images/slide-next.svg" alt="" />
          </div>
        </div>
        </div>
        <BtnAddProduct/>
    </div>
    </section>
</template>

<script>
import {useSessionStore} from "@/store/session";
import BtnAddProduct from "@/components/BtnAddProduct";
export default {
  components: {BtnAddProduct},
  computed:{
    hitSteps(){return useSessionStore().mainPage.hitSteps},
  },
  data(){return{
    currentTab:'saller'
  }}
}
</script>

<style>

</style>
