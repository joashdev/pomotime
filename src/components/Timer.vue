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
      {{ mins.toString().padStart(2, '0') }}:{{
        secs.toString().padStart(2, '0')
      }}
    </h1>
    <h1 class="font-bold text-gray-900">
      <span v-if="getCurrentSession.value === 4">----</span>
      <span v-else v-for="index in 4 - getCurrentSession.value">&bull;</span>
    </h1>
  </div>
  <button @click="startClicked">Start</button>
  <button @click="pauseClicked">Pause</button>
  <button @click="resetClicked">Reset</button>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
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
    this.initLocalTimer();
  },
  methods: {
    initLocalTimer() {
      if (!this.getTimers.minsleft && !this.getTimers.secsleft) {
        if (this.getCurrentSession.text === 'Long Break') {
          this.mins = this.getTimers.longBreak;
        } else if (this.getCurrentSession.text === 'Pomodoro') {
          this.mins = 0;
        } else if (this.getCurrentSession.text === 'Short Break') {
          this.mins = this.getTimers.shortBreak;
        }
        // this.mins = 0; // TODO: REMOVE this line on prod
        this.secs = 3; // FIXME: set this.secs to 0
      } else {
        this.mins = this.getTimers.minsleft;
        this.secs = this.getTimers.secsleft;
      }
    },
    soundAlarm() {
      if (this.soundAlarmValue) {
        this.audio.play();
      }
    },
    decrementTimer() {
      this.secs--;
      if (this.secs === 0 && this.mins === 0) {
        clearInterval(this.interval);
        this.isStart = false;
        this.soundAlarm();
        this.increment({ index: 4 });
        this.initLocalTimer();
      } else if (this.secs === -1) {
        this.mins--;
        this.secs = 59;
      }
    },
    startClicked() {
      if (!this.isStart) {
        this.isStart = true;
        this.interval = null;
        this.interval = setInterval(this.decrementTimer, 1000);
      }
    },
    pauseClicked() {
      this.isStart = false;
      clearInterval(this.interval);
    },
    resetClicked() {
      clearInterval(this.interval);
      this.initLocalTimer();
    },
    ...mapMutations(['increment']),
  },
  computed: {
    ...mapGetters(['getTimers', 'getCurrentSession', 'soundAlarmValue']),
  },
};
</script>
