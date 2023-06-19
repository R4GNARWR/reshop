<template>
  <TheHeader/>
  <router-view />
  <TheFooter/>
  <Msg v-if="msg"/>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
import Msg from "@/components/Msg";
import {useSessionStore} from "@/store/session";

export default {
  components: {Msg, TheFooter, TheHeader},
  computed:{
    msg(){return useSessionStore().msg}
  }


}
</script>
