
export default {

    namespace: 'demo',
  
    state: {
      flag:true
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
      // save(state, action) {
      //   return { ...state, ...action.payload };
      // },
      setState(state,{payload}){
        return{
          ...state,
          ...payload
        };
      }
    },
  
  };
  