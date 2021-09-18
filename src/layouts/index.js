import React from "react";
import PropTypes from 'prop-types'

import Header from "../components/Header";
import Footer from "../components/Footer";

import { Layout } from 'antd'
const { Content } = Layout

export default function Index ({ children }) {
  return (
    <Layout className="app">
      <Header />
      <Content>
        {children({})}
      </Content>
      <Footer />
    </Layout>
  )
}

Index.propTypes = {
  children: PropTypes.any
}
