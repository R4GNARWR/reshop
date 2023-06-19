import {defineStore} from "pinia";
import API from '../api.js'

export const useSessionStore = defineStore('session', {
  state: () => ({
    user_info:{},
    session:{},
    settings:[],
    mainPage:{},
    mainSettings:{},
    favorites:[],
    cart:[],
    msg:"",

  }),
  actions: {
    setToken(token){
      this.user_info.user_token = token;
      localStorage.user_token = token;
    },
    loggedIn(user_info) {
      this.user_info = user_info;
    },
    logout() {
      this.user_info = {};
      localStorage.user_token = '';
    },
    setSetting(value){
      this.settings=value
      this.mainPage = JSON.parse(value[value.findIndex(el=>el.setting_type === 'mainPage')].setting_json)
      this.mainSettings = JSON.parse(value[value.findIndex(el=>el.setting_type === 'settings')].setting_json)
    },

    addFavorites(id){
      if (this.favorites.includes(id)) {
        this.favorites.splice(this.favorites.findIndex(el=>el===id),1)
        API.delFavorites(id)
      }
      else {
        this.favorites.push(id)
        API.addToFavorites(id)
      }
    },
    setFavorites(data){
      this.favorites = []
      for (let id of data){
        if(id) this.favorites.push(id)
      }
    },

    setCart(data){
      this.cart=[]
      for (let p of data)
        this.cart.push(p.productId)
    },
    toCart(id){
      if (!this.cart.includes(id)) {
        this.cart.push(id)
        API.put_to_cart(id)
        this.showMsg("Товар добавлен в корзину!")
      }

    },
    delFromCart(id){
      this.cart.splice(this.cart.findIndex(el=>el===id),1)
      API.delRequest('cart/products/' + id)
    },

    showMsg(text){
      this.msg = text;
      setTimeout(()=>this.msg='',3000)
    }
  },
})
