<template>
  <div
    class="
      my-2
      dropdown-wrapper
      relative
      w-full
      rounded-sm
      cursor-pointer
      transition-colors
    "
    :class="{ 'bg-white has-box-shadow': show }"
    @click="show = !show"
  >
    <button
      class="
        w-full
        flex flex-row
        justify-between
        text-gray-900
        whitespace-no-wrap
        rounded
      "
    >
      <span> Background Image</span>
      <span>
        <svg
          v-if="!show"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <svg
          v-if="show"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </span>
    </button>
    <transition name="slide-in-up">
      <div
        v-if="show"
        class="
          dropdown-menu
          bg-white
          absolute
          z-10
          shadow-lg
          rounded-b-lg
          w-full
          border-8 border-white
          transition
          duration-300
        "
      >
        <ul class="flex flex-col overflow-hidden gap-y-2">
          <li
            class="
              flex flex-row
              items-center
              gap-x-4
              hover:bg-blue-200
              transition
              duration-300
            "
            v-for="(bg, index) in getBgs"
            :key="index"
            @click="changeBg(bg.value)"
          >
            <img
              :class="{ 'border-blue-400 border-4': bg.value == getSelectedBg }"
              :src="bg.icon"
              alt="preview"
              class="h-16 w-24"
            />
            {{ bg.name }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'Dropdown',
  data() {
    return {
      show: false,
    };
  },
  methods: {
    ...mapMutations(['changeBg']),
  },
  computed: {
    ...mapGetters(['getBgs', 'getSelectedBg']),
  },
};
</script>

<style>
.has-box-shadow {
  outline: none;
  box-shadow: 0px 1px 0px 3px #fff;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

/* Slide-in-up animation*/
.slide-in-up-enter-active,
.slide-in-up-leave-active {
  transition: all 0.5s;
  transform: translateY(0);
}
.slide-in-up-enter-from,
.slide-in-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Slide-in-right animation*/
.slide-in-right-enter-active,
.slide-in-right-leave-active {
  transition: all 0.5s;
  transform: translateX(0);
}
.slide-in-right-enter,
.slide-in-right-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

/* Slide-in-left animation*/
.slide-in-left-enter-active,
.slide-in-left-leave-active {
  transition: all 0.5s;
  transform: translateX(0);
}
.slide-in-left-enter,
.slide-in-left-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Scale animation*/
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s;
  transform: scale(1);
}
.scale-enter,
.scale-leave-to {
  opacity: 0;
  transform: scale(0);
}

/* Rotate animation*/
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.5s;
  transform: scale(1) rotate(-360deg);
}
.rotate-enter,
.rotate-leave-to {
  opacity: 0;
  transform: scale(0) rotate(360deg);
}
</style>
