import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import * as service from './service';
export interface DayListModelState {
  dayList: { total?: number; list?: any[] };
}
export interface DayModelType {
  namespace: 'day';
  state: DayListModelState;
  effects: {
    getDayList: Effect;
  };
  reducers: {
    setDayList: Reducer<DayListModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  // subscriptions: { setup: Subscription };
}

const DayModel: DayModelType = {
  namespace: 'day',
  state: {
    dayList: {},
  },

  effects: {
    *getDayList({ payload }, { call, put }) {
      const result = yield call(service.getDayList, payload);
      console.log('result===>', result);

      yield put({
        type: 'setDayList',
        payload: result.data,
      });
    },
  },
  reducers: {
    setDayList(state, action) {
      return {
        ...state,
        dayList: {
          ...action.payload,
        },
      };
    },
  },
};

export default DayModel;
