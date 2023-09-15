<template>
      <section class="info">
        <div class="container">
          <div v-html="content"></div>
        </div>
      </section>
</template>

<script>
import {useSessionStore} from "@/store/session";

export default {
  computed:{content(){return JSON.parse(useSessionStore().settings.find(el=>el.setting_type==="HtmlAbout").setting_json)},}
}
</script>

<style src="@/assets/css/info.css"></style>
