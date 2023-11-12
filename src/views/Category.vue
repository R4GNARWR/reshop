<template>
  <section class="category">
    <div class="container" >
      <div class="category__top">
        <div class="category__top-left">
          <div class="breadcrumb">
            <a href="#">Главная</a>
            <a href="#">Категория</a>
          </div>
          <h1 class="category__title">
            {{ title }}
            <span class="category__title-amount" v-if="products.length">{{products.length}} штук</span>
            <span class="category__title-amount" v-else>Пока таких товаров нет</span>
          </h1>
        </div>
        <p class="category__slogan">
          Все вещи тщательно отбираются и проходят термическую обработку.
          Однако, они не являются новыми и могут иметь незначительные
          дефекты
        </p>
        <!--        {{filterData}}-->
      </div>
      <div class="category__container">
        <aside class="filter" :class="{'active': showFilter}">
          <div class="close_window btn" @click="showFilter = !showFilter">Закрыть</div>
          <form class="filter__form">
            <div class="filter__form-field">
              <div class="filter__form-top">
                <div class="filter__form-title">
                  <p>Цена, &#8381;</p>
                </div>
                <a class="filter__form-collapse"></a>
              </div>
              <div class="filter__form-range">
                <label>
                  <span>От</span>
                  <input
                  class="filter__form-range--first"
                  type="text"
                  placeholder="5460"
                  v-model="minPrice"
                  @change="filteringProducts"
                  />
                </label>
                <label>
                  <span>До</span>
                  <input type="text" placeholder="9000"
                  v-model="maxPrice"
                  @change="filteringProducts"
                  />
                </label>
              </div>
            </div>
            
            <div v-for="(value, key) of filterData" :key="key">
              <div class="filter__form-field" v-if="key !='color'">
                <div class="filter__form-top">
                  <div class="filter__form-title">
                    <p>{{ key }}</p>
                  </div>
                </div>
                <fieldset class="filter__form-fieldset">
                  <div class="filter__form-check" v-for="(arr,k) of value" :key="k" >
                    
                    <input
                    type="checkbox"
                    class="filter__form-checkbox"
                    @click="filterClick(key+':'+k, $event)"
                    :checked="actualFilters.includes(key+':'+k)"
                    />
                    <label >{{ k }}</label>
                    
                  </div>
                  
                </fieldset>
                <!--                <a class="filter__form-link filter__form-link&#45;&#45;desc">Очистить фильтр</a>-->
              </div>
            </div>
            
            
            <div class="filter__form-field" v-if="Object.keys(filterData).find(el=>el==='color')">
              <div class="filter__form-top">
                <div class="filter__form-title"><p>Цвет</p></div>
              </div>
              <fieldset class="filter__form-colorset">
                <div class="filter__form-color" v-for="color of Object.keys(filterData.color)"
                @click="filterClick('color:'+color)"
                >
                <input
                type="checkbox"
                class="filter__form-color-checkbox white"
                v-if="colors.colors.find(el=>el.colorId===parseInt(color))" :style="'background-color:'+colors.colors.find(el=>el.colorId===parseInt(color)).color_code"
                />
                <label v-if="colors.colors.find(el=>el.colorId===parseInt(color))" :style="'background-color:'+colors.colors.find(el=>el.colorId===parseInt(color)).color_code"></label>
              </div>
            </fieldset>
            <!--                  <a class="filter__form-link">Очистить фильтр</a>-->
          </div>
          <button class="filter__form-btn btn" @click.prevent="showFilter = !showFilter" v-bind:style="{ top: buttonY + 'px', left: buttonX + 'px' }">
            Показать {{products.length}} товаров
          </button>
        </form>
      </aside>
      
      
      <div class="category__products" ref="cardsDiv">
        <div class="category__sort">
          <p class="category__sort-text">Сортировать по:</p>
          <a href="#" class="category__sort-link" @click="sortPrice">Цене</a>
          <a href="#" class="category__sort-link" @click="sortDiscount">Скидке</a>
          <!--                <a class="category__sort-link" @click="products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));">Дате</a>-->
        </div>
        <div class="mob__sort">
          <div class="mob__sort-filter" @click.stop="showFilter = !showFilter">
            <p>Фильтры</p>
            <img src="@/assets/images/fillter.svg" alt="" />
          </div>
          <a href="#" class="category__sort-link--mob" @click="sortPrice">Цене</a>
        </div>
        <div class="category__selected" v-if="actualFilters">
          <a class="category__selected-item"
          v-for="(v,index) of actualFilters" :key="index"
          ><span>{{v.substr(v.lastIndexOf(':')+1)}}</span
            ><img src="@/assets/images/white-close.svg" alt=""
            @click="actualFilters.splice(index,1); filteringProducts()"
            /></a>
            
          </div>
          <p class="category__products-text" v-if="beforeProducts">{{beforeProducts}}</p>
          <div class="category__products-cards cards" v-if="products && products.length > 0" >
            <CardCategory v-for="product of showedProducts" :cardData="product.id" :key="product.id"/>
          </div>
          <div style="
          min-height: 200px;
          margin-top: 100px;
          display: flex;
          align-items: center;
          justify-content: center;" v-else>
          <h1 class="subscribe__title" style="text-transform: uppercase;">Товары не найдены</h1>
        </div>
        <p class="category__products-text" v-if="afterProducts">{{afterProducts}}
        </p>
      </div>
    </div>
  </div>
</section>
<!-- Карточка товара -->
<div class="minicard">
  <div class="minicard__window">
    <div class="minicard__images">
      <div class="minicard__top-slider">
        <div class="minicard__top-wrapper">
          <div class="minicard__top-img active">
            <img src="@/assets/images/slide-img.svg" alt="" />
          </div>
          <div class="minicard__top-img">
            <img src="@/assets/images/slide-img.svg" alt="" />
          </div>
          <div class="minicard__top-img">
            <img src="@/assets/images/slide-img.svg" alt="" />
          </div>
          <div class="minicard__top-img">
            <img src="@/assets/images/slide-img.svg" alt="" />
          </div>
          <div class="minicard__top-img">
            <img src="@/assets/images/slide-img.svg" alt="" />
          </div>
          <div class="minicard__top-img">
            <img src="@/assets/images/slide-img.svg" alt="" />
          </div>
          <div class="minicard__top-img">
            <img src="@/assets/images/slide-img.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="minicard__bottom-slider">
        <div class="minicard__bottom-wrapper">
          <div class="minicard__bottom-img">
            <img src="" alt="" />
          </div>
          <div class="minicard__bottom-img">
            <img src="" alt="" />
          </div>
          <div class="minicard__bottom-img">
            <img src="" alt="" />
          </div>
          <div class="minicard__bottom-img">
            <img src="" alt="" />
          </div>
          <div class="minicard__bottom-img">
            <img src="@/assets/images/play.svg" alt="" />
          </div>
          <div class="minicard__bottom-img">
            <img src="" alt="" />
          </div>
          <div class="minicard__bottom-img">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="minicard__info">
      <div class="minicard__info-viewers">
        Этот товар сейчас смотрят: 14 человек
      </div>
      <h1 class="minicard__info-title">Свитер Forever21</h1>
      <div class="minicard__info-light">Forever21</div>
      <div class="minicard__info-light">Артикул: Р7142</div>
      <div class="minicard__sizes">
        <div class="minicard__sizes-text">Размер:</div>
        <div class="minicard__sizes-items">
          <div class="minicard__sizes-item">S</div>
        </div>
      </div>
      <p class="minicard__info-text">Материал: 100% акрил.</p>
      <p class="minicard__info-text">
        Свитер светло-кофейного цвета, с V-образным вырезом и крупной
        вязкой. Свободного кроя.
      </p>
      <div class="minicard__actions">
        <div class="minicard__prices">
          <div class="minicard__newprice">1400 р.</div>
          <div class="minicard__oldprice">1800 р.</div>
        </div>
        <a href="#" class="minicard__actions-like">
          <img src="@/assets/images/like.svg" alt="" />
        </a>
        <a href="#" class="minicard__actions-whatsapp">
          <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
          d="M35.28 18C35.28 27.5435 27.5435 35.28 18 35.28C8.45652 35.28 0.72 27.5435 0.72 18C0.72 8.45652 8.45652 0.72 18 0.72C27.5435 0.72 35.28 8.45652 35.28 18Z"
          stroke="#010101"
          stroke-width="1.44"
          />
          <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.043 27.7326C16.3268 27.7326 14.7144 27.2939 13.3116 26.5241L7.89258 28.2461L9.65912 23.0351C8.7681 21.5713 8.25479 19.8549 8.25479 18.0201C8.25479 12.656 12.637 8.30762 18.0432 8.30762C23.4488 8.30762 27.831 12.656 27.831 18.0201C27.831 23.3842 23.449 27.7326 18.043 27.7326ZM18.043 9.8544C13.505 9.8544 9.81376 13.5175 9.81376 18.0201C9.81376 19.8068 10.3962 21.4615 11.3811 22.8078L10.3532 25.8402L13.5154 24.8351C14.815 25.6882 16.3715 26.1858 18.043 26.1858C22.5803 26.1858 26.2723 22.5229 26.2723 18.0203C26.2723 13.5178 22.5803 9.8544 18.043 9.8544ZM22.9855 20.257C22.9253 20.1579 22.7653 20.0981 22.5258 19.9792C22.2857 19.8602 21.1058 19.284 20.8862 19.2049C20.666 19.1256 20.5058 19.0855 20.3461 19.3238C20.1864 19.5622 19.7265 20.0981 19.5862 20.257C19.4462 20.416 19.3064 20.436 19.0665 20.3168C18.8268 20.1978 18.0536 19.9464 17.1369 19.1353C16.4238 18.5044 15.9422 17.7254 15.8024 17.4868C15.6624 17.2487 15.7875 17.12 15.9076 17.0015C16.0155 16.8947 16.1475 16.7234 16.2676 16.5845C16.3877 16.4454 16.4276 16.3464 16.5073 16.1873C16.5875 16.0285 16.5474 15.8896 16.4874 15.7701C16.4273 15.6512 15.9473 14.4797 15.7474 14.0029C15.5476 13.5266 15.348 13.6059 15.2078 13.6059C15.0678 13.6059 14.9078 13.586 14.7479 13.586C14.5879 13.586 14.3278 13.6456 14.1078 13.8837C13.8881 14.1221 13.2684 14.6981 13.2684 15.8694C13.2684 17.0409 14.1278 18.1727 14.2481 18.3313C14.3679 18.49 15.9074 20.9721 18.3463 21.9254C20.7861 22.8784 20.7861 22.5605 21.2261 22.5209C21.6654 22.4812 22.645 21.9451 22.8455 21.3892C23.0451 20.833 23.0451 20.3562 22.9855 20.257Z"
          fill="black"
          />
        </svg>
        <p>Задать вопрос в Whats’app</p>
      </a>
    </div>
    <div class="minicard__info-buttons">
      <a href="#" class="minicard__info-btn">В корзину</a>
      <a href="#" class="minicard__info-btn light">Купить сейчас</a>
    </div>
    <p class="minicard__info-light">
      *Согласно правилам комиссионного магазина одежда, обувь и аксессуары
      обмену и возврату не подлежат
    </p>
  </div>
</div>
</div>

<!--  search loader -->
<v-dialog
v-model="loader"
:scrim="false"
persistent
width="200px"
>
<v-card rounded="10">
  <v-card-text>
    Поиск по каталогу
    <v-progress-linear indeterminate
    color="#eb681e" class="mb-0"
    ></v-progress-linear>
  </v-card-text>
</v-card>
</v-dialog>
</template>

<script>
import API from '../api.js'
import CardCategory from "@/components/CardCategory";
import PhotoChange from "@/components/PhotoChange";

import TheHeart from "@/components/TheHeart";
import {useSessionStore} from "@/store/session";



export default {
  cache: true,
  components: {CardCategory,TheHeart, PhotoChange},
  data(){return{
    showFilter: false, 
    products:[], allProducts:[], showedProducts:[],
    title:"", afterProducts:"", beforeProducts:"",
    filterData:[],colors:[], actualFilters:[], minPrice:null,maxPrice:null,
    currentProductsValue: 0, nextProductsValue: 25, maxValueOfProducts: 0,
    loader:false,
    sortP:false, sortD:false,
    buttonX: 0, buttonY: 120,
    cardsNodeY: 0,
  }},
  computed:{
    sessionStore(){return useSessionStore()},
    // title(){
      //   if (this.$route.params.categoryId && useShopStore().categoriesTree && useShopStore().categoriesTree.find(el=>el.id === cat)){
        //     return useShopStore().categoriesTree.find(el=>el.id === this.$route.params.categoryId).name
        //   }
        // }
      },
      methods:{
        start() {
          this.products = [];
          let query, attr, cat;
          if (this.$route.params.categoryId) {
            cat = this.$route.params.categoryId;
          }
          if (this.$route.params.query) {
            query = this.$route.params.query;
            this.title = this.$route.params.query;
          }
          
          let key = { query: query, attr: attr, category_id: cat };
          if (useSessionStore().searchResult[JSON.stringify(key)]) {
            let value = useSessionStore().searchResult[JSON.stringify(key)];
            if (value.data.total > 0) {
              this.total = value.data.total;
              this.allProducts = value.data.products;
              this.products = value.data.products;
              if (value.data.category) {
                this.title = value.data.category.name;
                this.afterProducts = value.data.category.afterProducts;
                this.beforeProducts = value.data.category.beforeProducts;
              }
              if (value.data.filters) this.filterData = value.data.filters;
              if (value.data.colors) this.colors = value.data.colors;
            }
            this.maxValueOfProducts = this.products.length;
            this.showedProducts = this.products.slice(this.currentProductsValue, this.nextProductsValue);
          } else {
            this.loader = true;
            // to-do: Заменить searchProducts на searchTwentyFive
            API.searchProducts(query, attr, cat)
            .then(value => {
              this.loader = false;
              if (value.data.total > 0) {
                this.total = value.data.total;
                this.allProducts = value.data.products;
                this.products = value.data.products;
                if (value.data.category) {
                  this.title = value.data.category.name;
                  this.afterProducts = value.data.category.afterProducts;
                  this.beforeProducts = value.data.category.beforeProducts;
                }
                if (value.data.filters) this.filterData = value.data.filters;
                if (value.data.colors) this.colors = value.data.colors;
                this.maxValueOfProducts = this.products.length;
                this.showedProducts = this.products.slice(this.currentProductsValue, this.nextProductsValue);
              }
            })
            .catch(error => {
              this.loader = false;

            });
          }
        },
        sortPrice() {
          this.currentProductsValue = 0;
          this.nextProductsValue = 25;
          this.sortP = !this.sortP;
          this.products.sort((a, b) => {
            if (this.sortP) {
              return parseFloat(a.price) - parseFloat(b.price);
            } else {
              return parseFloat(b.price) - parseFloat(a.price);
            }
          });
          this.showedProducts = this.products.slice(this.currentProductsValue, this.nextProductsValue);
        },
        sortDiscount() {
          this.currentProductsValue = 0;
          this.nextProductsValue = 25;
          this.sortD = !this.sortD;
          this.products.sort((a, b) => {
            if (this.sortD) {
              return (a.oldPrice - a.price) - (b.oldPrice - b.price);
            } else {
              return (b.oldPrice - b.price) - (a.oldPrice - a.price);
            }
          });
          this.showedProducts = this.products.slice(this.currentProductsValue, this.nextProductsValue);
        },
        filteringProducts() {
          if (this.actualFilters.length > 0) {
            const filterData = this.filterData;
            const placeFilters = this.actualFilters.filter(filter => filter.startsWith('Где померить'));
            const seasonFilters = this.actualFilters.filter(filter => filter.startsWith('Сезон'));
            const sizeFilters = this.actualFilters.filter(filter => filter.startsWith('Размер одежды'));
            const shoeSizeFilters = this.actualFilters.filter(filter => filter.startsWith('Размер обуви'));
            const brandFilters = this.actualFilters.filter(filter => filter.startsWith('Бренд'));
            const colorFilters = this.actualFilters.filter(filter => filter.startsWith('color'));
            
            let placeIds = []
            let seasonIds = [];
            let sizeIds = [];
            let shoeSizeIds = []
            let brandIds = [];
            let colorIds = [];

            for (let filter of placeFilters) {
              let value = filter.split(':')[1];
              let tmp = filterData['Где померить'][value];
              placeIds = [...placeIds, ...tmp];
            }
            
            for (let filter of seasonFilters) {
              let value = filter.split(':')[1];
              let tmp = filterData['Сезон'][value];
              seasonIds = [...seasonIds, ...tmp];
            }
            
            for (let filter of sizeFilters) {
              let value = filter.split(':')[1];
              let tmp = filterData['Размер одежды'][value];
              sizeIds = [...sizeIds, ...tmp];
            }

            for (let filter of shoeSizeFilters) {
              let value = filter.split(':')[1];
              let tmp = filterData['Размер обуви'][value];
              shoeSizeIds = [...shoeSizeIds, ...tmp];
            }
            
            for (let filter of brandFilters) {
              let value = filter.split(':')[1];
              let tmp = filterData['Бренд'][value];
              brandIds = [...brandIds, ...tmp];
            }
            
            for (let filter of colorFilters) {
              let value = filter.split(':')[1];
              let tmp = filterData['color'][value];
              colorIds = [...colorIds, ...tmp];
            }
            this.products = this.allProducts.filter(el =>
            (!this.minPrice || el.price >= this.minPrice) &&
            (!this.maxPrice || el.price <= this.maxPrice) &&
            (placeIds.length === 0 || placeIds.includes(el.id)) &&
            (sizeIds.length === 0 || sizeIds.includes(el.id)) &&
            (shoeSizeIds.length === 0 || shoeSizeIds.includes(el.id)) &&
            (seasonIds.length === 0 || seasonIds.includes(el.id)) &&
            (brandIds.length === 0 || brandIds.includes(el.id)) &&
            (colorIds.length === 0 || colorIds.includes(el.id))
            );
          } else {
            this.products = this.allProducts
          }
          this.showedProducts = this.products.slice(this.currentProductsValue, this.nextProductsValue);
        },
        
        filterClick(filter, filterNode){
          if(filterNode && window.innerWidth > 992)
          {
            this.buttonY = filterNode.pageY - 15
            this.buttonX = filterNode.pageX + filterNode.srcElement.parentNode.offsetWidth * 0.7
          }
          const filterIndex = this.actualFilters.findIndex(el => el === filter);
          if (filterIndex > -1) {
            this.actualFilters.splice(filterIndex, 1);
          } else {
            this.actualFilters.push(filter);
          }
          this.filteringProducts()
        },
        changePage(value) {
          const endValue = this.nextProductsValue + value;
          if (endValue <= this.maxValueOfProducts  && endValue >= 0 && endValue >= 25) {
            this.nextProductsValue += value;
          } else if (endValue > this.maxValueOfProducts) {
            this.nextProductsValue = this.maxValueOfProducts;
          } else if(endValue < 25){
            this.nextProductsValue = 25;
          }
          this.showedProducts = this.products.slice(this.currentProductsValue, this.nextProductsValue);
        },
        
        triggerScroll() {
          if(this.$refs.cardsDiv && window.scrollY + this.$refs.cardsDiv.offsetTop > this.$refs.cardsDiv.offsetHeight -50 ) {
            this.changePage(25)
          }
        }
      },
      watch: {
        '$route'(newRoute, oldRoute) {
          if (oldRoute && newRoute !== oldRoute.params) {
            this.actualFilters = []
            window.scroll(0, 0);
            this.start()
          }
        }
      },
      created() {
        window.addEventListener("scroll", this.triggerScroll);
      },
      
      beforeMount() {
        this.start()
      },
      
      destroyed() {
        window.removeEventListener("scroll", this.triggerScroll);
      },
      
    }
  </script>
  
  <style>
  .category{
    min-height: calc(100vh - 400px);
  }
</style>





