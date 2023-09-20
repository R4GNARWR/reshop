<template>
  <a @click="login?$router.push('EditProduct/0/new'):msg('Сперва необходимо зарегистрироваться )')" class="sales__btn btn btn-r">Предложить товар</a>
</template>

<script>
import {useSessionStore} from "@/store/session";
export default {
  name: "BtnAddProduct",
  data(){return{
    show:true,
    // login:false
  }},
  computed:{
    login(){return useSessionStore().user_info}
  },
  methods:{
    msg(){
      return useSessionStore().showMsg("Сперва необходимо зарегистрироваться )")}
  }
}
</script>

<style scoped>

</style>
