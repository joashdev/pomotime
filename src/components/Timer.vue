<template>
  <div
    class="
      py-6
      px-3
      flex flex-col flex-shrink
      justify-center
      items-center
      rounded-full
      border-8 border-blue-800
      my-4
    "
  >
    <h1 class="font-semibold text-gray-900">{{ getCurrentSession.text }}</h1>
    <h1 class="font-thin text-5xl text-gray-900">
      {{ getTimers.minsleft.toString().padStart(2, '0') }}:{{
        getTimers.secsleft.toString().padStart(2, '0')
      }}
    </h1>
    <h1
      class="font-bold text-gray-900 cursor-default"
      :title="`${4 - getCurrentSession.value} pomodoro left`"
    >
      <span v-if="getCurrentSession.value === 4" title="You deserve a break"
        >- - - -</span
      >
      <span v-else v-for="index in 4 - getCurrentSession.value" :key="index"
        >&bull;</span
      >
    </h1>
  </div>
  <div class="flex flex-row">
    <button class="text-gray-900" title="Reset timer" @click="resetClicked">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <button
      class="bg-white rounded-full mx-2"
      v-if="!getIsStart"
      title="Start timer"
      @click="startClicked"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 text-gray-900"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <button
      class="bg-white rounded-full mx-2"
      v-if="getIsStart"
      title="Pause timer"
      @click="pauseClicked"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 text-gray-900"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
    <button
      v-if="!soundAlarmValue"
      title="Turn alarm ON"
      @click="toggleValue(1)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          clip-rule="evenodd"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
        />
      </svg>
    </button>
    <button
      v-if="soundAlarmValue"
      title="Turn alarm OFF"
      @click="toggleValue(1)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 text-gray-900"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
        />
      </svg>
    </button>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import audioFile from '../assets/3beeps.ogg';
export default {
  name: 'Timer',
  data() {
    return {
      interval: null,
      audio: new Audio(audioFile),
    };
  },
  created() {
    this.audio.src = audioFile;
    this.initTimeleft();
  },
  beforeUnmount() {
    clearInterval(this.interval);
    this.getIsStart && this.toggleValue(2);
  },
  methods: {
    soundAlarm() {
      if (this.soundAlarmValue) {
        this.audio.play();
      }
    },
    decrementTimer() {
      let secs = this.getTimers.secsleft;
      let mins = this.getTimers.minsleft;
      secs--;
      this.mutateTimeleft({ minsleft: mins, secsleft: secs });
      if (secs === 0 && mins === 0) {
        clearInterval(this.interval);
        this.toggleValue(2);
        this.soundAlarm();
        this.increment({ index: 4 });
        this.initTimeleft();
        return;
      } else if (secs === -1) {
        mins--;
        secs = 59;
        this.mutateTimeleft({ minsleft: mins, secsleft: secs });
      }
    },
    startClicked() {
      if (!this.getIsStart) {
        this.toggleValue(2);
        this.interval = null;
        this.interval = setInterval(this.decrementTimer, 1000);
      }
    },
    pauseClicked() {
      this.toggleValue(2);
      clearInterval(this.interval);
    },
    resetClicked() {
      clearInterval(this.interval);
      this.getIsStart && this.toggleValue(2);
      this.mutateTimeleft({ minsleft: 0, secsleft: 0 });
      this.initTimeleft();
    },
    ...mapMutations([
      'increment',
      'mutateTimeleft',
      'toggleValue',
      'initTimeleft',
    ]),
  },
  computed: {
    ...mapGetters([
      'getTimers',
      'getCurrentSession',
      'soundAlarmValue',
      'getIsStart',
    ]),
  },
};
</script>
