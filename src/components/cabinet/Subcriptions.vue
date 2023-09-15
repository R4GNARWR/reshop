<template>
  <div class="cabinet__body">
    <div class="subscribe">
      <h1 class="subscribe__title">Новые поступления товаров ваших размеров:</h1>
      <div class="subscribe__email-check">
        <input class="subscribe__email-checkbox" type="checkbox" name="" v-model="subscribed">
        <label>Отправлять уведомления на почту</label>
      </div>

      <h2>Настройте подписку:</h2>
      <div class="subscribe__filter">
        <div class="subscribe__filter-left">
          <div class="subscribe__select">
            <select name="category" v-model="sex">
              <option value="" class="subscribe__option">Для всех</option>
              <option value="f" class="subscribe__option">Для нее</option>
              <option value="m" class="subscribe__option">Для него</option>
            </select>
          </div>
          <div class="main-btn" @click="showModal='cats'">Категории + </div>
          <div class="main-btn" v-if="attributes" v-for="attr in attributes"  @click="showModal=attr">{{ attr.frontName }} </div>
        </div>
        <div class="subscribe__filter-right">
          <div class="subscribe__filter-chooses" v-if="subscr">
            <div class="subscribe__choosed" v-if="sex">
              <p class="subscribe__choosed-name">{{ sex==='f'?'Для нее':sex==='m'?'Для него':'Для всех' }}</p>
              <div @click="sex=''" class="subscrive__choosed-close"><img src="@/assets/images/close-cat.svg" alt=""></div>
            </div>
            <div class="subscribe__choosed" v-if="categories.length && categoriesTree" v-for="(catId,i) in categories">
              <p class="subscribe__choosed-name" v-if="categoriesTree.find(el=>el.id===catId)">{{ categoriesTree.find(el=>el.id===catId).name }}</p>
              <div @click="categories.splice(i,1)" class="subscrive__choosed-close" v-if="categoriesTree.find(el=>el.id===catId)"><img src="@/assets/images/close-cat.svg" alt=""></div>
            </div>
            <div class="subscribe__choosed" v-if="actualFilters.length" v-for="(val,i) in actualFilters">
              <p class="subscribe__choosed-name">{{val.value}}</p>
              <div @click="actualFilters.splice(i,1)" class="subscrive__choosed-close"><img src="@/assets/images/close-cat.svg" alt=""></div>
            </div>
          </div>
        </div>
      </div>


      <a class="content__save btn" style="margin-top: 20px; max-width: 300px" @click="saveIt()">Сохранить</a>
      <div class="subscribe__cards cards">
        <CardSub v-for="product of products.slice(0, 15)" :card-data="product._id" :key="product._id"/>

      </div>

      <div class="subscribe__email-check subscribe__email-check--mob">
        <input class="subscribe__email-checkbox" type="checkbox" name="" id="notice">
        <label for="notice">Отправлять уведомления на почту</label>
      </div>


<!--      //modal wind-->
      <div class="photo-edit shadowed" v-if="showModal" v-click-outside="()=>showModal=null">
        <div class="photo-edit__window" v-if="showModal==='cats'">
          <div class="photo-edit__title">Добавить категорию</div>
          <div class="cats_select_list">
            <div class="cat_select" v-if="categoriesTree.length" v-for="cat in categoriesTree" :key="cat.id">
              <div v-if="cat.parent === 0">
                <input type="checkbox" class="edit-property__checkbox-input"
                       :checked="categories.indexOf(cat.id)>-1" @change="filteringProducts" @click="catSelect(cat.id)">
                <label>{{cat.name}}</label>
                <div v-for="subCat in categoriesTree" :key="subCat.id" class="subCats">
                  <input v-if="subCat.parent === cat.id" type="checkbox" class="edit-property__checkbox-input"
                         :checked="categories.indexOf(subCat.id)>-1"
                         @click="catSelect(subCat.id)"
                         @change="filteringProducts">

                  <label v-if="subCat.parent === cat.id">{{subCat.name}}</label>
                </div>
              </div>
            </div>
          </div>
          <button class="photo-edit__btn btn" @click="showModal = null">Ок</button>
          <div class="close_window" @click="showModal = null">Закрыть</div>
        </div>

        <div class="photo-edit__window" v-if="showModal!=='cats'">
          <div class="photo-edit__title">Добавить значение:</div>
          <div class="cats_select_list">
            <div class="cat_select" v-if="showModal.values" v-for="val in showModal.values" :key="val.attributeValueId">
              <input type="checkbox" class="edit-property__checkbox-input"
                     :checked="actualFilters.find(el=>el.value===val.value)"
                     @click="actualFilters.find(el=>el.value===val.value)?actualFilters.splice(actualFilters.indexOf(el=>el.value===val.value),1):actualFilters.push(val)">
              <label>{{val.value}}</label>
            </div>
          </div>
          <button class="photo-edit__btn btn" @click="showModal = null">Ок</button>
          <div class="close_window" @click="showModal = null">Закрыть</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import api from "@/api";
import {useShopStore} from "@/store/shop";
import {useSessionStore} from "@/store/session";
import CardSub from "@/components/CardSub";
export default {
  components: {
    CardSub
  },
  data(){
    return{
      showModal:null,

      sex:'',
      categories:[],
      subscribed:false,
      products:[],
      filteredProducts:[],
      actualFilters : '',
      dataFilters : [],
      testProducts: [],
    }
  },
  computed:{
    // colors(){return useShopStore().colors},

    attributes(){return useShopStore().attributes},
    categoriesTree(){return useShopStore().categoriesTree},
    subscr(){
      let data = false
      if(useSessionStore().user_info && useSessionStore().user_info.subscription && useSessionStore().user_info.subscription.length>2)
        data = JSON.parse(useSessionStore().user_info.subscription)
      if(data){
        this.sex=data.sex?data.sex:''
        this.categories=data.categories?JSON.parse(data.categories):[]
        this.subscribed=data.subscribed?data.subscribed:false
        this.actualFilters=data.attributes.length?JSON.parse(data.attributes):[]
      }

    return data //!==null
    }
  },
  mounted () {
      this.saveIt()
      },
  created() {
    api.getAllAttributes()
    // api.getAllColors()
    api.getAllCategories()

    
  },
  methods:{
    catSelect(id){
      if (this.categoriesTree.find(el => el.id===id).parent === 0){
        if (this.categories.indexOf(id) ===-1){
          this.categories.push(id)
          for (let cat of this.categoriesTree)
            if (cat.parent === id) this.categories.push(cat.id)
        } else{
          this.categories.splice(this.categories.indexOf(id),1)
          for (let cat of this.categoriesTree)
            if (cat.parent === id) this.categories.splice(this.categories.indexOf(cat.id),1)
        }
      } else{
        if (this.categories.indexOf(id) ===-1) this.categories.push(id);
        else this.categories.splice(this.categories.indexOf(id),1)
      }

    },
    saveIt(){
      let data={
        sex:this.sex,
        categories:JSON.stringify(this.categories),
        subscribed: this.subscribed,
        attributes: JSON.stringify(this.actualFilters, ),
      }
      useSessionStore().user_info['subscription']=JSON.stringify(data)
      api.putRequest('auth/subscribes',data)
      let attrs = []
      for ( let a of this.actualFilters)
        if (a.attributeValueId !=null) attrs.push(a.attributeValueId)
         api.searchTwentyFive('',this.sex, JSON.stringify(attrs),data.categories, null,null,null,null,).then(value => {
          this.products = value.data.products.hits.hits;
        }).catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>
.cats_select_list{
  position: relative;
  overflow-y: auto;
  height: 50vh;
  width: 100%;
}
.edit-property__checkbox-input{
  height: 21px;
}
.subCats{margin-left: 20px}

.main-btn{
  width: 200px;
  border: 1px solid #000000;
  padding: 15px 19px;
}
.inpt{
  font-size: 13px;
}
</style>
