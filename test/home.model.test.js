import { saga } from 'dva';
import * as service from '../src/pages/home/service';
import homeModel from '../src/pages/home/model';

const { effects } = saga;
describe('home Model', () => {
  it('home Model loads', () => {
    expect(homeModel).toBeTruthy();
  });

  describe('effects', () => {
    it('home Model should work', () => {
      const { call, put } = effects;
      const getTodayListSaga = homeModel.effects.getTodayList;
      const generator = getTodayListSaga(
        { type: `getTodayList`, payload: {} },
        { call, put },
      );
      // let next = generator.next();
      // console.log('next.value===>', next.value);
      // expect(next.value).toEqual(call(service.getTodayList, 1000));
      // next = generator.next({
      //   result: {
      //     data: 1
      //   }
      // });
      // expect(next.value).toEqual(put({ type: `${homeModel.nameSpace}/setTodayList`, payload: '666' }));
    });
  });
});
