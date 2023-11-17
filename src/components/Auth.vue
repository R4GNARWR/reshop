<template>
  <div class="registration" >
      <v-card class="registration__window" v-click-outside="closeModal">
        <v-icon color="#E3E3E3" icon="mdi-close" class="close__cross" @click="closeModal"></v-icon>
        <div class="registration__tabs">
          <div class="registration__tab" :class="{'active':a==='in'}" @click="a='in'">Вход</div>
          <div class="registration__tab" :class="{'active':a==='reg'}" @click="a='reg'">Регистрация</div>
        </div>
        <div class="registration__body active">
          <div class="registration__form">
            <input
              type="name"
              class="registration__input input"
              placeholder="Ваше имя"
              v-if="a==='reg'"
              v-model="formData.name"
              @focus="status=''"
            />
            <input
              type="phone"
              class="registration__input input"
              placeholder="Номер телефона"
              v-model="formData.phone"
              @focus="status=''"
              v-maska data-maska="+7 (###) ###-##-##"
            />
            <input
              type="email"
              class="registration__input input"
              placeholder="E-mail"
              v-model="formData.email"
              @focus="status=''"
            />
            <input
              type="password"
              class="registration__input input"
              placeholder="Пароль"
              v-model="formData.password"
              @focus="status=''"
            />
            <input
              type="password"
              class="registration__input input"
              placeholder="Проверочный пароль"
              v-if="a==='reg'"
              v-model="formData.pass2"
              @focus="status=''"
            />
            <div class="registration__check">
              <input
                class="registration__checkbox"
                type="checkbox"
                id="remember"
              />
              <label for="remember">Запомнить меня</label>
            </div>

            <p v-if="statusText.length>0" style="margin-top: 10px; color: #eb681e">{{statusText}}</p>
            <button v-else-if="a==='reg'" @click="regIt" class="btn registration__submit">
                Зарегистрироваться
            </button>
            <button v-else @click="login" class="btn registration__submit">
              Войти
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
        </div>
      </v-card>
    </div>
</template>

<script>
import API from '../api.js'
import { vMaska } from "maska"
import {useSessionStore} from "@/store/session";

export default {
  name: 'Auth',
  data(){return {
    a:'in', formData:{}, status:"",
  }},
  directives: { maska: vMaska },
  computed:{
    statusText(){
      let result ="Пожалуйста заполните поля: ", e=0
      if (!this.formData.name && this.a==='reg'){result+=" Имя"; e++}
      if (!this.formData.phone){
        if (e>0) result+=','
        result+=" Телефон"; e++
      }
      if (!this.formData.email){
        if (e>0) result+=','
        result+=" Email"; e++
      }
      if (!this.formData.password){
        if (e>0) result+=','
        result+=" Пароль"; e++
      }
      if(e>0) result+='.'
      else result=''

      if (this.formData.password!==this.formData.pass2 && this.a==='reg'){
        if(e>0) result+='. '
        result+="Проверочный пароль не совпадает!";
      }

      if (this.status.length>0) result = this.status
      return result
    }
  },
  methods: {
    closeModal() {this.$emit('toggleModal', false)},
    login(){
      this.status='Заходим...'
      API.tryLogin(this.formData.phone.replace(/[^0-9]/g, ""), this.formData.email, this.formData.password).then(value => {
        if(value.data.errors){
          this.status=''
          for (let e of Object.keys(value.data.errors)) this.status += value.data.errors[e]+ ' ';
        }
        if (value.data.success){
          if(value.data.user){
            this.status = 'Успешно!';
            useSessionStore().setToken(value.data.token)
            useSessionStore().loggedIn(value.data.user)
            setTimeout(()=>this.closeModal(),1000)
          }
        }
      })
    },
    regIt() {
      this.status = 'Регистрируем...'
      API.registration(this.formData.name, this.formData.phone.replace(/[^0-9]/g, ""), this.formData.email, this.formData.password).then(value => {
        if (value.data.errors) {
          this.status = ''
          for (let e of Object.keys(value.data.errors)) this.status += value.data.errors[e] + ' ';
        }
        if (value.data.success) {
          this.status = 'Регистрация прошла успешно.'
          useSessionStore().setToken(value.data.token)
          useSessionStore().loggedIn(value.data.user)
          setTimeout(()=>this.closeModal(),2000)
        }
      })
    }
  }
}
</script>

<style>

</style>
