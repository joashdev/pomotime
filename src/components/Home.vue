<template>
  <div
    class="
      mt-0
      mb-auto
      w-10/12
      sm:w-1/2
      md:w-3/8
      lg:w-1/3
      xl:w-1/4
      rounded-b-2xl
      flex flex-col
      justify-center
      items-center
      bg-white bg-opacity-50
      backdrop-filter backdrop-blur-lg
      shadow-2xl
      py-8
    "
  >
    <h1 class="font-extrabold text-2xl text-gray-900">Home</h1>
    <Timer />
  </div>
</template>

<script>
import Timer from './Timer.vue';
export default {
  name: 'Home',
  components: {
    Timer,
  },
  methods: {
    gotoSettings() {
      this.$router.push('/settings');
    },
  },
};
</script>
