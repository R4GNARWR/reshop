<template>
      <section class="cart" v-if="products.length > 0">
        <div class="container">
          <div class="cart__title">
            Корзина <span class="cart__amount"> {{ products.length}} </span>
          </div>
          <div class="cart__wrapper">
            <div class="cart__list">
              <div class="cart__list-top">
                <p class="cart__top-text">
                  Каждый товар в единственном экземпляре. Торопись купить!
                </p>
<!--                <div class="cart__all-check">-->
<!--                  <input-->
<!--                    class="cart__all-checkbox"-->
<!--                    type="checkbox"-->
<!--                    id="select-all"-->
<!--                  />-->
<!--                  <label for="select-all">Выбрать всё</label>-->
<!--                </div>-->
              </div>
              <div class="cart__item" v-for="product in products" :key="product.id">
<!--                <div class="cart__item-check">-->
<!--                  <input type="checkbox" class="cart__item-checkbox" />-->
<!--                  <label></label>-->
<!--                </div>-->
                <div class="cart__item-img">
                  <img v-if="product.photosPreview[0]" :src="product.photosPreview[0]" alt="" />
                  <img v-else src="@/assets/images/cart-img.svg" alt="" />
                </div>
                <div class="cart__item-info">
                  <div class="cart__item-prices--mob">
                    <div class="cart__item-newprice--mob">{{ product.price }} р.</div>
                    <div class="cart__item-oldprice--mob"  v-if="product.oldPrice">{{ product.oldPrice }} р.</div>
                  </div>
                  <a href="#" class="cart__item-name"
                    >{{ product.name }}</a
                  >
                  <div class="cart__item-wrapper">
                    <div class="cart__item-desc">
                      <p v-for="(arr, title) of attrString(product)">{{ title }}: {{ arr.toString() }}</p>
                    </div>
                    <div class="cart__item-actions">
                      <a class="cart__item-icon" @click.prevent="delFrom(product.id)">
                        <img src="@/assets/images/trash.svg" alt="" />
                      </a>
                      <TheHeart :pId="product.id"/>
                    </div>
                    <div class="cart__item-prices">
                      <div class="cart__item-oldprice" v-if="product.oldPrice">{{ product.oldPrice }} р.</div>
                      <div class="cart__item-newprice">{{ product.price }} р.</div>
                    </div>
                  </div>
<!--                  <div class="cart__item-viewers">-->
<!--                    Этот товар сейчас смотрят: 14 человек-->
<!--                  </div>-->
                </div>
              </div>
              <div class="cart__promo">
                <label class="cart__promo-label"
                  ><span>Введите промокод, если есть</span>
                  <input
                    class="cart__promo-input"
                    type="text"
                    placeholder="Промокод"
                    v-model="paymentInfo.promo"
                  />
                </label>
                <p class="cart__promo-text">
                  Каждый товар в единственном экземпляре. Торопись купить!
                </p>
              </div>

              <form class="cart__form">
                <h2 class="cart__form-title">Способ доставки</h2>
<!--                <a href="#" class="cart__form-link">Выберите адрес доставки</a>-->
                <fieldset class="cart__form-fieldset--pay">
                  <div class="group-radio" v-for="way of JSON.parse(sessionStore.settings.find(el=>el.setting_type ==='deliveries').setting_json)">
                    <label>
                      <input
                        type="radio"
                        name="group1"
                        class="cart__form-radio"
                        @click="deliveryInfo.deliverType=way"
                      />
                      {{ way.title }}
                    </label>
                  </div>
                </fieldset>

                <h2 class="cart__form-title">Способ оплаты</h2>
                <fieldset class="cart__form-fieldset--pay">
                  <div class="group-radio" v-for="way of JSON.parse(sessionStore.settings.find(el=>el.setting_type ==='payments').setting_json)">
                    <label>
                      <input
                        type="radio"
                        name="group12"
                        class="cart__form-radio"
                        @click="paymentInfo.paymentsType = way"
                      />
                      {{ way.title }}
                    </label>
                  </div>
                </fieldset>

                <h2 class="cart__form-title">Ваши данные</h2>
                <input
                  type="text"
                  class="cart__form-input"
                  placeholder="Имя, Фамилия"
                  v-model="userInfo.name"
                />
                <input
                  type="text"
                  class="cart__form-input"
                  placeholder="Телефон"
                  v-maska data-maska="+7 (###) ###-##-##"
                  minlength="18"
                  required
                  v-model="userInfo.phone"
                />
                <input
                  type="text"
                  class="cart__form-input"
                  placeholder="E-mail"
                  v-model="userInfo.email"
                />
                <div class="cart__form-check">
                  <input id="" type="checkbox" class="cart__form-checkbox" />
                  <label for=""
                    >Подписаться на рассылку выгодных предложений</label
                  >
                </div>

              </form>
              <form class="deliver__form" v-if="deliveryInfo.deliverType && deliveryInfo.deliverType.title === 'Курьером'">
                <p class="deliver__form-text">Введите адрес доставки</p>
                <input type="text"
                placeholder="Название населенного пункта"
                v-model="deliveryInfo.city"
                />
                <input
                  type="text"
                  class="deliver__form-street"
                  placeholder="Улица"
                  v-model="deliveryInfo.street"
                />
                <input
                  class="deliver__form-house"
                  type="text"
                  placeholder="дом"
                  v-model="deliveryInfo.houseNum"
                />
                <input class="deliver__form-house"
                type="text"
                placeholder="кв"
                v-model="deliveryInfo.flatNum"
                />
                <p class="deliver__form-text">Информация для курьера</p>
                <input
                  type="text"
                  class="deliver__form-number"
                  placeholder="Подъезд"
                  v-model="courierInfo.porche"
                />
                <input
                  type="text"
                  class="deliver__form-number"
                  placeholder="Домофон"
                  v-model="courierInfo.intercom"
                />
                <input
                  type="text"
                  class="deliver__form-number"
                  placeholder="Этаж"
                  v-model="courierInfo.floor"
                />
<!--                <button type="submit" class="deliver__form-btn btn">-->
<!--                  Сохранить-->
<!--                </button>-->
              </form>
            </div>
            <div class="check">
              <h2 class="check__title">Итого</h2>
              <ul class="check__list">
                <li class="check__item">
                  <div class="check__item-left">Товары, {{ products.length}}  шт.</div>
                  <div class="check__item-right">{{ totalPrice }} р.</div>
                </li>
                <li class="check__item">
                  <div class="check__item-left">Скидка</div>
                  <div class="check__item-right">{{ totalDiscount }} р.</div>
                </li>
                <li class="check__item" v-if="deliveryInfo.deliverType">
                  <div class="check__item-left">Доставка</div>
                  <div class="check__item-right">{{deliveryInfo.deliverType.aboutPrice}} р.</div>
                </li>
              </ul>
              <div class="check__subtitle" v-if="deliveryInfo.deliverType">Доставка: {{ deliveryInfo.deliverType.title }}</div>
              <p class="check__text" v-if="deliveryInfo.deliverType">
                {{ deliveryInfo.deliverType.description }}
              </p>
              <div class="check__subtitle" v-if="paymentInfo.paymentsType">Оплата: {{ paymentInfo.paymentsType.title }}</div>
              <button type="submit" @click.prevent="makeOrder" class="check__btn btn" :disabled="!readyToOrder">Оплатить заказ</button>
              <div class="check__agreement">
                <img src="@/assets/images/orange-tick.svg" alt="" />
                <p class="check__agreement-text">
                  Согласен(-на) с <a href="#">Правилами пользования</a>
                </p>
              </div>
              <div class="check__timer">
                Оплатите товары за <span>{{ minutes }}:{{ seconds }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="cart" v-else>
        <div class="container">
          <div class="breadcrumb">
            <router-link to="/">Главная</router-link>
            <router-link to="/cart">Корзина</router-link>
          </div>
          <div class="cart__title">Корзина</div>
          <div class="cart__empty">
            <img src="@/assets/images/cart.svg" alt="" />
            <div class="cart__empty-title">Ваша корзина пуста</div>
            <p class="cart__empty-text">
              <router-link to="/">Нажмите здесь</router-link>, чтобы начать покупки
            </p>
          </div>
        </div>
      </section>
      <!-- Выбор способа доставки -->
      <div class="deliver">
        <div class="deliver__window">
          <div class="deliver__tabs">
            <a class="deliver__tab">Самовывоз</a>
            <a class="deliver__tab active">Курьером</a>
          </div>
          <div class="deliver__body active" v-if="deliveryInfo.deliverType && deliveryInfo.deliverType.title === 'Курьером'">
            <form class="deliver__form">
              <p class="deliver__form-text">Введите адрес доставки</p>
              <input
              type="text"
              placeholder="Название населенного пункта"
              v-model="deliveryInfo.city"
              required
              />
              <input
                type="text"
                class="deliver__form-street"
                placeholder="Улица"
                v-model="deliveryInfo.street"
                required
              />
              <input
                class="deliver__form-house"
                type="text"
                placeholder="дом"
                v-model="deliveryInfo.houseNum"
                required
              />
              <input class="deliver__form-house"
              type="text"
              placeholder="кв"
              v-model="deliveryInfo.flatNum"
              required
              />
              <p class="deliver__form-text">Информация для курьера</p>
              <input
                type="text"
                class="deliver__form-number"
                placeholder="Подъезд"
                v-model="courierInfo.porch"
              />
              <input
                type="text"
                class="deliver__form-number"
                placeholder="Домофон"
                v-model="courierInfo.intercom"
              />
              <input
                type="text"
                class="deliver__form-number"
                placeholder="Этаж"
                v-model="courierInfo.floor"
              />
              <button type="submit" class="deliver__form-btn btn">
                Сохранить
              </button>
            </form>
          </div>
          <div class="deliver__body">
            <a class="deliver__phone" href="tel:+8 (987) 654-23-10"
              >8 (987) 654-23-10</a
            >
            <div class="deliver__info">
              г. Уфа, ТЦ "Галерея АРТ" (Чернышевского, 75) второй этаж по
              эскалатору, вывеска RESHOP <br />
              Каждый день с 12.00 до 21.00
            </div>
            <div class="deliver__map">карта</div>
          </div>
        </div>
      </div>
      <!-- Модальное окно ошибки -->
      <div class="modal-error">
        <div class="modal-error__window">
          <div class="modal-error__content">
            <div class="modal-error__title">К сожалению, вы опоздали:</div>
            <p class="modal-error__text modal-error__text--sm">
              Кто-то только что начал оплачивать данный товар
            </p>
            <p class="modal-error__text">
              Вы можете вернуться к оплате через несколько минут на случай, если
              текущий клиент прервёт оплату
            </p>
          </div>
        </div>
      </div>
</template>

<script>
import {useSessionStore} from "@/store/session";
import { vMaska } from "maska"
import API from '../api.js'
import TheHeart from "@/components/TheHeart";

export default {
  name: 'Cart',
  components: {TheHeart},
  directives: { maska: vMaska },
  data(){
    return{
    userInfo: {
      name: '',
      phone: '',
      email: '',
    },
    paymentInfo: {
      paymentsType:null,
      promo: '',
    },
    deliveryInfo: {
      deliverType: null,
      city: '',
      street: '',
      houseNum: '',
      flatNum: '',
    },
    courierInfo: {
      porche: '',
      intercom: '',
      floor: '',
    },
    minutes: 5,
    seconds: 30
  }},
  computed: {
    sessionStore(){return useSessionStore()},
    products(){return useSessionStore().cart},
    totalPrice(){
      let sum=0
      for (let p of useSessionStore().cart){
        sum+=p.price
      }
      return sum
    },
    totalDiscount(){
      let sum=0
      for (let p of useSessionStore().cart){
        if (p.oldPrice)
          sum+=p.oldPrice-p.price
      }
      return sum
    },
    readyToOrder() {
      if(this.userInfo.phone !== '' && this.userInfo.phone.length === 18 && this.deliveryInfo.deliverType !== null) {
        return true
      } else {
         return false
      }
    }
  },
  methods:{
    attrString(product){
      let result={}
      for (let attr of product.attributes)
        if(result[attr.frontName])result[attr.frontName].push(attr.attributeValueText)
        else result[attr.frontName]=[attr.attributeValueText]
      return result
    },
    delFrom(id){
      this.sessionStore.delFromCart(id)
    },
    makeOrder() {
      const response = API.makeOrder(this.userInfo, this.paymentInfo, this.deliveryInfo, this.courierInfo)
      console.log(response)
    },
    startTimer() {
      let totalSeconds = this.minutes * 60 + this.seconds;
      const timer = setInterval(() => {
        if (totalSeconds > 0) {
          totalSeconds--;
          this.minutes = Math.floor(totalSeconds / 60);
          this.seconds = totalSeconds % 60;
        } else {
          clearInterval(timer);
        }
      }, 1000);
      return true
    }
  },
  mounted() {
    this.startTimer();
  },

}
</script>
<style src="@/assets/css/cart.css"></style>
<style src="@/assets/css/empty-cart.css"></style>
