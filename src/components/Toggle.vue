<template>
  <div class="flex flex-row w-full justify-between items-center my-1">
    <h1 class="text-gray-900 flex flex-row items-center">
      <span>{{ label }}</span> &nbsp;
      <span :aria-label="ariaval">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </h1>
    <div
      class="
        w-14
        h-8
        p-1
        flex flex-row
        items-center
        bg-gray-300
        rounded-full
        shadow-md
        transition-colors
      "
      :class="{ 'bg-blue-500': value }"
      @click="toggleValue(index)"
    >
      <div
        class="w-6 h-6 bg-white shadow-md rounded-full transition-transform"
        :class="{ 'translate-x-6': value }"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Toggle',
  props: {
    label: {
      type: String,
      default: 'Unknown property',
    },
    value: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      default: -1,
    },
    ariaval: {
      type: String,
      default: 'This is a tooltip',
    },
  },
  methods: {
    ...mapMutations(['toggleValue']),
  },
};
</script>

<style>
[aria-label] {
  position: relative;
}

[aria-label]:after {
  content: attr(aria-label);
  display: none;
  position: absolute;
  top: 110%;
  left: 10px;
  z-index: 5000;
  pointer-events: none;
  padding: 8px 10px;
  line-height: 15px;
  white-space: nowrap;
  text-decoration: none;
  text-indent: 0;
  overflow: visible;
  font-size: 0.9em;
  font-weight: normal;
  color: #212121;
  background-color: rgba(255, 255, 255, 0.8);
  border-left: 6px solid #3b82f6;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -webkit-box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.3);
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.3);
}

[aria-label]:hover:after,
[aria-label]:focus:after {
  display: block;
}
</style>
