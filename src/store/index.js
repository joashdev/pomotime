import { createStore } from 'vuex';

const store = createStore({
  state: {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    nthInterval: 0,
    minsleft: null,
    secsleft: null,
    isStart: false,
    soundAlarm: true,
  },
  getters: {
    getTimers: (state) => {
      return {
        pomodoro: state.pomodoro,
        shortBreak: state.shortBreak,
        longBreak: state.longBreak,
        minsleft: state.minsleft,
        secsleft: state.secsleft,
      };
    },
    getInterval: (state) => {
      return state.nthInterval;
    },
    soundAlarmValue: (state) => {
      return state.soundAlarm;
    },
  },
  mutations: {
    increment: (state, payload) => {
      if (payload?.index) {
        switch (payload.index) {
          case 1:
            payload?.value
              ? (state.pomodoro = payload.value)
              : (state.pomodoro += 1);
            break;
          case 2:
            payload?.value
              ? (state.shortBreak = payload.value)
              : (state.shortBreak += 1);
            break;
          case 3:
            payload?.value
              ? (state.longBreak = payload.value)
              : (state.longBreak += 1);
            break;
          case 4:
            state.nthInterval = (state.nthInterval + 1) % 8;
            break;
          default:
            break;
        }
      }
    },
    decrement: (state, payload) => {
      if (payload?.index) {
        switch (payload.index) {
          case 1:
            payload?.value
              ? (state.pomodoro = payload.value)
              : (state.pomodoro -= 1);
            break;
          case 2:
            payload?.value
              ? (state.shortBreak = payload.value)
              : (state.shortBreak -= 1);
            break;
          case 3:
            payload?.value
              ? (state.longBreak = payload.value)
              : (state.longBreak -= 1);
            break;
          default:
            break;
        }
      }
    },
    toggleValue: (state, index) => {
      switch (index) {
        case 1:
          state.soundAlarm = !state.soundAlarm;
          break;

        default:
          break;
      }
    },
    mutateTimeleft: (state, payload) => {
      state.minsleft = payload.minsleft;
      state.secsleft = payload.secsleft;
    },
  },
});

export default store;
