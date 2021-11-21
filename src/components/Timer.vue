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
    <h1 class="font-bold text-gray-900">
      <span v-if="getCurrentSession.value === 4">- - - -</span>
      <span v-else v-for="index in 4 - getCurrentSession.value">&bull;</span>
    </h1>
  </div>
  <button v-if="!getIsStart" @click="startClicked">Start</button>
  <button v-if="getIsStart" @click="pauseClicked">Pause</button>
  <button @click="resetClicked">Reset</button>
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
      this.toggleValue(2);
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
