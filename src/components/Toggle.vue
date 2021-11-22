<template>
  <div class="mb-2 flex flex-row w-full justify-between items-center">
    <h1 class="text-gray-900">{{ label }}</h1>
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
      :class="{ 'bg-green-400': value }"
      @click="toggleValue(1)"
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
  },
  methods: {
    ...mapMutations(['toggleValue']),
  },
};
</script>
