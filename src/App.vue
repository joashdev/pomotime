<template>
  <div
    class="
      w-full
      h-screen
      py-4
      flex flex-col
      justify-center
      items-center
      bg-no-repeat bg-cover bg-center
      overflow-y-scroll
    "
    :class="[
      getSelectedBg === 'flowing-river' && 'bg-flowing-river',
      getSelectedBg === 'green-trees' && 'bg-green-trees',
      getSelectedBg === 'study-lofi' && 'bg-study-lofi',
    ]"
  >
    <div
      id="nav"
      class="
        mt-auto
        mb-0
        w-10/12
        sm:w-1/2
        md:w-3/8
        lg:w-1/3
        xl:w-1/4
        flex flex-row
        justify-evenly
        items-center
        rounded-t-2xl
        h-12
      "
    >
      <router-link
        class="
          w-1/3
          h-full
          flex
          items-center
          justify-center
          bg-white bg-opacity-20
          backdrop-filter backdrop-blur-md
          font-thin
          hover:bg-opacity-40 hover:font-normal
          rounded-tl-2xl
          text-gray-800
        "
        to="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
          />
        </svg>
        &nbsp; Home
      </router-link>
      <router-link
        class="
          w-1/3
          h-full
          flex
          items-center
          justify-center
          bg-white bg-opacity-30
          backdrop-filter backdrop-blur-md
          font-thin
          hover:bg-opacity-40 hover:font-normal
          text-gray-800
        "
        to="/settings"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clip-rule="evenodd"
          />
        </svg>
        &nbsp;Settings
      </router-link>
      <router-link
        class="
          w-1/3
          h-full
          rounded-tr-2xl
          flex
          items-center
          justify-center
          bg-white bg-opacity-30
          backdrop-filter backdrop-blur-md
          font-thin
          hover:bg-opacity-40 hover:font-normal
          text-gray-800
        "
        to="/about"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          />
        </svg>
        &nbsp; About
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  methods: {
    getClass() {
      switch (this.getSelectedBg()) {
        case 'flowing-river':
          return 'bg-flowing-river';
          break;
        default:
          break;
      }
    },
  },
  computed: {
    ...mapGetters(['getSelectedBg']),
  },
};
</script>

<style>
.active {
  background-color: rgba(255, 255, 255, 0.6) !important;
  font-weight: bold !important;
}
</style>
