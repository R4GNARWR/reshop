import {defineStore} from "pinia";
import API from '../api.js'
import {useShopStore} from "@/store/shop";

export const useSessionStore = defineStore('session', {
  state: () => ({
    user_info:{},
    userOrders: {},
    userOrderedProducts: {},
    userProducts: {},
    session:{},
    settings:[],
    mainPage:{},
    mainSettings:{},
    favorites:[],
    cart:[],
    msg:"",
    popBrands:[
      "Asos",
      "Befree",
      "Bershka",
      "H&M",
      "Lime",
      "Love Republic",
      "Mango",
      'Massimo Dutti',
      'Mohito',
      "Monki",
      'Pull&Bear',
      'Reserved',
      "Stradivarius",
      "Tommy Hilfiger",
      "Zara",
      'Zarina'
    ],
    searchResult:{}

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

    setSearchResult(key,data){
      this.searchResult[key] = data
    },
    setCart(data){
      this.cart=data
      // for (let p of data)
      //   this.cart.push(p.productId)
    },
    toCart(id){
      if(id) {
        if (!this.cart.find(el=>el.id === id)) {
          API.put_to_cart(id).then(value => {
            if (value.data.success) {
              this.cart.push(useShopStore().products[id])
              this.showMsg("Товар добавлен в корзину!")
            }
          })
  
        }
      } else (console.log('Не найден ID'))
    },
    getUserOrders() {
      API.get_user_orders().then((response) => {
        if(response.data.success) {
          this.userOrders = response.data.orders
        }
      })
    },
    getUserOrderedProducts() {
      API.get_ordered_products().then((response) => {
        if(response.data.success) {
          this.userOrderedProducts = response.data.products
        }
      })
    },
    getUserProducts(id) {
      API.getUserProducts(id).then((response) => {
        const products = response.data;
        if (products) {
          for (const product of products) {
            API.getProductById(product).then((response) => {
              if(response.data.success && response.data.product && product) {
                this.userProducts[product] = response.data.product
              }
            });
          }
        }
      });
    },
    delFromCart(id){
      this.cart.splice(this.cart.findIndex(el=>el.id === id),1)
      API.delRequest('cart/products/' + id)
    },

    showMsg(text){
      this.msg = text;
      setTimeout(()=>this.msg='',3000)
    }
  },
})
