<template>
  <div
    class="
      w-10/12
      sm:w-1/2
      md:w-3/8
      lg:w-1/3
      rounded-2xl
      flex flex-col
      justify-center
      items-center
      bg-white bg-opacity-50
      backdrop-filter backdrop-blur-lg
      shadow-2xl
    "
  >
    <h1 class="font-extrabold text-4xl text-gray-900 mt-6">Settings</h1>
    <div class="flex flex-col w-10/12">
      <Toggle :label="'Sound'" :value="true" />
    </div>
    <button class="my-10" @click="gotoHome" title="Go to Home">Home</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Toggle from './Toggle.vue';
// import Slider from './Slider.vue';
export default {
  name: 'Settings',
  components: {
    Toggle,
    // Slider,
  },
  data() {
    return {
      slider: null,
    };
  },
  methods: {
    gotoHome() {
      this.$router.push('/');
    },
    handleThis(e) {
      console.log(e.target.value);
    },
    submitThis(e) {
      console.log('submit value: ', e.target.value);
    },
  },
};
</script>
