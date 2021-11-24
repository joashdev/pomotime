<template>
  <div
    class="
      mt-0
      py-6
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
    "
  >
    <h1 class="font-extrabold text-2xl text-gray-900 mb-4">Settings</h1>
    <div class="flex flex-col w-10/12">
      <Slider :label="'Pomodoro Time'" :value="getTimers.pomodoro" :index="1" />
      <Slider
        :label="'Short Break Time'"
        :value="getTimers.shortBreak"
        :index="2"
      />
      <Slider
        :label="'Long Break Time'"
        :value="getTimers.longBreak"
        :index="3"
      />
      <Toggle :label="'Sound Alarm'" :value="soundAlarmValue" :index="1" />
      <Dropdown />
      <h1
        class="text-xs text-right text-red-500 underline cursor-pointer"
        @click="resetDefault"
      >
        Restore default
      </h1>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Toggle from './Toggle.vue';
import Slider from './Slider.vue';
import Dropdown from './Dropdown.vue';
export default {
  name: 'Settings',
  components: {
    Toggle,
    Slider,
    Dropdown,
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
    ...mapMutations(['resetDefault']),
  },
  computed: {
    ...mapGetters(['getTimers', 'soundAlarmValue']),
  },
};
</script>
