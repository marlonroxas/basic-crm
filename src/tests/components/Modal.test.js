import React from 'react'
import { shallow } from 'enzyme'

import Modal from '../../components/Modal/index'

test('Should render Modal correctly', () => {
  const wrapper = shallow(<Modal />)
  expect(wrapper).toMatchSnapshot()
})