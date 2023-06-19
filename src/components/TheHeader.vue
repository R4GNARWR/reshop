<template>
  <header>
      <div class="header__top">
        <div class="container header__top-container">
          <div class="header__top-city" @click="showCity=!showCity">
            <svg
              width="35"
              height="21"
              viewBox="0 0 35 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0401 10C13.1584 10 10.0001 13.1583 10.0001 17.0356C9.97455 22.7072 16.7725 27.4099 17.0401 27.6C17.0401 27.6 24.1056 22.7072 24.0801 17.04C24.0801 13.1583 20.9217 10 17.0401 10ZM17.0401 20.56C15.0953 20.56 13.5201 18.9848 13.5201 17.04C13.5201 15.0952 15.0953 13.52 17.0401 13.52C18.9849 13.52 20.5601 15.0952 20.5601 17.04C20.5601 18.9848 18.9849 20.56 17.0401 20.56Z"
                fill="black"
              />
            </svg>
            <p>Уфа</p>
          </div>
          <nav class="header__top-links">
            <router-link to="/about" class="header__top-link">О компании</router-link>
<!--            <router-link to="/rent" class="header__top-link">Аренда одежды</router-link>-->
            <router-link to="/howItWorks" class="header__top-link">Как это работает</router-link>
            <router-link to="/howToDonate" class="header__top-link">Как сдать одежду</router-link>
            <router-link to="/delivery" class="header__top-link">Доставка и оплата</router-link>
          </nav>
          <a href="tel:89876542310" class="header__top-phone">8 (987) 654-23-10</a>
        </div>
      </div>
      <div class="header__inner">
        <div class="container header__inner-container">
          <div class="burger">
            <img src="@/assets/images/burger.svg" alt="" />
          </div>
          <div class="header__inner-left">
            <router-link to="/" class="header__logo">
              <img :src="sessionStore.mainSettings.logo" alt="" />
            </router-link>
            <div class="header__slogan">
              {{sessionStore.mainSettings.shopName}}
            </div>
          </div>
          <div class="header__inner-right">
            <form @submit.prevent="$router.push('/search/'+searchString)" class="header__search">
              <input
                class="header__search-input"
                type="search"
                placeholder="Например, кожаный бомбер"
                v-model="searchString" ref="searchStringInput"
                @focus="focusIt"
                @keydown="keydown"
              />
              <button @click="$router.push('/search/'+searchString)">
                <img src="@/assets/images/search.svg" alt="" />
              </button>
              <!-- Результат поиска(скрыт) -->
              <div class="search-results" v-if="variants && variants.length>0" v-click-outside="blurIt" ref="searchResultsScroller">
                <router-link v-for="product of variants" :key="product.id" :to="'/product/'+product.id" class="search-result">
                  <div class="search-result__top">
                    <img
                      src="@/assets/images/category-sm.svg"
                      alt=""
                      class="header-result__icon"
                    />
                    <p class="search-result__category">{{ product.category }}</p>
                  </div>
                  <div class="search-result__bottom">
                    <p class="search-result__name">{{ product.product }}</p>
                    <img
                      src="@/assets/images/Arrow-left.svg"
                      alt=""
                      class="search-result__arrow"
                    />
                    <p class="search-result__category--sm"> {{ product.category }}</p>
                  </div>
                </router-link>
              </div>
            </form>
            <div class="header__actions">
              <div class="header__actions-item">
                <div class="header__actions-icon">
                  <v-icon v-if="sessionStore.favorites.length"
                          color="#EB681E" icon="mdi-heart"
                          @click="$router.push('/favorites')"
                  >
                  </v-icon>
                  <v-icon v-else color="#e3e3e3" icon="mdi-heart"></v-icon>
                </div>
                <p class="header__actions-text">Избранное</p>
              </div>
              <router-link to="/cart" class="header__actions-item">
                <div class="header__actions-icon">
                  <v-icon color="#EB681E" icon="mdi-cart"></v-icon>
                </div>
                <p class="header__actions-text">Корзина</p>
              </router-link>
              <a class="header__actions-item" @click="showAuth = true">
                <div class="header__actions-icon">
                  <v-icon color="#EB681E" icon="mdi-account"></v-icon>
                </div>
                <p class="header__actions-text">Войти</p>
              </a>
            </div>
          </div>
          <div class="seacrh-trigger">
            <img src="@/assets/images/search.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="header__bottom">
        <div class="container">
          <div class="header__catalog">
            <div class="header__catalog-link header__catalog-main"
                @click.prevent="showCatalog = !showCatalog"
            ><img src="@/assets/images/burger-sm.svg" alt="" />
              Весь каталог
            </div>
            <router-link :to="`/category/${category.id}`" class="header__catalog-link"
                         v-for="category in parentsCatIds" :key="category.id">
              {{ category.name }}
            </router-link>
            <router-link to="/" class="header__catalog-link-st">SALE</router-link>
          </div>
        </div>
        <!-- Полный каталог(Скрытый) Desktop -->
        <div class="window__catalog" :class="{'active': showCatalog}" v-click-outside="closeIt">
          <div class="window__catalog-tabs">
            <div @click="forWho='f'" class="window__catalog-tab" :class="{'active': forWho==='f'}">ДЛЯ НЕЕ</div>
            <div @click="forWho='m'" class="window__catalog-tab" :class="{'active': forWho==='m'}">ДЛЯ НЕГО</div>
          </div>
          <div class="window__catalog-body">
            <ul class="window__catalog-list">
              <li>
                <a class="window__catalog-link window__catalog-title"
                  >Популярные бренды</a
                >
              </li>
              <li v-for="brand of shopStore.brands" :key="brand.attributeValueId">
                <a class="window__catalog-link">{{ brand.value }}</a>
              </li>
            </ul>
            <ul class="window__catalog-list" v-for="pcat of parentsCatIds" :key="pcat.id">
              <li @click="showCatalog=false">
                <router-link
                  :to="`/category/${pcat.id}`"
                  class="window__catalog-link window__catalog-title">{{ pcat.name }}</router-link>
              </li>
              <li v-for="cat of pcat.cats" :key="cat.id">
                <router-link
                  :to="`/category/${cat.id}`"
                  @click="showCatalog=false"
                  class="window__catalog-link">{{ cat.name }}</router-link>
              </li>
            </ul>
            <div class="window__catalog-img">
              <img src="@/assets/images/clear.svg" alt="" />
            </div>
          </div>
          <div class="window__catalog-body active">
            <ul class="window__catalog-list">
              <li>
                <a class="window__catalog-link window__catalog-title"
                  >Популярные бренды</a
                >
              </li>
              <li v-for="brand of shopStore.brands" :key="brand.attributeValueId">
                <a class="window__catalog-link">{{ brand.value }}</a>
              </li>
            </ul>
            <ul class="window__catalog-list" v-for="pcat of parentsCatIds" :key="pcat.id">
              <li>
                <router-link
                  :to="`/category/${pcat.id}`" @click="showCatalog=false"
                  class="window__catalog-link window__catalog-title">{{ pcat.name }}
                </router-link>
              </li>
              <li v-for="cat of pcat.cats" :key="cat.id">
                <router-link
                  :to="`/category/${cat.id}`"
                  class="window__catalog-link"
                  @click="showCatalog=false"
                >{{ cat.name }}
                </router-link>
              </li>
            </ul>
            <div class="window__catalog-img">
              <img src="@/assets/images/clear.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="mobile">
        <div class="mobile__top">
          <div class="mobile__catalog-tabs">
            <div class="mobile__catalog-tab" :class="{'active': forWho==='f'}" @click="forWho='f'">ДЛЯ НЕЕ</div>
            <div class="mobile__catalog-tab" :class="{'active': forWho==='m'}" @click="forWho='m'">ДЛЯ НЕГО</div>
          </div>
          <div class="mobile__catalog-body active">
            <ul class="mobile__catalog-list active">
              <li>
                <a class="mobile__catalog-title">Популярные бренды</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Loius Vuitton</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Chanel</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Dior</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Furia</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Dolce & Gabanna</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Gucci</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Michael Kors</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Fendi</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Marc Jacobs</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Valentino</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Guess</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Hermes</a>
              </li>
            </ul>
            <ul class="mobile__catalog-list">
              <li>
                <a class="mobile__catalog-title">Одежда</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Брюки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Джинсы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Кардиганы и кофты</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Костюмы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Нижнее белье</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Пиджаки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Плавки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Рубашки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Футболки и поло</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Шорты, бермуды</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Спортивная одежда</a>
              </li>
            </ul>
            <ul class="mobile__catalog-list">
              <li>
                <a class="mobile__catalog-title">Обувь</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Ботинки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Мокасины</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Пантолеты</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Сандали</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Сапоги</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Слипоны</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Спортивная обувь</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Туфли</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Угги</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Шлепанцы</a>
              </li>
            </ul>
            <ul class="mobile__catalog-list">
              <li>
                <a class="mobile__catalog-title">Верхняя одежда</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Дубленки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Куртки, пуховики</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Парки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Плащи, пальто</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Жилеты</a>
              </li>
            </ul>
            <ul class="mobile__catalog-list">
              <li>
                <a class="mobile__catalog-title">Аксессуары</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Галстуки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Головные уборы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Запонки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Зонты</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Кошельки. портмоне</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Оправы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Перчатки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Платки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Прочее</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Ремни</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Солнцезащитные очки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Часы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Чехлы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Шарфы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Экзотическая кожа</a>
              </li>
            </ul>
          </div>
          <div class="mobile__catalog-body">
            <ul class="mobile__catalog-list">
              <li>
                <a class="mobile__catalog-title">Популярные бренды</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Loius Vuitton</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Chanel</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Dior</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Furia</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Dolce & Gabanna</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Gucci</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Michael Kors</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Fendi</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Marc Jacobs</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Valentino</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Guess</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Hermes</a>
              </li>
            </ul>
            <ul class="mobile__catalog-list">
              <li>
                <a class="mobile__catalog-title">Одежда</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Блузки и рубашки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Брюки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Вечерние платья</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Джемперы и свитшоты</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Джинсы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Кардиганы и кофты</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Комбинезоны</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Костюмы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Купальники</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Леггинсы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Нижнее белье</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Пиджаки и жакеты</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Платья</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Топы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Туники</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Футболки и поло</a>
              </li>
            </ul>
            <ul class="mobile__catalog-list">
              <li>
                <a class="mobile__catalog-title">Обувь</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Балетки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Босоножки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Ботильоны</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Ботинки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Домашняя обувь</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Лоферы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Мокасины</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Пантолеты</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Сабо</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Сандали</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Сапоги</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Слипоны</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Со шнуровкой</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Спортивная обувь</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Туфли</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Угги</a>
              </li>
            </ul>
            <ul class="mobile__catalog-list">
              <li>
                <a class="mobile__catalog-title">Верхняя одежда</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Бомбер</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Ветровки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Жилеты</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Куртки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Пальто</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Парки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Плащи, тренчкоты</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Пончо, накидки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Пуховики</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Шубы, дубленки</a>
              </li>
            </ul>
            <ul class="mobile__catalog-list">
              <li>
                <a class="mobile__catalog-title">Аксессуары</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Аксессуары для волос</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Аксессуары для сумок</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Браслеты</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Броши</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Головные уборы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Зонты</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Кошельки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Носки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Оправы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Палантины</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mobile__bottom">
          <nav class="mobile-links">
            <a href="#" class="mobile-link">О компании</a>
            <a href="#" class="mobile-link">Аренда одежды</a>
            <a href="#" class="mobile-link">Как это работает</a>
            <a href="#" class="mobile-link">Как сдать одежду</a>
            <a href="#" class="mobile-link">Доставка и оплата</a>
          </nav>
          <div class="mobile__footer">
            <a href="#" class="mobile-city"
              ><svg
                width="15"
                height="18"
                viewBox="0 0 15 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.04006 0C3.15839 0 7.16712e-05 3.15832 7.16712e-05 7.03559C-0.0254483 12.7072 6.77254 17.4099 7.04006 17.6C7.04006 17.6 14.1056 12.7072 14.0801 7.03999C14.0801 3.15832 10.9217 0 7.04006 0ZM7.04006 10.56C5.09526 10.56 3.52007 8.98479 3.52007 7.03999C3.52007 5.09519 5.09526 3.52 7.04006 3.52C8.98486 3.52 10.5601 5.09519 10.5601 7.03999C10.5601 8.98479 8.98486 10.56 7.04006 10.56Z"
                  fill="black"
                />
              </svg>

              <p>Уфа</p></a
            >
            <a href="tel:89876542310" class="mobile__phone"
              >8 (987) 654-23-10</a
            >
          </div>
        </div>
      </div>
      <!-- Модальное окно Входа/Регистрации -->
      <Auth v-if="showAuth" @toggleModal="toggleModal" />
    <CitySelector v-if="showCity" @closeCity="showCity= false"/>
  </header>
</template>

<script>
import API from '../api.js'
import {useShopStore} from "@/store/shop";
import {useSessionStore} from "@/store/session";

import Auth from './Auth.vue'
import CitySelector from "./CitySelector.vue";

export default {
  components: {CitySelector, Auth },
  name: 'TheHeader',
  data() {
    return {
      showAuth: false, showCity:false,
      // search: false,
      searchString: '',
      showCatalog: false,
      categories: [],
      variants:[],
      activeSearchVariantIdx:null,
      keyPressedTime:null,
      searchResultsVisible:false,
      forWho:'f', a:false,

    }
  },
  computed:{
    shopStore(){return useShopStore()},
    sessionStore(){return useSessionStore()},
    parentsCatIds(){
      let result = []
      for (let cat of useShopStore().categoriesTree){
        if (cat.parent===0 && (cat.sex==="" || cat.sex===this.forWho)) result.push(cat)
      }
      for (let pcat of result){
        pcat.cats=[]
        for (let cat of useShopStore().categoriesTree)
          if (cat.parent === pcat.id  && (cat.sex==="" || cat.sex===this.forWho)) pcat.cats.push(cat)
      }
      return result
    },

  },
  methods: {
    toggleModal(value) {this.showAuth = value},

    focusIt(){
      if (this.searchString && this.searchString.length) {
        this.keydown();
        this.$refs.searchStringInput.select();
        setTimeout(() => this.$refs.searchStringInput.setSelectionRange(0, 9999), 300);
      }
    },
    keydown(e){
      let t = (new Date()).getTime();
      switch (true) {
        case e && e.keyCode === 38: // up
          if (this.activeSearchVariantIdx === null) {
            this.activeSearchVariantIdx = this.variants.length - 1;
            this.scrollToVariant();
          }
          else {
            if (this.activeSearchVariantIdx > 0) {
              --this.activeSearchVariantIdx;
              this.scrollToVariant();
            }
          }
          break;
        case e && e.keyCode === 40: // down
          if (this.activeSearchVariantIdx === null) {
            this.activeSearchVariantIdx = 0;
            this.scrollToVariant();
          }
          else {
            if (this.activeSearchVariantIdx < this.variants.length - 1) {
              ++this.activeSearchVariantIdx
              this.scrollToVariant();
            }
          }
          break;
        case e && e.keyCode === 13: // Enter
          if (this.activeSearchVariantIdx !== null) {
           this.searchString = this.variants[this.activeSearchVariantIdx].product;
          }
          break;
        case e && e.keyCode === 27: // Esc
          this.$refs.searchStringInput.blurIt();
          break;
        default:
          this.keyPressedTime = t;
          setTimeout(() => this.getVariants(t), 300);
      }
    },
    blurIt(){
      this.keyPressedTime = (new Date()).getTime();
      this.searchResultsVisible = false;
      this.activeSearchVariantIdx = null;
      this.variants = [];
    },
    search(){},
    scrollToVariant(){
      try {
        this.$refs.searchResultsScroller.children[this.activeSearchVariantIdx].scrollIntoView({
          block: 'center',
          behavior: 'smooth'
        });
      } catch (e) {console.log(e)}
    },
    getVariants(callTime) {
      if (this.keyPressedTime<= callTime) {
        if (this.searchString.length>3) {
          this.activeSearchVariantIdx = null;
          API.searchProductsVariants(this.searchString).then(response => {
            if (this.keyPressedTime <= callTime) {
              if (response.data.success) {
                if (response.data.products && response.data.products.length) {
                  this.variants = response.data.products;
                  this.searchResultsVisible = true;
                } else {this.variants = [];}
              }
            }
          }).catch(error => {console.log(error);})
        }
        else {
          this.variants = [];
          this.searchResultsVisible = false;
        }
      }
    },

    closeIt() {
      if (!this.a) this.a = this.showCatalog
      else {
        this.a = false
        this.showCatalog = false
      }
    }
  },
  created() {
    API.init();
    API.tryAuth();
    API.getAllCategories()
    API.getSettings()
    API.getAllAttributes()
  }
}
</script>

<style>
.router-link-active::after  {
    width: 100%;
}
</style>
