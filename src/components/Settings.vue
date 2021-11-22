<template>
  <div
    class="
      w-10/12
      sm:w-1/2
      md:w-3/8
      lg:w-1/4
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
    <div class="flex flex-col w-10/12 my-4">
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
      <h1
        class="text-xs text-right text-red-500 underline cursor-pointer"
        @click="resetDefault"
      >
        Restore default
      </h1>
      <h1 class="mt-6 text-center font-extralight">
        Created by &nbsp;<a
          class="font-semibold underline"
          href="https://github.com/joashdev"
          title="visit github.com/joashdev"
          >joash</a
        >
      </h1>
    </div>
    <button class="mb-8" @click="gotoHome" title="Go to Home">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 text-gray-900"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Toggle from './Toggle.vue';
import Slider from './Slider.vue';
export default {
  name: 'Settings',
  components: {
    Toggle,
    Slider,
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
    ...mapMutations(['resetDefault']),
  },
  computed: {
    ...mapGetters(['getTimers', 'soundAlarmValue']),
  },
};
</script>
