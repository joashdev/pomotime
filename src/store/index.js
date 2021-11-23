import { createStore } from 'vuex';

const store = createStore({
  state: {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    nthInterval: 0,
    minsleft: 0,
    secsleft: 0,
    isStart: false,
    soundAlarm: true,
    backgrounds: [
      {
        name: 'Flowing River',
        value: 'flowing-river',
        icon: '/flowing-river-small.jpg',
      },
      {
        name: 'Green Trees',
        value: 'green-trees',
        icon: '/green-trees-small.jpg',
      },
    ],
    selectedBg: 'flowing-river',
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
    getCurrentSession: (state) => {
      let text;
      if (state.nthInterval === 7) {
        text = 'Long Break';
      } else if (state.nthInterval % 2 === 0) {
        text = 'Pomodoro';
      } else if (state.nthInterval % 2 === 1) {
        text = 'Short Break';
      }
      return { text: text, value: Math.ceil(state.nthInterval / 2) };
    },
    soundAlarmValue: (state) => {
      return state.soundAlarm;
    },
    getIsStart: (state) => {
      return state.isStart;
    },
    getSelectedBg: (state) => {
      return state.selectedBg;
    },
    getBgs: (state) => {
      return state.backgrounds;
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
        case 2:
          state.isStart = !state.isStart;
          break;
        default:
          break;
      }
    },
    initTimeleft(state) {
      if (state.minsleft === 0 && state.secsleft === 0) {
        if (state.nthInterval === 7) {
          state.minsleft = state.longBreak;
        } else if (state.nthInterval % 2 === 0) {
          state.minsleft = state.pomodoro;
        } else if (state.nthInterval % 2 === 1) {
          state.minsleft = state.longBreak;
        }
        state.secsleft = 0;
      }
    },
    mutateTimeleft: (state, payload) => {
      state.minsleft = payload.minsleft;
      state.secsleft = payload.secsleft;
    },
    resetDefault: (state) => {
      state.pomodoro = 25;
      state.shortBreak = 5;
      state.longBreak = 15;
      state.soundAlarm = true;
    },
    changeBg: (state, value) => {
      state.selectedBg = value;
    },
  },
});

export default store;
