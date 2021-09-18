import React from 'react'
import { shallow } from 'enzyme'

import CreateUser from '../../components/CreateUser/index'

test('Should render CreateUser correctly', () => {
  const wrapper = shallow(<CreateUser />)
  expect(wrapper).toMatchSnapshot()
})