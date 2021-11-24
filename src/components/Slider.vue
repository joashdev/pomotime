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

<!-- <style>
input[type='range'] {
  height: 25px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type='range']:focus {
  outline: none;
}
input[type='range']::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #2497e3;
  border-radius: 1px;
  border: 0px solid #000000;
}
input[type='range']::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #2497e3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #a1d0ff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}
input[type='range']:focus::-webkit-slider-runnable-track {
  background: #2497e3;
}
input[type='range']::-moz-range-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #2497e3;
  border-radius: 1px;
  border: 0px solid #000000;
}
input[type='range']::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #2497e3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #a1d0ff;
  cursor: pointer;
}
input[type='range']::-ms-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type='range']::-ms-fill-lower {
  background: #2497e3;
  border: 0px solid #000000;
  border-radius: 2px;
  box-shadow: 0px 0px 0px #000000;
}
input[type='range']::-ms-fill-upper {
  background: #2497e3;
  border: 0px solid #000000;
  border-radius: 2px;
  box-shadow: 0px 0px 0px #000000;
}
input[type='range']::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #2497e3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #a1d0ff;
  cursor: pointer;
}
input[type='range']:focus::-ms-fill-lower {
  background: #2497e3;
}
input[type='range']:focus::-ms-fill-upper {
  background: #2497e3;
}
</style> -->
