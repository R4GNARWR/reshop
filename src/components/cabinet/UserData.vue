<template>
    <div>
        <div class="cabinet__body cabinet__body--lg ">
            <form class="cabinet__form">
              <div class="cabinet__avatar">
                <label class="cabinet__avatar-label">
                  <input class="cabinet__avatar-input" type="file" @change="previewFiles" accept="image/jpeg, image/png, image/jpg"/>
                  <div class="cabinet__avatar-img">
                    <img src="@/assets/images/avatar.svg" v-if="!user.photo"/>

                  </div>
                </label>
                <img class="avatar" :src="user.photo" v-if="user.photo"/>
              </div>
              <h2 class="cabinet__body-title">Данные пользователя</h2>
              <div class="cabinet__form-field">
                <label for="secondName">ФИО</label>
                <input
                  class="cabinet__form-input"
                  type="text"
                  name="second name"
                  v-model="user.name"
                />
              </div>
              <div class="cabinet__form-field">
                <label for="email">E-mail</label>
                <input
                  class="cabinet__form-input"
                  type="text"
                  name="email"
                  v-model="user.email"
                />
              </div>
              <div class="cabinet__form-field">
                <label for="phone">Телефон</label>
                <input
                  class="cabinet__form-input"
                  type="text"
                  name="phone"
                  v-model="user.phone"
                />
              </div>
              <div class="cabinet__form-field">
                <label for="address">Город</label>
                <input
                  class="cabinet__form-input"
                  type="text"
                  name="city"
                  id="city"
                  v-model="user.city"
                />
              </div>
              <div class="cabinet__form-field">
                <label for="address">Адрес</label>
                <input
                  class="cabinet__form-input"
                  type="text"
                  name="address"
                  v-model="user.address"
                />
              </div>
              <a class="content__save btn" style="margin-top: 20px; max-width: 300px"
                 v-if="user.phone &&user.email"
                 @click="saveUserInfo(user)">Сохранить</a>
              <p v-else>Укажите телефон и email</p>
              {{errors}}
            </form>

        </div>
        <!-- Мобильный Личный Кабинет -> Данные пользователя-->
        <div class="mob-profile mob-cabinet__body ">
            <h1 class="mob-cabinet__title">Личный кабинет</h1>
            <div class="mob-cabinet__tabs">
                <a href="#" class="mob-cabinet__tab active" @click.prevent="$emit('close')">Данные пользователя</a>
            </div>
            <form class="cabinet__form">
                <div class="cabinet__avatar">
                <label class="cabinet__avatar-label">
                    <input class="cabinet__avatar-input" type="file" />
                    <div class="cabinet__avatar-img">
                    <img src="@/assets/images/avatar.svg" />
                    </div>
                </label>
                </div>
                <h2 class="cabinet__body-title">Данные пользователя</h2>
                <div class="cabinet__form-field">
                <label for="secondName">Фамилия</label>
                <input
                    class="cabinet__form-input"
                    type="text"
                    name="second name"
                    id="secondName"
                />
                </div>
                <div class="cabinet__form-field">
                <label for="name">Имя</label>
                <input
                    class="cabinet__form-input"
                    type="text"
                    name="name"
                    id="name"
                />
                </div>
                <div class="cabinet__form-field">
                <label for="fathersName">Отчество</label>
                <input
                    class="cabinet__form-input"
                    type="text"
                    name="Fathers name"
                    id="fathersName"
                />
                </div>
                <div class="cabinet__form-field">
                <label for="email">E-mail</label>
                <input
                    class="cabinet__form-input"
                    type="text"
                    name="email"
                    id="email"
                />
                </div>
                <div class="cabinet__form-field">
                <label for="phone">Телефон</label>
                <input
                    class="cabinet__form-input"
                    type="text"
                    name="phone"
                    id="phone"
                />
                </div>
                <div class="cabinet__form-field">
                <label for="address">Адрес</label>
                <input
                    class="cabinet__form-input"
                    type="text"
                    name="address"
                    id="address"
                />
                </div>
            </form>
          <a class="content__save btn"
             v-if="user.phone &&user.email"
             @click="saveUserInfo(user)">Сохранить</a>
          <p v-else>Укажите телефон и email</p>
          {{errors}}
        </div>
    </div>
</template>

<script>
import {useSessionStore} from "@/store/session";
import API from "@/api";
export default {
  name: 'UserData',
  data(){return {
    errors:""
    }},
  computed:{
    user(){return useSessionStore().user_info}
  },
  methods:{
    saveUserInfo(user){
      API.saveUserInfo(user).then(value => {
        if (value.data.success) useSessionStore().showMsg("Успешно!")
        else if (value.data.errors)
          for (let e of Object.keys(value.data.errors)) this.errors+= value.data.errors[e]+' ';
        })
    },
    previewFiles(event) {
      let fd = new FormData;
      fd.append(event.target.files[0].name, event.target.files[0]);
      API.saveUserPhoto(this.user.id, fd).then(value => {
        if(value.data.success) this.user.photo = value.data.value
      })
    }
  }
}
</script>
