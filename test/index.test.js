import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Index from '@/pages/index';

Enzyme.configure({ adapter: new Adapter() });

describe('index 单侧', () => {
  test('index route should be render', () => {
    const wrapper = shallow(<Index data={{ title: '标题' }} />);
    expect(wrapper.find('.title').length).toEqual(1);
  });
});
