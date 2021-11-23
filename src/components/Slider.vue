<template>
  <div class="flex flex-row w-full justify-between items-center">
    <h1 class="text-gray-900">{{ label }}</h1>
    <h1 class="text-gray-900">{{ localValue }} mins</h1>
  </div>
  <input
    type="range"
    name="inputRange"
    min="1"
    max="60"
    step="1"
    :value="localValue"
    @input="updateValue"
    @change="changeValue"
    class="mb-2 text-blue-800"
  />
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
      localValue: 0,
    };
  },
  mounted() {
    this.localValue = this.value;
  },
  props: {
    label: {
      type: String,
      default: 'Unknown property',
    },
    value: {
      type: Number,
      default: 0,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    updateValue(e) {
      this.localValue = e.target.value;
    },
    changeValue(e) {
      this.$store.commit('increment', {
        index: this.index,
        value: parseInt(e.target.value),
      });
    },
  },
  watch: {
    value: function (newVal) {
      this.localValue = newVal;
    },
  },
};
</script>
