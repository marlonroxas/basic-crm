import React from 'react'
import { shallow } from 'enzyme'

import Pagination from '../../components/Pagination/index'

test('Should render Pagination correctly', () => {
  const wrapper = shallow(<Pagination />)
  expect(wrapper).toMatchSnapshot()
})