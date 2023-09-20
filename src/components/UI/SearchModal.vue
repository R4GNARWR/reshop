<template>
    <div class="mobile-modal" :class="{'active' : modalActive}">
      <div class="close_window" @click="modalActive = !modalActive">Закрыть</div>
      <SearchBar></SearchBar>
    </div>

</template>

<script>
import SearchBar from './SearchBar.vue'

export default {
  components: {SearchBar},
  name: 'SearchModal',
  props :['modalActive'],
}

</script>

<style scoped>
.header__search
{
    width: 100%;
}
.search-result
{
  background: transparent;
}
</style>