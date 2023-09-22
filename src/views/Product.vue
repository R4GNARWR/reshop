<template>
  <section class="product-page">
    <div class="container">
      <div class="product-page__breadcrumb breadcrumb" v-if="category">
        <router-link to="/">Главная</router-link>
        <router-link :to="'/category/'+category.parent">{{ parentCategory(category.parent) }}</router-link>
        <router-link :to="'/category/'+category.id">{{ category.name }}</router-link>
      </div>
      <div class="product-page__wrapper" v-if="product">
        <div class="product-page__images">
          <div class="product-page__top-slider">
            <div class="product-page__top-wrapper" v-if="product.photosPreview.length>0">
              <div class="product-page__top-img">
                <img :src="theImg" alt="" />
              </div>
            </div>
            <div class="product-page__top-wrapper" v-else>
              <div class="product-page__top-img">
                <img src="@/assets/images/product.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="product-page__bottom-slider">
            <div class="product-page__bottom-wrapper">
              <div class="product-page__bottom-img" v-for="(img, index) of product.photosPreview" :key="img">
                <img :src="img" alt="" @click="theImg = product.photosPreview[index]"/>
              </div>
            </div>
          </div>
        </div>
        <div class="product-page__info">
          <div class="product-page__info-viewers">
            Этот товар сейчас смотрят: {{ people }} человек
          </div>
          <h1 class="product-page__info-name">{{ product.name }}</h1>
          <div class="product-page__info-light" v-if="attributes.brand">{{ attributes.brand }}</div>
          <div class="product-page__info-light">Артикул: {{product.article}}</div>
          <div class="product-page__sizes" v-if="attributes.sizes && attributes.sizes.length>0">
            <div class="product-page__sizes-text">Размер:</div>
            <div class="product-page__sizes-items" v-for="s of attributes.sizes" :key="s">
              <div class="product-page__sizes-item">{{ s }}</div>
            </div>
          </div>
          <p class="product-page__info-text">Материал: {{ product.structure }}</p>
          <p class="product-page__info-text">{{product.description}}</p>
          <div class="product-page__actions">
            <div class="product-page__prices">
              <div class="product-page__newprice">{{ product.price }} р.</div>
              <div class="product-page__oldprice" v-if="product.oldPrice">{{ product.oldPrice }} р.</div>
            </div>
                <TheHeart :pId="product.id"/>
                <a :href="'https://wa.me/79876203930?text=Здравствуйте%20у%20меня%20вопрос по товару '+product.name+': '" target="_blank" class="product-page__actions-whatsapp">
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
              <div class="product-page__discount" @click="showDiscount">Предложить свою цену</div>
              <div class="product-page__info-buttons">
                <div class="product-page__info-btn" @click="sessionStore.toCart(product.id)">В корзину</div>
                <div class="product-page__info-btn light" @click="sessionStore.toCart(product.id)">Купить сейчас</div>
              </div>
              <p class="product-page__info-light">
                *Согласно правилам комиссионного магазина одежда, обувь и
                аксессуары обмену и возврату не подлежат
              </p>
            </div>
          </div>
          <div class="product-page__desc">
            <div class="product-page__desc-item active">
              <a class="product-page__desc-tab" >Дополнительная информация</a>
              <div class="product-page__desc-body active">
                <ul class="product-page__desc-list">
                  <div v-for="frontName of Object.keys(attributes)" :key="frontName">
                    <li v-if="!['sizes','brand'].includes(frontName)">
                      <div class="product-page__desc-key">{{ frontName }}</div>
                      <div class="product-page__desc-value">{{ attributes[frontName].join(', ') }}</div>
                    </li>
                  </div>

                </ul>
              </div>
            </div>
            <!-- todo: В приходящей информации о товаре нет информации о том в каком магазине он находится.
              Добавить ифнормацию об этом для вывода инфомации о доставка/самовывозе -->
              
            <!-- <div class="product-page__desc-item">
              <a class="product-page__desc-tab">Доставка, оплата, возврат</a>
              <div class="product-page__desc-body active" v-for="text of deliveries" :key="text">
                <h3>{{text.title}}</h3>
                <p>{{text.description}}</p>
              </div>
              <div class="product-page__desc-body" v-for="text of payments" :key="text">
                <h3>{{text.title}}</h3>
                <p>{{text.description}}</p>
              </div>
            </div> -->
          </div>
          <h1 class="product-page__title" v-if="theLook && theLook.look.length>1">С этим товаром в луке</h1>
          <div class="product-page__cards cards" v-if="look && look.length>1">
            <Card v-for="pId of look" :cardData="pId" :key="pId" />
          </div>
          <h2 v-if="theLook">{{theLook.title}}</h2>
          <div class="product-page__cards cards" v-if="theLook">
            <Card v-for="pId of theLook.look" :cardData="pId" :key="pId" />
          </div>
        </div>
      </section>

<!--  предложить скидку-->
      <div v-if="discount" class="registration">
        <v-card class="registration__window" v-click-outside="closeDiscount">
          <v-card-title>Ваше предложение</v-card-title>
          <div class="registration__form">
            <input
              type="name"
              class="registration__input input"
              placeholder="Ваше имя"
              v-model="formData.name"
              @focus="status=''"
            />
            <input
              type="phone"
              class="registration__input input"
              placeholder="Номер телефона"
              v-model="formData.phone"
              @focus="status=''"
            />
            <input
              type="email"
              class="registration__input input"
              placeholder="E-mail"
              v-model="formData.email"
              @focus="status=''"
            />
            <input
              type="email"
              class="registration__input input"
              placeholder="Ваше предложение"
              v-model="formData.message"
              @focus="status=''"
            />

            <p v-if="statusText.length>0" style="margin-top: 10px; color: #eb681e">{{statusText}}</p>

            <button
              v-if="formData.message && (formData.phone || formData.email)"
              @click="sendMessage" class="btn registration__submit"
            >
              Отправить предложение
            </button>
            <p class="registration__text">
              <svg
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.16669 6.5L5.91669 11.25L13.8334 1.75"
                  stroke="#EB681E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Согласен(-на) с <a href="#">Правилами пользования</a>
            </p>

          </div>
        </v-card>
      </div>
</template>

<script>
import {useShopStore} from "@/store/shop";
import {useSessionStore} from "@/store/session";
import Card from "@/components/Card";
import TheHeart from "@/components/TheHeart";

export default {
  components: {TheHeart, Card },
  computed:{
    sessionStore(){return useSessionStore()},
    deliveries(){
      if (useSessionStore().settings.find(el=>el.setting_type==='deliveries'))
        return JSON.parse(useSessionStore().settings.find(el=>el.setting_type==='deliveries').setting_json)
    },
    payments(){
      if (useSessionStore().settings.find(el=>el.setting_type==='payments'))
        return JSON.parse(useSessionStore().settings.find(el=>el.setting_type==='payments').setting_json)
    },
    statusText(){
      let result ="Пожалуйста заполните поля: ", e=0
        if (!this.formData.name){result+=" Имя"; e++}
        if (!this.formData.phone){
          if (e>0) result+=','
          result+=" Телефон"; e++
        }
        if (!this.formData.email){
          if (e>0) result+=','
          result+=" Email"; e++
        }
        if(e>0) result+='.'
        else result=''

        if (this.status.length>0) result = this.status
        return result
      },
    product(){
      let tmp = useShopStore().products[this.$route.params.pId]
      if (tmp) {
        this.theImg=tmp.photosPreview[0]
        this.people = Math.floor(Math.random() * 9) + 1
            window.scroll(0,0);
            this.attributes={};
            this.look=[];
        this.attributes.sizes=[]
        for (let attr of tmp.attributes){
          if (attr.attributeTitle ==='brand') this.attributes.brand=attr.attributeValueText
          else if (attr.attributeTitle ==='size') this.attributes.sizes.push(attr.attributeValueText)
            // else if (attr.attributeTitle ==='condition') this.attributes.condition=attr.attributeValueText
          // else if (attr.attributeTitle ==='season') this.attributes.seasons.push(attr.attributeValueText)
          else if (this.attributes[attr.frontName])
            this.attributes[attr.frontName].push(attr.attributeValueText)
          else this.attributes[attr.frontName]=[attr.attributeValueText]
        }

        if (useSessionStore().settings.find(el=>el.setting_type==='sets'))
          for (let set of JSON.parse(useSessionStore().settings.find(el=>el.setting_type==='sets').setting_json)){
            if (set.look.includes(tmp.id))this.theLook = set
          }
      }

      return tmp
    },
    category(){
      if(this.product && useShopStore().categoriesTree)
        return useShopStore().categoriesTree.find(el=>el.id === this.product.category_id)
    }

  },
  data(){return{look:[],
    fullPhoto:[], photosPreview:[], attributes:{},
    discount:false,formData:{}, status:"",
    theImg:"", people:2, theLook:null
  }},
  // watch: {
  //   '$route'(newRoute, oldRoute) {if (oldRoute && newRoute !== oldRoute.params.pId) {
  //     window.scroll(0,0);
  //     this.attributes={};
  //     this.look=[];
  //   }},
  // },
  methods:{
    parentCategory(id){
      if (useShopStore().categoriesTree.find(el=>el.id ===id))
        return useShopStore().categoriesTree.find(el=>el.id ===id).name
    },
    showDiscount(){setTimeout(()=>this.discount=true,300)},
    closeDiscount(){setTimeout(()=>this.discount=false,300)},
    sendMessage(){
      this.discount=false
      this.sessionStore.showMsg("Мы получили ваше предложение и свяжемся с вами в ближайшее время")
    },
  },
  created() {useShopStore().getProduct(this.$route.params.pId)}
}
</script>
