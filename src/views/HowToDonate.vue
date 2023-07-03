<template>
  <main>
      <section class="info">
        <div v-html="content"></div>
      </section>
    </main>
</template>

<script>
import {useSessionStore} from "@/store/session";

export default {
  computed:{content(){return JSON.parse(useSessionStore().settings.find(el=>el.setting_type==="HowToDonate").setting_json)},}
}
</script>

<style src="@/assets/css/info.css"></style>
