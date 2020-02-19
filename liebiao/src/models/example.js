
export default {

  namespace: 'example',

  state: {
    flag:"1"
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    setState(state, {payload}) {
      return { ...state, ...payload };
    },
  },

};
