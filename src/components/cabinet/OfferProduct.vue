<template>
    <div class="catalog__page" v-if="productToEdit">
      <div class="content__top" >
        <div>
          <h1 class="content__title">
            Товар “{{ productToEdit.name }}”
          </h1>
        </div>
        <div class="content__top-buttons">
  <!--        <a class="content__top-link" v-if="route.params.productId !=='new'" @click="delProduct()">Удалить товар</a>-->
          <a class="btn" @click="saveProduct">Сохранить</a>
        </div>
          </div>
          <div class="edit">
            <div class="edit__item">
              <div class="edit__item-title">Основное</div>
              <div class="edit__item-block">
                <form class="content__form">
                  <div class="content__form-field">
                    <label class="content__form-label content__form-label--light">Название</label>
                    <input type="text" class="content__form-input"
                           v-model="productToEdit.name"
                           @blur="productToEdit.seoTitle?'':productToEdit.seoTitle=productToEdit.name"
                    />
                  </div>
                  <div class="content__form-field">
                  <label class="content__form-label content__form-label--light">Описание</label>
                  <input type="text" class="content__form-input" v-model="productToEdit.description"
                    @blur="productToEdit.seoDescription?'':productToEdit.seoDescription=productToEdit.description"
                  />
                </div>
                  <div class="content__form-field">
                    <label class="content__form-label content__form-label--light">Категория</label>
                    <v-autocomplete
                        class="content__form-input category"
                        v-model="productToEdit.categoryId"
                        :items="store.categoriesTree"
                        item-title="name"
                        item-value="id"
                        variant="underlined"
                        autocomplete="off"
                    >
                      <template>{{name}}</template>
                    </v-autocomplete>
                  </div>
  <!--                <div class="content__form-field">-->
  
                  <div class="content__form-field">
                    <label class="content__form-label content__form-label--light">Цена, руб</label>
                    <input type="number" class="content__form-input" v-model="productToEdit.price"/>
                  </div>
                </form>
              </div>
            </div>
  
            <div class="edit__item">
              <div class="edit__item-title">Фотографии</div>
              <div class="edit__item-block">
                <form class="content__form">
                  <div class="add-photos">
                    <div class="add-photos__img" v-for="(photo, index) of productToEdit.photo" :key="photo">
                      <img :src="photo" :alt="productToEdit.name" />
                      <div class="add-photos__actions">
                        <a class="add-photos__action" v-if="productToEdit.id" :href="productToEdit.fullPhotos[index]" target="_blank">
                          <img src="@/assets/images/photo-eye.svg" alt="" />
                        </a>
                        <a class="add-photos__action" @click="productToEdit.photo.splice(index,1); productToEdit.fullPhotos?productToEdit.fullPhotos.splice(index,1):''">
                          <img src="@/assets/images/photo-trash.svg" alt="" />
                        </a>
                      </div>
                    </div>
                    <label class="add-photos__label">
                      <input type="file" @change="previewFiles" accept="image/jpeg, image/png, image/jpg"/>
                      <img src="@/assets/images/+.svg" alt="" />
                    </label>
                  </div>
                  <div v-if="productToEdit.photo && productToEdit.photo.length>0">
                    <i>Не забудьте сохранить товар после редактировани фотографий</i>
                  </div>
                </form>
              </div>
            </div>

            <div class="photo-edit shadowed" v-if="showAddValue" v-click-outside="()=>showAddValue=false">
              <div class="photo-edit__window">
                <div class="photo-edit__title">Добавить значение</div>
                <div class="cities">
                  <div class="cities__item cities__item--sm" v-for="value of showAddValue" :key="value.attributeValueId"
                       @click="productToEdit.attributes.find(el=>(el.attributeValueId === value.attributeValueId && el.attributeId === value.attributeId))?showAddValue=false:productToEdit.attributes.push(value); showAddValue=false">
                    <p class="cities__item-text">{{ value.value }}</p>
                  </div>
                </div>
                <div class="close_window" @click="showAddValue = false">Закрыть</div>
              </div>
            </div>
            <a class="btn" @click="saveProduct">Сохранить</a>
          </div>
        </div>
  </template>
  
  <script setup>
  // import ProductInLook from "@/components/ProductInLook";
  import {computed, onActivated, onBeforeMount, onMounted, ref} from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  const route =useRoute()
  const router = useRouter()
  import API from '@/api'
  import {useShopStore} from "@/store/shop";
  import {useSessionStore} from "@/store/session";
  const store=useShopStore()
  
  
  const productToEdit=ref({})
  const category=ref()
  const attrList=ref([])
  const showAddValue=ref(false)
  const tmpAttr=ref({})
  
  //search
  const searchString=ref('')
  const keyPressedTime=ref(0)
  const searchResultsVisible=ref(false)
  const variants=ref([])
  const activeSearchVariantIdx=ref(null)
  
  function saveProduct(){
    for (let key of Object.keys(tmpAttr.value)){
      let a=false
      for (let index=0; index<productToEdit.value.attributes.length; index++){
        if(parseInt(key) === productToEdit.value.attributes[index].attributeId){
          a=true
          if (!tmpAttr.value[key]) productToEdit.value.attributes.splice(index,1)
          else if(tmpAttr.value[key].attributeValueId !== productToEdit.value.attributes[index].attributeValueId){
            productToEdit.value.attributes.splice(index,1)
            productToEdit.value.attributes.push(tmpAttr.value[key])
          }
        }
      }
      if (!a) productToEdit.value.attributes.push(tmpAttr.value[key])
    }
    if (productToEdit.value.id) API.updateProduct(productToEdit.value).then(()=>{
      router.push('/Cabinet#sales')
    })
    else API.createNewProduct(productToEdit.value).then(()=>{
      store.setCategoriesTree([])
      router.push('/Cabinet#sales')
    })
  }
  // function delProduct(){API.deleteProduct(route.params.productId).then(()=>{router.push('/Catalog/'+category.value)})}
  
  function previewFiles(event) {
    productToEdit.value.photo.push('/loading.gif')
    let fd = new FormData;
    fd.append(event.target.files[0].name, event.target.files[0]);
    API.saveProductPhoto(fd).then(value => {
      if (value.data.success) {
        productToEdit.value.photo.splice(productToEdit.value.photo.length - 1, 1)
        productToEdit.value.photo.push(value.data.photoUrl)
        if (productToEdit.value.fullPhotos) productToEdit.value.fullPhotos = productToEdit.value.photo
      }
    })
  }
  
  //search
  function getVariants(callTime) {
    if (keyPressedTime.value <= callTime) {
      if (searchString.value.length>3) {
        activeSearchVariantIdx.value = null;
        API.searchProductsVariants(searchString.value).then(response => {
          if (keyPressedTime.value <= callTime) {
            if (response.data.success) {
              if (response.data.products && response.data.products.length) {
                variants.value = response.data.products;
                searchResultsVisible.value = true;
              } else {variants.value = [];}
            }
          }
        }).catch(error => {console.log(error);})
      }
      else {
        variants.value = [];
        searchResultsVisible.value = false;
      }
    }
  }
  function scrollToVariant() {
    try {
      $refs.searchResultsScroller.children[activeSearchVariantIdx].scrollIntoView({
        block: 'center',
            behavior: 'smooth'
          });
        } catch (e) {console.log(e)}
  }
  function keydown(e) {
        let t = (new Date()).getTime();
        switch (true) {
          case e && e.keyCode === 38: // up
            if (activeSearchVariantIdx === null) {
              activeSearchVariantIdx.value = variants.length - 1;
              scrollToVariant();
            }
            else {
              if (activeSearchVariantIdx > 0) {
                --activeSearchVariantIdx.value;
                scrollToVariant();
              }
            }
            break;
          case e && e.keyCode === 40: // down
            if (activeSearchVariantIdx === null) {
              activeSearchVariantIdx.value = 0;
              scrollToVariant();
            }
            else {
              if (activeSearchVariantIdx < variants.length - 1) {
                ++activeSearchVariantIdx.value;
                scrollToVariant();
              }
            }
            break;
          case e && e.keyCode === 13: // Enter
            if (activeSearchVariantIdx !== null) {
              searchString.value = variants[activeSearchVariantIdx].product;
            }
            break;
          case e && e.keyCode === 27: // Esc
            vm.$refs.searchStringInput.blurIt();
            break;
          default:
            keyPressedTime.value = t;
            setTimeout(() => getVariants(t), 300);
        }
      }
  
  onBeforeMount(()=>{
    if (store.categoriesTree.length<1) API.getAllCategories()
    if (store.users.length<1) API.getAllUsers()
  })
  onMounted(()=>{
    if (route.params.productId==='new'){
      productToEdit.value={
        name:"Новый продукт",
        seller:useSessionStore().user_info.id?useSessionStore().user_info.id:"неопределен",
  
        categoryId:route.params.categoryId?parseInt(route.params.categoryId):null,
        photo:[],
        video:[],
        attributes:[],
        look:[],
        active:1,
      }
  } else {API.getProductById(route.params.productId).then(value => {
      if (value.data.success){
        productToEdit.value = value.data.response.product
        if(!productToEdit.value.categoryId) productToEdit.value.categoryId=value.data.response.product.category_id
        if(!productToEdit.value.color) productToEdit.value.color = productToEdit.value.colorId
        productToEdit.value.photo=value.data.response.photosPreview
        productToEdit.value.fullPhotos=value.data.response.fullPhotos
        if(productToEdit.value.video) productToEdit.value.video=productToEdit.value.video.split(", ")
        else productToEdit.value.video=[]
  
        if(value.data.response.attributes){
          productToEdit.value.attributes=[]
          for (let attr of value.data.response.attributes){
            tmpAttr.value[attr.attributeId]={
              'value':attr.attributeValueText,
              'attributeValueId':attr.attributeValueId,
              'attributeId':attr.attributeId
            }
            productToEdit.value.attributes.push({
              'value':attr.attributeValueText,
              'attributeValueId':attr.attributeValueId,
              'attributeId':attr.attributeId
            })
          }
        }
        productToEdit.value.look=[]
        if(value.data.response.look){
          for (let look of value.data.response.look.split(", "))
            if (look !==route.params.productId && productToEdit.value.look.indexOf(el=>el===look)<1)
              productToEdit.value.look.push(look)
        }
      }
    })
  }
    API.getAllColors()
    API.getCategoryAttributes(route.params.categoryId).then(value => {
      if(value.data.success) attrList.value = value.data.attrList
    })
    category.value = store.categoriesTree.find(el=>el.id.toString()=== route.params.categoryId.toString())
  
    // API.getSettings().then(value => {
    //   if(value.data) {
    //     settings.value = JSON.parse(value.data[value.data.findIndex(el => el.setting_type ==="settings")]["setting_json"])
    //   }})
  })
  
  </script>
  
  <style scoped>
  .search-var{
    width: 100%;
    background-color: #efefef;
    margin: 5px 0;
  }
  .catalog__page{margin: 0 auto}
  .btn{margin: 0 auto}
  </style>
  