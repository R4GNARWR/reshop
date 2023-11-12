<template>
  <TheHeader :showMobileMenu = "showFooterActions"/>
  <main>
    <router-view />
  </main>
  <TheFooter ref="footerEl"/>
  <Msg v-if="msg"/>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
import Msg from "@/components/Msg";
import { useSessionStore } from "@/store/session";

export default {
  components: { Msg, TheFooter, TheHeader },
  computed: {
    msg() {
      return useSessionStore().msg;
    },
  },
  data() {
    return {
      showFooterActions: true,
    };
  },
  methods: {
    onScroll() {
      this.$nextTick(() => {
        if (this.$refs.footerEl && this.$refs.footerEl.$el) {
          const footerOffsetTop = this.$refs.footerEl.$el.offsetTop - this.$refs.footerEl.$el.offsetHeight*1;
          if (window.scrollY > footerOffsetTop) {
            this.showFooterActions = false;
          } else {
            this.showFooterActions = true;
          }
        }
      });
    },
  },
  created() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
};
</script>
