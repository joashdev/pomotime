<template>
  <div
    class="
      w-full
      h-screen
      py-4
      flex
      justify-center
      items-center
      bg-no-repeat bg-cover bg-center
      overflow-y-scroll
    "
    :class="
      getSelectedBg === 'green-trees' ? 'bg-green-trees' : 'bg-flowing-river'
    "
  >
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/settings">Settings</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  mounted() {
    console.log(this.getSelectedBg);
  },
  computed: {
    ...mapGetters(['getSelectedBg']),
  },
};
</script>
