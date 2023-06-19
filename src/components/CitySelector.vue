<template>
  <div class="registration">
    <v-card class="modal__card" v-click-outside="closeModal">
      <v-icon color="#E3E3E3" icon="mdi-close" class="close__cross" @click="closeModal"></v-icon>
      <v-card-title>Выберите город</v-card-title>
      <v-card-text>
        <p v-if="cities.length<1">Бежим по городам...</p>
        <div v-else>
          <div v-if="selectedCity && selectedCity !== 'Уфа'">
            <p style="margin: 20px 0 20px 0">В этом городе пока нет нашего филиала. Вы можете заказать товар из наших магазинов в других городах.<br><br> текст о франшизе?</p>
            <v-btn @click="selectedCity=''">Выбрать другой город</v-btn>
          </div>

          <v-row v-else>
            <v-col cols="4"
                   v-for="city of cities"
                   :key="city.cityZip_code"
                   class="city_name"
                   @click="()=>{
                     if (city.cityName==='Уфа') closeModal()
                     else this.selectedCity=city.cityName
                   }">
              {{city.cityName}}
            </v-col>
          </v-row>
        </div>

      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import API from '../api.js'

export default {
    name: 'CitySelector',
  data(){return{
    cities:[],
    selectedCity:""
  }},
  methods: {
    closeModal() {
      this.selectedCity=""
      this.$emit('closeCity', false)
    },
  },
  created() {
      API.getRequest('cities-list').then(value => {
        if (value.data.success) this.cities=value.data.cities
      })
  }
}
</script>

<style>
.city_name{
  cursor: pointer;
  /*margin: 10px;*/

}
</style>
