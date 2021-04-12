import React from 'react';
import { shallow } from 'enzyme';
import { Counter } from '../Counter';

describe('Counter component', () => {
  it('should render component with 2 btns', () => {
    const wrapper = shallow(<Counter />);

    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(3);
  })

  it('should change table on Click', () => {
    const wrapper = shallow(<Counter />);
    const addBtn = wrapper.find('button:first-child');

    addBtn.simulate('click');

    const resultBlock = wrapper.find('div[role="result"]');
    expect(resultBlock.text()).toBe('1');
  })

  it('should calculate', () => {
    const wrapper = shallow(<Counter />);
    const addBtn = wrapper.find('button:first-child');
    const removeBtn = wrapper.find('.remove');

    addBtn.simulate('click');
    addBtn.simulate('click');
    removeBtn.simulate('click');

    const resultBlock = wrapper.find('div[role="result"]');
    expect(resultBlock.text()).toBe('1');
  })

  it('should reset value to 0', () => {
    const wrapper = shallow(<Counter />);
    const resetBtn = wrapper.find('.btnReset');

    resetBtn.simulate('click');

    const resultBlock = wrapper.find('div[role="result"]');

    expect(resultBlock.text()).toBe('0');
  })

})
