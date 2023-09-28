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
          <a :href="'tel:'+headerStore.MainPhone" class="header__top-phone">{{ headerStore.MainPhone }}</a>
        </div>
      </div>
      <div class="header__inner">
        <div class="container header__inner-container">
          <div class="burger" @click.prevent="showMobileCatalog = !showMobileCatalog">
            <img src="@/assets/images/burger.svg" alt="" />
          </div>
          <div class="header__inner-left">
            <router-link to="/" class="header__logo">
              <img :src="headerStore.Logo" alt="" />
            </router-link>
            <div class="header__slogan">
              {{headerStore.shopName}}
            </div>
          </div>
          <div class="header__inner-right">
            <SearchBar></SearchBar>
            <div class="header__actions">
              <div class="header__actions-item">
                <div class="header__actions-icon">
                  <v-icon v-if="headerStore.favorites.length"
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
              <a class="header__actions-item" @click="sessionStore.user_info.id?$router.push('/Cabinet'):showAuth = true">
                <div class="header__actions-icon">
                  <v-icon color="#EB681E" icon="mdi-account"></v-icon>
                </div>
                <p class="header__actions-text">{{sessionStore.user_info.id?"В кабинет":"Войти"}}</p>
              </a>
            </div>
          </div>
          <div class="seacrh-trigger" @click="searchModalShow = !searchModalShow">
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
        <div class="window__catalog" :class="{'active': showCatalog}" >
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
<!--              <li v-for="brand of shopStore.brands" :key="brand.attributeValueId">-->
<!--                <a class="window__catalog-link">{{ brand.value }}</a>-->
<!--              </li>-->
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
                <router-link :to="`/search/asos%20boss%20h&m`" class="window__catalog-link window__catalog-title"
                  >Популярные бренды</router-link
                >
              </li>
              <li v-for="brand of sessionStore.popBrands" :key="brand">
                <a class="window__catalog-link" @click="$router.push('/search/'+brand);showCatalog=false">{{ brand }}</a>
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
      <div class="mobile " :class="{'active': showMobileCatalog}">
        <div class="mobile__top">
          <div class="mobile__catalog-tabs">
            <div class="mobile__catalog-tab" :class="{'active': forWho==='f'}" @click="forWho='f'">ДЛЯ НЕЕ</div>
            <div class="mobile__catalog-tab" :class="{'active': forWho==='m'}" @click="forWho='m'">ДЛЯ НЕГО</div>
          </div>
          <div class="mobile__catalog-body active" >
            <!-- <ul class="mobile__catalog-list" @click="e =>  e.target.parentNode.parentNode.classList.toggle('active')">
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
            </ul> -->
            <ul class="mobile__catalog-list" v-for="pcat of parentsCatIds" :key="pcat.id" @click="e =>  e.target.parentNode.parentNode.classList.toggle('active')">
              <li >
                <a
                  class="mobile__catalog-title">{{ pcat.name }}
                </a>
              </li>
              <li v-for="cat of pcat.cats" :key="cat.id">
                <router-link
                  :to="`/category/${cat.id}`"
                  @click="showMobileCatalog=false"
                  class="mobile__catalog-link">{{ cat.name }}</router-link>
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
  <div class="footer__actions">
        <a class="footer__actions-icon" @click="searchModalShow = !searchModalShow">
          <img src="@/assets/images/search.svg" alt="" />
        </a>
        <a class="footer__actions-icon">
          <v-icon v-if="headerStore.favorites.length"
                          color="#868686" icon="mdi-heart-outline"
                          @click="$router.push('/favorites')"
                  >
          </v-icon>
          <v-icon v-else color="#868686" icon="mdi-heart-outline"></v-icon>
        </a>
        <router-link to="/cart" class="footer__actions-icon">
          <v-icon color="#868686" icon="mdi-cart-outline"></v-icon>
        </router-link>
        <a class="footer__actions-icon" @click="sessionStore.user_info.id?$router.push('/Cabinet'):showAuth = true">
          <v-icon color="#868686" icon="mdi-account-outline"></v-icon>
        </a>
    </div>
    <SearchModal :modal-active="searchModalShow"></SearchModal>
</template>

<script>
import API from '../api.js'
import {useShopStore} from "@/store/shop";
import {useSessionStore} from "@/store/session";

import Auth from './Auth.vue'
import CitySelector from "./CitySelector.vue";
import SearchModal from "./UI/SearchModal.vue";
import SearchBar from "./UI/SearchBar.vue";
export default {
  components: {CitySelector, Auth, SearchModal, SearchBar },
  name: 'TheHeader',
  data() {
    return {
      showAuth: false, showCity:false,
      searchModalShow: false,
      showCatalog: false,
      showMobileCatalog: false,
      categories: [],
      forWho:'f',

    }
  },
  computed:{
    sessionStore(){return useSessionStore()},
    headerStore(){
      let sessionStore= useSessionStore()
      return{
        MainPhone: sessionStore.settings.find(el=>el.setting_type==="MainPhone")?
          sessionStore.settings.find(el=>el.setting_type==="MainPhone").setting_json.replace(/["']/g, ""):"",
        Logo: sessionStore.settings.find(el=>el.setting_type==="logo")?
          sessionStore.settings.find(el=>el.setting_type==="logo").setting_json.replace(/["']/g, ""):"",
        shopName: sessionStore.settings.find(el=>el.setting_type==="shopName")?
          sessionStore.settings.find(el=>el.setting_type==="shopName").setting_json.replace(/["']/g, ""):"",
        favorites:sessionStore.favorites
      }
    },

    parentsCatIds(){
      let result = []
      for (let cat of useShopStore().categoriesTree){
        if (cat.parent===0 && (cat.sex==="" || cat.sex===this.forWho)) result.push(cat)
      }
      //todo for (let pcat of result){
      //   pcat.cats=[]
      //   for (let cat of useShopStore().categoriesTree)
      //     if (cat.parent === pcat.id  && (cat.sex==="" || cat.sex===this.forWho)) pcat.cats.push(cat)
      // }
      return result
    },

  },
  methods: {
    toggleModal(value) {this.showAuth = value},
  },

  created() {
    API.init();
    setTimeout(()=>API.tryAuth(),300)
    API.getAllCategories()
    API.getSettings()
  }
}
</script>

<style>
.router-link-active::after  {
    width: 100%;
}
</style>
