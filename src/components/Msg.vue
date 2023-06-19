<template>
  <v-snackbar
    v-model="msg"
    color="orange-accent-4"
    rounded="pill"
  >
    {{ msg }}
  </v-snackbar>
</template>

<script>
import {useSessionStore} from "@/store/session";

export default {
  name: "Msg",
  computed:{
    msg(){return useSessionStore().msg}
  }
}
</script>

