import { Effect, Reducer } from 'umi';
import * as service from './service';
export interface IndexModelState {
  todayList: { total?: number; list?: any[] };
  outDateList: { total?: number; list?: any[] };
  tomorrowList: { total?: number; list?: any[] };
}
export interface HomeModelType {
  namespace: 'home';
  state: IndexModelState;
  effects: {
    getTodayList: Effect;
  };
  reducers: {
    setTodayList: Reducer<IndexModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  // subscriptions: { setup: Subscription };
}

const HomeModel: HomeModelType = {
  namespace: 'home',
  state: {
    todayList: {},
    outDateList: {},
    tomorrowList: {},
  },

  effects: {
    *getTodayList({ payload }, { call, put }) {
      const result = yield call(service.getTodayList, payload);
      yield put({
        type: 'setTodayList',
        payload: result.data,
      });
    },
  },
  reducers: {
    setTodayList(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default HomeModel;
