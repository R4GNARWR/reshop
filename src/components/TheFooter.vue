<template>
  <footer>
      <div class="container ">
        <div class="footer__inner">
          <div class="footer__left">
            <div class="footer__links">
              <router-link :to="`/category/shoes`" class="footer__link">Обувь</router-link>
              <router-link :to="`/category/${category.id}`" class="footer__link"
                           v-for="category in parentsCatIds" :key="category.id">
                {{ category.name }}
              </router-link>


            </div>
            <div class="footer__links">
              <div class="footer__links-title">Покупателям</div>
              <router-link to="/howItWorks" class="footer__link">Как это работает</router-link>
<!--              <a href="#" class="footer__link">Аренда одежды</a>-->
              <router-link to="/delivery" class="footer__link">Доставка и оплата</router-link>
            </div>
            <div class="footer__links">
              <div class="footer__links-title">Продавцам</div>
              <router-link to="/howItWorks" class="footer__link">Как это работает</router-link>
              <router-link to="/howToDonate" class="footer__link">Как сдать одежду</router-link>

              <router-link to="/about" class="footer__links-title footer__links-title--second">О компании</router-link>
              <div @click="msg('Попросите анкету у продавца в шоурумах')" class="footer__link">Вакансии</div>
            </div>
          </div>


          <div class="footer-mob__links" @click.stop="e =>  e.target.parentNode.classList.toggle('active')">
            <div class="footer-mob__title">Покупателям</div>
            <a href="#" class="footer-mob__link">SALE</a>
            <a href="#" class="footer-mob__link">Сумки</a>
            <a href="#" class="footer-mob__link">Как это работает</a>
            <a href="#" class="footer-mob__link">Аренда одежды</a>
            <a href="#" class="footer-mob__link">Доставка и оплата</a>
          </div>
          <div class="footer-mob__links" @click.stop="e =>  e.target.parentNode.classList.toggle('active')">
            <div class="footer-mob__title">Продавцам</div>
            <router-link to="/howItWorks" class="footer-mob__link">Как это работает</router-link>
            <a href="#" class="footer-mob__link">Как сдать одежду</a>
          </div>
          <div class="footer-mob__links" @click.stop="e =>  e.target.parentNode.classList.toggle('active')">
            <div class="footer-mob__title">О Компании</div>
            <router-link to="/about" class="footer-mob__link">Инфорамация</router-link>
            <div @click="useSessionStore.showMsg('У нас пока нет вакансий')" class="footer-mob__link">Вакансии</div>
          </div>
          <div class="footer__right">
            <div class="footer__top">
              <div class="footer__subtitle">По всем вопросам:</div>
<!--              <a href="tel:8 (987) 654-23-10" class="footer__phone"-->
<!--                >8 (987) 654-23-10</a-->
<!--              >-->
              <a :href="'tel:'+headerStore.MainPhone" class="footer__phone">{{ headerStore.MainPhone }}</a>
              <div class="footer__socials">
                <a class="footer__social-link">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 32C24.8365 32 32 24.8366 32 16C32 7.16344 24.8365 0 16 0C7.16345 0 0 7.16344 0 16C0 24.8366 7.16345 32 16 32ZM24.8231 10.375C25.5188 10.375 25.6639 10.7268 25.5188 11.2045C25.2274 12.5196 22.4265 16.3924 22.4265 16.3924C22.1832 16.7747 22.0862 16.9664 22.4265 17.396C22.5469 17.5612 22.803 17.8076 23.0959 18.0894C23.3973 18.3793 23.7378 18.7067 24.0094 19.0218C24.9955 20.1129 25.7393 21.0325 25.9475 21.666C26.1365 22.303 25.8075 22.625 25.1512 22.625H22.8544C22.2384 22.625 21.9286 22.2864 21.2588 21.5544C20.9751 21.2444 20.627 20.8639 20.1637 20.4086C18.8005 19.118 18.2169 18.95 17.8756 18.95C17.4127 18.95 17.2745 19.0786 17.2745 19.7235V21.7474C17.2745 22.303 17.0942 22.625 15.6339 22.625C13.1987 22.625 10.5256 21.1734 8.62683 18.4959C5.77881 14.575 5 11.6105 5 11.0137C5 10.6786 5.13123 10.375 5.78748 10.375H8.08618C8.67322 10.375 8.8938 10.627 9.11157 11.2526C10.236 14.4674 12.1304 17.277 12.9092 17.277C13.2014 17.277 13.3352 17.1449 13.3352 16.416V13.0928C13.2827 12.147 12.9462 11.7379 12.697 11.4349C12.5432 11.2478 12.4226 11.1013 12.4226 10.8939C12.4226 10.641 12.6422 10.375 13.0071 10.375H16.6191C17.1056 10.375 17.2666 10.6305 17.2666 11.2045V15.6749C17.2666 16.1535 17.4862 16.3206 17.6323 16.3206C17.9247 16.3206 18.1678 16.1535 18.7034 15.6267C20.358 13.8102 21.5261 11.0137 21.5261 11.0137C21.6722 10.6786 21.9418 10.375 22.5262 10.375H24.8231Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a class="footer__social-link"
                   href="https://wa.me/79876203930"
                   target="_blank"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.6068 7.39981C24.82 -0.000244619 15.047 -2.20026 7.46785 2.39977C0.0881831 6.99981 -2.30522 16.9999 2.48159 24.3999L2.88049 24.9999L1.28489 31L7.2684 29.4L7.86675 29.8C10.4596 31.2 13.2519 32 16.0442 32C19.036 32 22.0277 31.2 24.6206 29.6C32.0002 24.7999 34.1942 14.9999 29.6068 7.39981ZM25.4184 22.7999C24.6206 23.9999 23.6233 24.7999 22.2272 24.9999C21.4294 24.9999 20.4321 25.3999 16.4431 23.7999C13.0525 22.1999 10.2602 19.5999 8.26565 16.5999C7.06895 15.1999 6.4706 13.3999 6.27115 11.5998C6.27115 9.99983 6.8695 8.59982 7.86675 7.59981C8.26565 7.19981 8.66455 6.99981 9.06345 6.99981H10.0607C10.4596 6.99981 10.8585 6.99981 11.058 7.79982C11.4569 8.79982 12.4541 11.1998 12.4541 11.3998C12.6536 11.5998 12.6536 11.9998 12.4541 12.1999C12.6536 12.5999 12.4541 12.9999 12.2547 13.1999C12.0552 13.3999 11.8558 13.7999 11.6563 13.9999C11.2574 14.1999 11.058 14.5999 11.2574 14.9999C12.0552 16.1999 13.0525 17.3999 14.0497 18.3999C15.2464 19.3999 16.4431 20.1999 17.8393 20.7999C18.2382 20.9999 18.6371 20.9999 18.8365 20.5999C19.036 20.1999 20.0332 19.1999 20.4321 18.7999C20.831 18.3999 21.0305 18.3999 21.4294 18.5999L24.6206 20.1999C25.0195 20.3999 25.4184 20.5999 25.6178 20.7999C25.8173 21.3999 25.8173 22.1999 25.4184 22.7999Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a class="footer__social-link">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M32 16C32 24.836 24.836 32 16 32C7.164 32 0 24.836 0 16C0 7.164 7.164 0 16 0C24.836 0 32 7.164 32 16ZM16.5733 11.812C15.0173 12.4587 11.9067 13.7987 7.24267 15.8307C6.48533 16.132 6.088 16.4267 6.052 16.7147C5.99067 17.2027 6.60133 17.3947 7.43067 17.6547C7.544 17.6907 7.66133 17.7267 7.78133 17.7667C8.59867 18.032 9.69733 18.3427 10.268 18.3547C10.7867 18.3653 11.3653 18.152 12.004 17.7147C16.3613 14.772 18.6107 13.2853 18.752 13.2533C18.852 13.2307 18.9907 13.2013 19.084 13.2853C19.1773 13.368 19.168 13.5253 19.1587 13.568C19.0973 13.8253 16.7053 16.0507 15.4653 17.2027C15.0787 17.5613 14.8053 17.816 14.7493 17.8747C14.624 18.004 14.496 18.128 14.3733 18.2467C13.6133 18.9773 13.0453 19.5267 14.4053 20.4227C15.0587 20.8533 15.5813 21.2093 16.1027 21.564C16.672 21.952 17.24 22.3387 17.976 22.8213C18.1627 22.944 18.3413 23.0707 18.516 23.1947C19.1787 23.668 19.7747 24.092 20.5107 24.0253C20.9373 23.9853 21.38 23.584 21.604 22.3853C22.1333 19.5507 23.176 13.412 23.4173 10.8813C23.432 10.6712 23.4231 10.4601 23.3907 10.252C23.3713 10.0839 23.2894 9.92924 23.1613 9.81867C22.9707 9.66267 22.6747 9.62933 22.5413 9.632C21.94 9.64267 21.0173 9.964 16.5733 11.812Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <a href="#" class="footer__rules">Правила пользования</a>
          </div>
        </div>
      </div>
      <div class="copyright">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.421 22 22 17.421 22 12C22 6.579 17.421 2 12 2C6.579 2 2 6.579 2 12C2 17.421 6.579 22 12 22ZM12 4C16.337 4 20 7.663 20 12C20 16.337 16.337 20 12 20C7.663 20 4 16.337 4 12C4 7.663 7.663 4 12 4Z"
            fill="white"
          />
          <path
            d="M13 17C13.901 17 15.581 16.832 16.707 15.708L15.293 14.292C14.85 14.735 13.992 15 13 15C11.374 15 10 13.626 10 12C10 10.374 11.374 9 13 9C13.993 9 14.851 9.265 15.293 9.707L16.707 8.293C15.582 7.168 13.901 7 13 7C10.243 7 8 9.243 8 12C8 14.757 10.243 17 13 17Z"
            fill="white"
          />
        </svg>
        <p>
          ReShop - Селективный комиссионный магазин трендовой одежды. Все права
          защищены
        </p>
      </div>
    </footer>
</template>

<script>
import {useSessionStore} from "@/store/session";
import {useShopStore} from "@/store/shop";
export default {
  components:{useSessionStore},
  name: 'TheFooter',
  // data(){return{forWho:null}},
  methods:{
    msg(txt){return useSessionStore().showMsg(txt)}
  },
  computed:{
    parentsCatIds(){
      let result = []
      for (let cat of useShopStore().categoriesTree){
        if (cat.parent===0) result.push(cat)
      }
      for (let pcat of result){
        pcat.cats=[]
        for (let cat of useShopStore().categoriesTree)
          if (cat.parent === pcat.id  ) pcat.cats.push(cat)
      }
      return result
    },
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

  }
}
</script>
