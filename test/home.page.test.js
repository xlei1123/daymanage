import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import HomePage from '@/pages/home';

describe('TestView', () => {
  const action = 'testView/query';
  const initialState = {
    isLoading: true,
    queryResult: {},
  };
  const mockStore = configureStore();
  let store;
  let container;
  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<HomePage store={store} />);
  });

  /* 测试 state 到 props 的映射是否正确 */

  test('should pass state to props', () => {
    const props = container.props();
    expect(props).toHaveProperty('isLoading', initialState.isLoading);
    expect(props).toHaveProperty('queryResult', initialState.queryResult);
  });

  /* 测试 actions 到 props 的映射是否正确 */

  test('should pass actions to props', () => {
    const props = container.props();
    expect(props).toHaveProperty('queryList', expect.any(Function));
  });
});
