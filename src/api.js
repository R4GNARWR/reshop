import axios from "axios";
import router from "@/router";

import {useSessionStore} from "@/store/session";
import {useShopStore} from "@/store/shop";


axios.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8'
axios.defaults.headers.common['xMarketGroup']='4'
axios.defaults.headers.common['xProjectId']='2'
axios.defaults.headers.common['xUserToken']=localStorage.user_token;
export default  {
  Api_ready: false,
  axios: axios.create({baseURL: "https://api.et-web.ru/api/"}),

  init(){
    const store =useSessionStore()
    this.axios.interceptors.request.use(
      config => {
        config.headers.xUserToken = "";
        if(localStorage.user_token)
          config.headers.xUserToken = localStorage.user_token;
        return config;
        }, error => Promise.reject(error),
    );
    this.axios.interceptors.response.use(
      response => {
        if (response)
          if(response.headers.xusertoken && !store.user_info.user_token)
            store.setToken(response.headers.xusertoken);
        return response;
      },error => Promise.reject(error)
    );
  },

  getRequest(link){
    return this.axios.get(link)
  },
  postRequest(link){
    return this.axios.post(link)
  },
  putRequest(link, data){
    return this.axios.put(link.toString(), data,{ headers: {'Content-Type': 'application/json; charset=UTF-8'}})
  },
  delRequest(link){this.axios.delete(link)},

  //AUTH and USERS
  tryAuth(){
    const store = useSessionStore()
    this.axios.get('auth').then(value => {
      if (value.data.success && value.data.user.id>0){
        store.loggedIn(value.data.user);
        this.axios.get('favorites').then(value => {
          if (value.status ===200) store.setFavorites(value.data)})
        this.axios.get('cart/products').then(value => {
          if(value.data.success) store.setCart(value.data.products)
        })
      }
    })
  },
  registration(name, phone, email, password){
    if (!name || name =='') name = "Новый пользователь";
    return this.axios.post('auth/reg', {name: name, phone: phone, email:email, password: password})
  },
  tryLogin(login, email, password){return this.axios.post('auth/login', {phone: login, email:email, password: password})},
  logout() {
    const store =useSessionStore()
    store.logout()
    return this.axios.post('auth/logout')
  },

  ask_sms(phone, email) {return this.axios.post('auth/forgot', {phone: phone, email:email})},

    //CATEGORIES
    getAllCategories() {
      const store = useShopStore()
      this.axios.get('categories').then(value => {
        if (value.data.success) store.setCategoriesTree(value.data.response.categories)
      })

    },
    getCategoryProducts(id,perPage, activePage){
        return this.axios.get('products', {params:{
                categoryId: id,
                page: activePage,
                per_page:perPage
        }})},
    saveCategoryPhoto(photo){return this.axios.post('admin/photos', photo,{params:{type:"category"}})},
    savePhoto(photo, type){return this.axios.post('admin/photos', photo,{params:{type:type}})},
    deleteCategory(id){return this.axios.delete("admin/category/"+id)},
    saveCategory(category){
        let result;
      if (category.id === 'new'){
          delete category['id']
          result= this.axios.post("admin/new-category", category)
      } else result= this.axios.post("admin/update-category", category)
        return result
    },

    //ATRIBUTES & COLORS
    sendAttr(title, type, filterUse, productCardUse, sort, attrIsActive, frontName, attrSearchType, quant, cats_id, values,) {
        return this.axios.post('admin/attributes',{
        title:title, type:type, filterUse:filterUse,
        productCardUse:productCardUse, sort:sort,
        attrIsActive:attrIsActive, frontName:frontName,
        attrSearchType:attrSearchType, quant:quant,
        cats_id:cats_id, values:values,})
    },
    getAllAttributes(){
      const store = useShopStore()
      return this.axios.get("attributes").then(value => {
        if (value.data.success) {
          for (let attr of value.data.attributes) store.addAttr(attr)
          // let attr={}
          // if (store.attributes.length>0)
          //   attr= store.attributes.find(el=>el.title==='brand')
          // if (attr.attributeId)
          //   this.getAttrValues(attr.attributeId).then(value => {
          //     if (value.data.success) {
          //       store.setBrands(value.data.attributeValues)
          //     }
          //   })
        }
    })},
    getAttrCats(id){return this.axios.get("admin/attributes/"+ id + "/categories")},
    getAttrValues(id){return this.axios.get("attributes/"+ id + "/values")},
    deleteAttribute(id){return this.axios.delete("admin/attributes/"+id)},
    getCategoryAttributes(id){return this.axios.get("admin/attributes/category/"+id)},
    getAllColors(){
      const store = useShopStore()
      return this.axios.get('admin/colors').then(value => {
        if (value.data.colors) store.setColors(value.data.colors)
    })},
    sendColorImg(img) {return this.axios.post("admin/photos",img,{params:{type:"color"}})},
    delColor(id){return this.axios.delete("admin/color/"+id)},
    updateColors(colors){return this.axios.post("admin/colors",{colors:colors})},

    //USERS
    getAllUsers(){
      const store = useShopStore()
      return this.axios.get("admin/users").then(value => {
        if(value.data.success)store.setUsers(value.data.users)
    })},
    getUserInfo(id){return this.axios.get("admin/user/"+id)},
    saveUserPhoto(id,photo){return this.axios.post('admin/user/photo/'+id, photo,{})},
    saveUserInfo(user){return this.axios.put("account", user, {})},
    delUser(id){return this.axios.delete("admin/user/"+id)},

    //PRODUCT
    saveProductPhoto(img) {return this.axios.post("admin/photos",img,{params:{type:"product"}})},
    getProductById(id){return this.axios.get('products/'+id) },
    getAllProduct(){return this.axios.get('products') },
    createNewProduct(product){return this.axios.post("admin/create-product", product)},
    fastProductUpdate(product, status){this.axios.post("admin/fast-update-product",{id:product.id, price:product.price, priority:product.priority, active:status?status:product.active})},

    updateProduct(product){
        let toUpdate = {}
        toUpdate.seller = product.seller
        toUpdate.name = product.name
        toUpdate.article = product.article
        toUpdate.barcode = product.barcode
        toUpdate.brand = product.brand
        toUpdate.active = product.active
        toUpdate.categoryId = product.categoryId
        toUpdate.priority = product.priority
        toUpdate.price = product.price
        toUpdate.oldPrice = product.oldPrice
        toUpdate.description = product.description
        toUpdate.structure = product.structure
        toUpdate.condition = product.condition
        toUpdate.color = product.color
        toUpdate.sex = product.sex
        toUpdate.season = product.season
        toUpdate.weight = product.weight
        toUpdate.h = product.h
        toUpdate.w = product.w
        toUpdate.l = product.l
        toUpdate.video = product.video
        toUpdate.attributes = product.attributes
        toUpdate.seoTitle = product.seoTitle
        toUpdate.seoH1 = product.seoH1
        toUpdate.seoKeyWords = product.seoKeyWords
        toUpdate.seoDescription = product.seoDescription
        toUpdate.look = product.look
        toUpdate.photo = product.fullPhotos
        return this.axios.put("admin/products/"+product.id, toUpdate)},
    deleteProduct(id){return this.axios.delete("admin/products/"+id+"/delete")},
    productsToCategory(id,catId){return this.axios.post("admin/product-to-cat",{id:id, categoryId:catId})},
    doubleProductsToCategory(id,catId){return this.axios.post("admin/double-product-to-cat",{id:id, categoryId:catId})},
    addAttr(selectedProducts, attr){return this.axios.post("admin/add-attribute-to-products", {productsList:selectedProducts, attribute:attr})},

    addToFavorites(id){return this.axios.post('favorite/'+id)},
    delFavorites(id){return this.axios.delete('favorite/'+id)},

  //CART
  put_to_cart(id) {return this.axios.post('cart/products', {productId: id, market_id: 5, quantity: 1}, {});},

  update_quantity_in_cart(product, quantity) {this.axios.put('cart/products/'+product, {quantity:quantity}, {headers: {'Content-Type': 'application/json',}}).then(response => {
    if (!response.data.success || !response.data.product){console.log('ahtung!!',response);}
  });},

  //SETTINGS
    getSettings(){
      const store =useSessionStore()
      this.axios.get("settings")
        .then((value) =>{if(value.data.length>0) store.setSetting(value.data)
        })
    },
    saveSettings(settings){
      if (settings.contacts)
        for(let s of settings.contacts) if (s.edit) delete s.edit
      if (settings.deliveries)
        for(let s of settings.deliveries) if (s.edit) delete s.edit
      if (settings.payments)
        for(let s of settings.payments) if (s.edit) delete s.edit

      return this.axios.post("admin/settings", settings,{headers: {'Content-Type': 'application/json; charset=UTF-8'}})
    },
    saveMain(settings){
    if (settings.sliders)
      for(let s of settings.sliders) if (s.edit) delete s.edit
    if (settings.sets)
      for(let s of settings.sets) if (s.edit) delete s.edit
    if (settings.benefits)
      for(let s of settings.benefits) if (s.edit) delete s.edit
      if (settings.benefits)
        for(let s of settings.benefits) if (s.edit) delete s.edit

    return this.axios.post("admin/mainPage", settings,{headers: {'Content-Type': 'application/json; charset=UTF-8'}})
  },

    saveMainLogo(img) {return this.axios.post("admin/photos",img,{params:{type:"MainLogo"}})},
    saveMainFavicon(img) {return this.axios.post("admin/photos",img,{params:{type:"MainFavicon"}})},

    //////////////////////////////////////////////////////////////
    getPopularProducts(){return this.axios.get('popular-products')},
    getCategoryTopProducts(id, pW, pH, page){return this.axios.get('categories/'+id+'/products', {params:{photoW:pW, photoH:pH, page:page}})
        .then(value => {
                if(value.data && value.data.response.products){
                    return value.data.response.products;
                }
            }).catch(error => {console.log(error); this.errored = true;});},
    getCatDescription(catID){return this.axios.get('categories/'+catID+'/description')},


    getFullPhoto(id){return this.axios.get('full-photo/'+id);},
    getFullPhotos(id){return this.axios.get('products/'+id+'/full-photos');},


    searchProductsVariants(query){return this.axios.get('search-products', {params: {query: query }})},

  searchProducts(query,attr, cat){
    const store = useSessionStore()
    let key={query:query, attr:attr, category_id:cat}
    return this.axios.get('main-search',{params:key})
      .then(value => {
        store.setSearchResult(JSON.stringify(key), value)
        return value;})},

  searchTwentyFive(q,sex, attrs, cats,cat_id,price_min,price_max,page){
    const store = useSessionStore()
    let key={
      query:q,
      sex:sex,
      attributes:attrs,
      categoriesIds:cats,
      category_id: cat_id,
      price_min:price_min,
      price_max:price_max,
      page:page
    }
    return this.axios.get('search',{params:key})
      .then(value => {
          store.setSearchResult(JSON.stringify(key), value)
        return value;})
  },
  // searchProducts(query,attr, cat, page){return this.axios.get('products',{params:{query:query, attr:attr, categoryId:cat, per_page: 99, page:page}}).then(value => {return value;})},

    get_payments_history(){return this.axios.get('account/billing/history')},
    get_ordered_products(){return this.axios.get('account/ordered-products')},
    get_user_orders(){return this.axios.get('account/orders')},


    getOrderInfo(id){return this.axios.get("sms-payment/order-info",{params:{id:id}})},
    updateOrder(order){return this.axios.put("admin/orders/"+order.id,
        { house:order.house, street:order.street, city:order.city, phone: order.phone, comment:order.comment, commission:order.commission, apartment:order.apartment},
        {headers: {'Content-Type': 'application/json'}})},
    updateOrderProduct(orderId, products){
        for (let p in products){
            this.axios.put("admin/orders/"+orderId+"/product-update/"+products[p].orderProductId,
                {quantity:products[p].quantity, price:products[p].price, notice:products[p].notice},
                {headers: {'Content-Type': 'application/json'}})
        }
    },

    preOrder(product, phone, name, email){return this.axios.get('sms-payment/pre-order', {params:{product:product, phone:phone, name:name, email:email}})},

    orderToPay(orderId){return this.axios.put('sms-payment/order-to-pay/'+ orderId)},

    deleteProductFromOrder(orderId, productId){return this.axios.delete("admin/orders/"+orderId+"/products/"+productId)},
    addProductToOrder(orderId, productId, notice){return this.axios.post("admin/orders/"+orderId+"/products", {productId:productId, notice: notice})},


    payment(amount, orderId){ return this.axios.post("account/billing", {sum:amount, orderId:orderId})},

    getGallery(){
        return this.axios.get("banners/galleries")
    },
    delGallery(about){
        return this.axios.delete("banners/galleries/"+about)
    },
    changeGalleryName(oldName, newName){
        return this.axios.post("banners/galleries/change-name", {oldName:oldName, newName:newName})
    },
    delGalleryPhoto(path){
        return this.axios.delete("banners/galleries/photo/"+path.substr(path.lastIndexOf('/')))
    },
}
