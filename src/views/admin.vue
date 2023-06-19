<template>
    <main class="admin-page">
      <aside class="menu active">
        <div class="menu__links">
          <router-link to="/admin/settings" class="menu__link">Настройки</router-link>
          <router-link to="/admin/main" class="menu__link">Главная</router-link>
          <router-link to="/admin/pages" class="menu__link">Страница “Всё”</router-link>
          <router-link to="/admin/catalog" class="menu__link">Каталог</router-link>
          <router-link to="/admin/properties" class="menu__link">Менеджер свойств</router-link>
          <router-link to="/admin/innerPages" class="menu__link">Внутренние страницы</router-link>
          <router-link to="/admin/clients" class="menu__link">Клиенты</router-link>
        </div>
      </aside>
      <NuxtChild />
    </main>
</template>

<script>
export default {
    layout: 'AdminLayout',

    mounted() {
      this.$router.push('/admin/settings')
    }
}
</script>

<style scoped>
.admin-page {
    display: flex;
    flex-grow: 1;
    position: relative;
    justify-content: center;
    gap: 10px;
    min-height: calc(100vh - 68px);
}
.router-link-active {
    background: #a9a9a9;
}
</style>
