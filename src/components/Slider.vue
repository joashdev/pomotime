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
    class="h-5 w-full mt-1 mb-3"
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

<style>
input[type='range'] {
  height: 8px;
  width: 100%;
  /* -webkit-appearance: none; */
  outline: none;
  border-radius: 25px;
  background: #f2f2f2;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.2);
}
input[type='range']::-moz-range-progress {
  height: 8px;
  border-radius: 25px 0px 0px 25px;
  background: #3b82f6;
}
input[type='range']::-moz-range-thumb {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #3b82f6;
  background: #3b82f6;
  -webkit-appearance: none;
}
</style>
