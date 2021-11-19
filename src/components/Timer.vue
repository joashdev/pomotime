<template>
  <div
    class="
      h-48
      w-48
      flex flex-col
      justify-center
      items-center
      rounded-full
      border-8 border-blue-800
      my-4
    "
  >
    <h1 class="font-semibold text-gray-900">Pomodoro</h1>
    <h1 class="font-thin text-5xl text-gray-900">
      {{ mins.toString().padStart(2, '0') }}:{{
        secs.toString().padStart(2, '0')
      }}
    </h1>
    <h1 class="font-bold text-gray-900">
      <span>&bull;</span>
      <span>&bull;</span>
      <span>&bull;</span>
      <span>&bull;</span>
    </h1>
  </div>
  <button @click="startClicked">Start</button>
  <button @click="pauseClicked">Pause</button>
  <button @click="resetClicked">Reset</button>
</template>
<script>
import { mapGetters } from 'vuex';
import audioFile from '../assets/3beeps.ogg';
export default {
  name: 'Timer',
  data() {
    return {
      mins: 0,
      secs: 0,
      interval: null,
      isStart: false,
      audio: new Audio(audioFile),
    };
  },
  mounted() {
    this.audio.src = audioFile;
    if (!this.getTimers.minsleft && !this.getTimers.secsleft) {
      if (this.getInterval === 7) {
        this.mins = this.getTimers.longBreak;
      } else if (this.getInterval % 2 === 0) {
        this.mins = this.getTimers.pomodoro;
      } else if (this.getInterval % 2 === 1) {
        this.mins = this.getTimers.shortBreak;
      }
      this.mins = 0; // TODO: REMOVE this line on prod
      this.secs = 3;
    } else {
      this.mins = this.getTimers.minsleft;
      this.secs = this.getTimers.secsleft;
    }
  },
  methods: {
    soundAlarm() {
      if (this.soundAlarmValue) {
        clearInterval(this.interval);
        // TODO: FIX sound
        this.audio.play();
      }
    },
    decrementTimer() {
      this.secs--;
      if (this.secs === 0 && this.mins === 0) {
        this.soundAlarm();
      } else if (this.secs === -1) {
        this.mins--;
        this.secs = 59;
      }
    },
    startClicked() {
      if (!this.isStart) {
        this.isStart = !this.isStart;
        this.interval = setInterval(this.decrementTimer, 1000);
      }
    },
    pauseClicked() {
      this.isStart = !this.isStart;
      clearInterval(this.interval);
    },
    resetClicked() {
      this.mins = 25;
      this.secs = 0;
    },
  },
  computed: {
    ...mapGetters(['getTimers', 'getInterval', 'soundAlarmValue']),
  },
};
</script>
