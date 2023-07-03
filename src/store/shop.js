import {defineStore} from "pinia";
import API from '../api.js';
import { isReactive, toRaw } from 'vue'

export const useShopStore = defineStore('shop', {
  state: () => ({
    catTreeStatus:"",
    attributes:[],
    attributesValues:[],
    colors:[], brands:[],
    users:[],
    categoriesTree:[],
    products:{}
  }),
  actions: {
    addProduct(product){
      this.products[parseInt(product.id)]=product
    },
    setCategoriesTree(categoriesArray) {this.categoriesTree = categoriesArray;},
    setCatTreeStatus(text){this.catTreeStatus = text},
    delCategory(categoryId){this.categoriesTree.splice(this.categoriesTree.findIndex(el=>el.id === categoryId),1)},
    addCategory(category){
      category.countProducts={}
      category.countProducts.moderate =0
      category.countProducts.sold =0
      category.countProducts.toSale =0
      this.categoriesTree.push(category)
    },
    addAttr(attribute){
      if (this.attributes.find(el => el.attributeId === attribute.attributeId)){
        this.attributes.splice(this.attributes.findIndex(el=>el.attributeId === attribute.attributeId),1)
      }
      this.attributes.push(attribute)
    },
    setColors(colors){this.colors = colors},
    setBrands(brands){this.brands = brands},
    setColorImg(toCommit){this.colors[toCommit.index].icon_path = toCommit.path},
    setUsers(users){
      for (let user of users) user.title = '+7'+user.phone+' '+user.name
      this.users = users;
    },
    getProduct(id){
      if (this.products[id]) return this.products[id]
      else {
        API.getProductById(id).then(value => {
          if (value.data.success){
            this.addProduct(toRaw(value.data.product))
          }
        })
        return this.products[id]
      }
    }
  },

})


//CATEGORIES
